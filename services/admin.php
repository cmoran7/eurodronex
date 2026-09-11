<?php
session_open();
header('Cache-Control: no-store');header('X-Robots-Tag: noindex, nofollow');
require __DIR__.'/rate-limit.php';
$message='';$configured=$config['admin_email']!==''&&$config['admin_password_hash']!=='';
if (!empty($_SESSION['admin']) && time()-($_SESSION['admin_last']??0)>1800) unset($_SESSION['admin']);
if(!empty($_SESSION['admin']))$_SESSION['admin_last']=time();
if(($_SERVER['REQUEST_METHOD']??'GET')==='POST'){
    if(!csrf_valid()){http_response_code(403);$message='La sesión ha caducado. Recargue la página.';}
    elseif(($_POST['action']??'')==='logout') {$_SESSION=[];session_regenerate_id(true);redirect_to('/acceso');}
    elseif(($_POST['action']??'')==='login'){
        if(!$configured){http_response_code(503);$message='El acceso de administración está pendiente de configuración.';}
        elseif(!rate_allowed('login',5,900)){http_response_code(429);$message='Demasiados intentos. Espere 15 minutos.';}
        elseif(is_string($_POST['email']??null)&&is_string($_POST['password']??null)&&hash_equals(mb_strtolower($config['admin_email']),mb_strtolower(trim($_POST['email'])))&&password_verify($_POST['password'],$config['admin_password_hash'])){
            session_regenerate_id(true);$_SESSION['admin']=true;$_SESSION['admin_last']=time();$_SESSION['csrf']=bin2hex(random_bytes(32));redirect_to('/admin/blog');
        }else{http_response_code(401);$message='Email o contraseña incorrectos.';}
    }
    elseif(!empty($_SESSION['admin'])&&($_POST['action']??'')==='save'){
        try{
            $new=[];foreach(['slug','title','category','date','readTime','excerpt','image'] as $key){if(!is_string($_POST[$key]??''))throw new RuntimeException('Datos de formulario no válidos.');$new[$key]=trim($_POST[$key]??'');}
            if(!preg_match('/^[a-z0-9]+(?:-[a-z0-9]+)*$/',$new['slug'])||strlen($new['slug'])>150)throw new RuntimeException('Use una URL con letras minúsculas, números y guiones.');
            if($new['title']===''||$new['excerpt']===''||mb_strlen($new['title'])>200||mb_strlen($new['excerpt'])>1000)throw new RuntimeException('Indique un título y un resumen válidos.');
            if(isset($_FILES['cover'])&&$_FILES['cover']['error']!==UPLOAD_ERR_NO_FILE){
                $upload=$_FILES['cover'];
                if($upload['error']!==UPLOAD_ERR_OK||$upload['size']>3*1024*1024||!is_uploaded_file($upload['tmp_name']))throw new RuntimeException('La imagen debe pesar como máximo 3 MB.');
                $mime=(new finfo(FILEINFO_MIME_TYPE))->file($upload['tmp_name']);$ext=['image/jpeg'=>'jpg','image/png'=>'png','image/webp'=>'webp'][$mime]??null;
                if(!$ext||!getimagesize($upload['tmp_name']))throw new RuntimeException('La imagen debe ser un JPG, PNG o WebP válido.');
                $new['image']='/assets/img/blog-'.hash_file('sha256',$upload['tmp_name']).'.'.$ext;
                if(!is_file(ROOT.$new['image'])&&!move_uploaded_file($upload['tmp_name'],ROOT.$new['image']))throw new RuntimeException('No se pudo guardar la imagen. Revise los permisos del alojamiento.');
            }
            if(!preg_match('#^/assets/img/[a-zA-Z0-9._-]+\.(?:jpg|jpeg|png|webp)$#',$new['image'])||!is_file(ROOT.$new['image']))throw new RuntimeException('Seleccione una imagen local válida.');
            $new['published']=isset($_POST['published']);$new['featured']=isset($_POST['featured']);$new['sections']=[];
            $heads=$_POST['section_h']??[];$paragraphs=$_POST['section_p']??[];
            if(!is_array($heads)||!is_array($paragraphs)||count($heads)>100)throw new RuntimeException('Secciones no válidas.');
            foreach($heads as $i=>$h){if(!is_string($h)||!is_string($paragraphs[$i]??''))throw new RuntimeException('Sección no válida.');$p=trim($paragraphs[$i]??'');if(trim($h)!==''||$p!=='')$new['sections'][]=['h'=>trim($h),'p'=>$p];}
            if(!$new['sections'])throw new RuntimeException('Añada al menos una sección al artículo.');
            $dir=$config['storage_path'];if(!is_dir($dir))mkdir($dir,0700,true);
            $lock=fopen($dir.'/posts.lock','c');flock($lock,LOCK_EX);
            try{
                $all=posts(true);$version=hash('sha256',json_encode($all));
                if(!is_string($_POST['version']??null)||!hash_equals($version,$_POST['version']))throw new RuntimeException('El contenido cambió desde que abrió el editor. Recargue antes de guardar para evitar sobrescribir cambios.');
                $original=is_string($_POST['original']??null)?$_POST['original']:'';$found=false;
                foreach($all as &$old){if($old['slug']===$new['slug']&&$old['slug']!==$original)throw new RuntimeException('Ya existe un artículo con esa URL.');if($old['slug']===$original){if($new['slug']!==$original)throw new RuntimeException('La URL de un artículo existente se conserva para evitar enlaces rotos.');$new['modified']=date('c');$old=$new;$found=true;}}
                unset($old);if(!$found)$all[]=$new;
                $file=$dir.'/posts.json';if(is_file($file))copy($file,$dir.'/posts-backup-'.date('Ymd-His').'-'.bin2hex(random_bytes(3)).'.json');
                $tmp=$dir.'/posts-'.bin2hex(random_bytes(8)).'.tmp';file_put_contents($tmp,json_encode($all,JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES|JSON_THROW_ON_ERROR));chmod($tmp,0600);if(!rename($tmp,$file))throw new RuntimeException('No se pudo guardar el contenido.');
            }finally{flock($lock,LOCK_UN);fclose($lock);}
            redirect_to('/admin/blog?guardado=1');
        }catch(Throwable $error){http_response_code(422);$message=$error instanceof RuntimeException?$error->getMessage():'No se pudo guardar. Revise los datos y los permisos del almacenamiento.';}
    }
}
if($path==='/admin/blog'&&empty($_SESSION['admin']))redirect_to('/acceso');
if($path==='/acceso'&&!empty($_SESSION['admin']))redirect_to('/admin/blog');
$token=csrf_token();
?><!doctype html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Administración del blog | EurodroneX</title><link rel="stylesheet" href="/assets/css/site.css"><link rel="stylesheet" href="/assets/css/custom.css"></head><body><main class="admin-wrap"><a class="mono-label-accent" href="/">← EurodroneX</a><h1 class="heading-display text-3xl mt-8">Administración del blog</h1>
<?php if($message): ?><p class="admin-notice" role="alert"><?= e($message) ?></p><?php endif; ?>
<?php if(empty($_SESSION['admin'])): ?>
<?php if(!$configured): ?><p class="admin-notice">El acceso de administración aún no está configurado. Contacte con el responsable del sitio.</p><?php endif; ?>
<form method="post" class="max-w-md"><input type="hidden" name="csrf" value="<?= e($token) ?>"><input type="hidden" name="action" value="login"><label for="email">Email</label><input id="email" type="email" name="email" autocomplete="username" required><label for="password">Contraseña</label><input id="password" type="password" name="password" autocomplete="current-password" required><button class="button-primary mt-6">Acceder</button></form>
<?php else:
$all=posts(true);$editing=null;$edit=is_string($_GET['editar']??null)?$_GET['editar']:null;
if($edit!==null){foreach($all as $item)if($item['slug']===$edit)$editing=$item;if($edit==='nuevo')$editing=['slug'=>'','title'=>'','category'=>'Inspección técnica','date'=>date('Y-m-d'),'readTime'=>'5 min','excerpt'=>'','image'=>content('routes')['/']['image'],'published'=>false,'featured'=>false,'sections'=>[['h'=>'','p'=>'']]];}
?>
<div class="admin-actions"><a class="button-primary" href="/admin/blog?editar=nuevo">Nuevo artículo</a><a class="button-secondary" href="/admin/blog">Listado</a><form method="post"><input type="hidden" name="csrf" value="<?= e($token) ?>"><button class="button-secondary" name="action" value="logout">Cerrar sesión</button></form></div>
<?php if(isset($_GET['guardado'])): ?><p role="status" class="admin-notice">Artículo guardado.</p><?php endif; ?>
<?php if($editing): ?>
<form method="post" enctype="multipart/form-data"><input type="hidden" name="csrf" value="<?= e($token) ?>"><input type="hidden" name="action" value="save"><input type="hidden" name="original" value="<?= e($editing['slug']) ?>"><input type="hidden" name="version" value="<?= e(hash('sha256',json_encode($all))) ?>">
<?php foreach(['title'=>'Título','slug'=>'URL del artículo','category'=>'Categoría','date'=>'Fecha','readTime'=>'Tiempo de lectura'] as $key=>$label): ?><label for="<?= $key ?>"><?= $label ?></label><input id="<?= $key ?>" name="<?= $key ?>" value="<?= e($editing[$key]??'') ?>" <?= $key==='slug'&&$editing['slug']!==''?'readonly':'' ?> required><?php endforeach; ?>
<label for="excerpt">Resumen y descripción SEO</label><textarea id="excerpt" name="excerpt" required><?= e($editing['excerpt']) ?></textarea>
<label for="image">Imagen</label><select id="image" name="image"><?php foreach(glob(ROOT.'/assets/img/*') as $img):$name=basename($img);if(!preg_match('/\.(jpg|jpeg|png|webp)$/',$name))continue; ?><option value="/assets/img/<?= e($name) ?>" <?= '/assets/img/'.$name===$editing['image']?'selected':'' ?>><?= e($name) ?></option><?php endforeach; ?></select>
<img id="cover-preview" src="<?= e($editing['image']) ?>" alt="Vista previa de la portada del artículo" class="mt-4 max-w-sm w-full">
<label for="cover">O subir una nueva portada (JPG, PNG o WebP; máximo 3 MB)</label><input id="cover" name="cover" type="file" accept="image/jpeg,image/png,image/webp">
<label><input type="checkbox" name="published" <?= ($editing['published']??true)?'checked':'' ?>> Publicado</label><label><input type="checkbox" name="featured" <?= ($editing['featured']??false)?'checked':'' ?>> Destacado</label>
<h2 class="heading-display text-2xl mt-8">Secciones del artículo</h2><div id="article-sections"><?php foreach($editing['sections'] as $i=>$sec): ?><fieldset class="border border-border p-4 mt-5"><legend>Sección <?= $i+1 ?></legend><label>Título de sección<input name="section_h[]" value="<?= e($sec['h']) ?>"></label><label>Texto<textarea name="section_p[]"><?= e($sec['p']) ?></textarea></label><button type="button" class="button-secondary" data-remove-section>Quitar sección</button></fieldset><?php endforeach; ?></div>
<div class="admin-actions"><button type="button" class="button-secondary" data-add-section>Añadir sección</button><button class="button-primary">Guardar artículo</button></div></form>
<?php else: ?><div class="overflow-x-auto"><table class="admin-table"><thead><tr><th>Artículo</th><th>Estado</th><th>Acciones</th></tr></thead><tbody><?php foreach($all as $entry): ?><tr><td><?= e($entry['title']) ?></td><td><?= ($entry['published']??true)?'Publicado':'Borrador' ?></td><td><a class="underline" href="/admin/blog?editar=<?= e($entry['slug']) ?>">Editar</a><?php if($entry['published']??true): ?> · <a class="underline" href="/blog/<?= e($entry['slug']) ?>">Ver</a><?php endif; ?></td></tr><?php endforeach; ?></tbody></table></div><p class="mt-5 text-sm text-muted-foreground">Para retirar un artículo, desmarque «Publicado». Se conserva como borrador y cada guardado mantiene una copia de respaldo.</p><?php endif; ?>
<?php endif; ?></main><script src="/assets/js/admin.js" defer></script></body></html>
