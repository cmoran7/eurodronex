<?php
component('page-heading',['eyebrow'=>'BLG.00 / Blog técnico','title'=>'Inspección, diagnóstico y patología de edificios','text'=>'Artículos técnicos sobre metodología, normativa y casos de inspección aérea aplicada a la edificación.']);
$entries=posts();$featured=null;
foreach($entries as $entry)if($entry['featured']??false){$featured=$entry;break;}
$featured??=$entries[0]??null;
?>
<?php if($featured): ?><section class="section-pad py-16"><a class="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-border overflow-hidden hover:border-primary/50" href="/blog/<?= e($featured['slug']) ?>">
<div class="lg:col-span-7 aspect-[16/10] overflow-hidden bg-muted"><img src="<?= e($featured['image']) ?>" alt="<?= e($featured['title']) ?>" class="w-full h-full object-cover" fetchpriority="high" decoding="async"></div>
<div class="lg:col-span-5 p-6 lg:p-10"><span class="mono-label-accent"><?= e($featured['category']) ?> · <?= e($featured['readTime']??'') ?></span><h2 class="mt-4 heading-display text-2xl md:text-3xl group-hover:text-primary"><?= e($featured['title']) ?></h2><p class="mt-4 text-muted-foreground leading-relaxed"><?= e($featured['excerpt']) ?></p><span class="mt-6 inline-block mono-label-accent">Leer artículo →</span></div></a></section>
<section class="section-pad pb-20"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><?php foreach($entries as $entry): if($entry['slug']===$featured['slug'])continue; component('card',['title'=>$entry['title'],'to'=>'/blog/'.$entry['slug'],'image'=>$entry['image'],'meta'=>$entry['category'],'excerpt'=>$entry['excerpt']]); endforeach; ?></div></section>
<?php else: ?><section class="section-pad py-16"><p>No hay artículos publicados.</p></section><?php endif; ?>
<?php component('cta'); ?>
