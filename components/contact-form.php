<?php
$token=csrf_token(); $fields=content('services');
$flash=$_SESSION['contact_flash'] ?? null;
if($flash) unset($_SESSION['contact_flash']);
$formId='solicitud';
?>
<form method="post" action="/api/contacto" enctype="multipart/form-data" class="contact-form border border-border bg-card p-6 md:p-8" data-contact-form>
<input type="hidden" name="csrf" value="<?= e($token) ?>">
<input type="hidden" name="return_to" value="<?= e($GLOBALS['path'] ?? '/contacto') ?>">
<div class="form-trap" aria-hidden="true"><label>Dejar vacío<input name="website" tabindex="-1" autocomplete="off"></label></div>
<div class="flex items-center justify-between mb-6 pb-4 border-b border-border"><div><span class="mono-label-accent">Formulario técnico</span><h3 class="mt-1.5 heading-display text-lg">Solicitar revisión técnica</h3></div><span class="mono-label hidden sm:block">Respuesta &lt; 24h</span></div>
<div class="form-status" role="status" aria-live="polite" <?= $flash ? '' : 'hidden' ?>><?= e($flash['message'] ?? '') ?></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
<?php foreach(['nombre'=>['Nombre completo *','text','Nombre y apellidos','name'], 'empresa'=>['Empresa','text','Empresa / estudio','organization'], 'telefono'=>['Teléfono','tel','+34 600 000 000','tel'], 'email'=>['Email *','email','email@dominio.com','email']] as $name=>$field): ?>
<div><label class="field-label" for="<?= $formId.'-'.$name ?>"><?= e($field[0]) ?></label><input class="form-field" id="<?= $formId.'-'.$name ?>" name="<?= $name ?>" type="<?= $field[1] ?>" autocomplete="<?= $field[3] ?>" maxlength="200" placeholder="<?= e($field[2]) ?>" <?= in_array($name,['nombre','email'])?'required':'' ?>></div>
<?php endforeach; ?>
<?php foreach(['tipoCliente'=>['Tipo de cliente','clientTypes'], 'tipoServicio'=>['Tipo de servicio','serviceTypes'], 'tipoEdificio'=>['Tipo de edificio','buildingTypes']] as $name=>$field): ?>
<div><label class="field-label" for="<?= $formId.'-'.$name ?>"><?= e($field[0]) ?></label><select class="form-field" name="<?= $name ?>" id="<?= $formId.'-'.$name ?>"><option value="">Seleccionar</option>
<?php foreach($fields[$field[1]] as $option): ?><option <?= $name==='tipoServicio' && ($props['defaultService']??'')===$option ? 'selected' : '' ?>><?= e($option) ?></option><?php endforeach; ?>
</select></div><?php endforeach; ?>
<div><label class="field-label" for="<?= $formId ?>-ubicacion">Ubicación</label><input class="form-field" name="ubicacion" id="<?= $formId ?>-ubicacion" placeholder="Localidad / provincia" maxlength="200"></div>
<div class="md:col-span-2"><label class="field-label" for="<?= $formId ?>-urgencia">Urgencia</label><select class="form-field" name="urgencia" id="<?= $formId ?>-urgencia"><option value="">Seleccionar urgencia</option><?php foreach($fields['urgencyLevels'] as $option): ?><option><?= e($option) ?></option><?php endforeach; ?></select></div>
<div class="md:col-span-2"><label class="field-label" for="<?= $formId ?>-mensaje">Mensaje</label><textarea class="form-field" name="mensaje" id="<?= $formId ?>-mensaje" rows="4" maxlength="10000" placeholder="Describa el edificio, la patología observada y el alcance técnico necesario."></textarea></div>
<div class="md:col-span-2"><label class="field-label" for="<?= $formId ?>-imagenes">Adjuntar imágenes (opcional)</label><input class="form-field" type="file" name="imagenes[]" id="<?= $formId ?>-imagenes" accept="image/jpeg,image/png,image/webp" multiple aria-describedby="imagenes-ayuda"><p id="imagenes-ayuda" class="mt-2 text-xs text-muted-foreground">Hasta 3 imágenes JPG, PNG o WebP; máximo 2 MB por imagen.</p></div>
</div>
<label class="mt-5 flex items-start gap-3 text-sm"><input class="mt-1" type="checkbox" name="privacidad" value="1" required><span>He leído y acepto la <a class="underline" href="/politica-de-privacidad">política de privacidad</a> para gestionar mi consulta.</span></label>
<button type="submit" class="button-primary mt-6 w-full">Solicitar revisión técnica <span aria-hidden="true">→</span></button>
<p class="mt-4 text-xs text-muted-foreground">Responsable: Dronspain Solutions S.L. Finalidad: responder a su solicitud. Puede ejercer sus derechos en contacto@eurodronex.com. Sin compromiso.</p>
</form>
