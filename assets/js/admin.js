'use strict';
const container=document.querySelector('#article-sections');
document.querySelector('[data-add-section]')?.addEventListener('click',()=>{const field=document.createElement('fieldset');field.className='border border-border p-4 mt-5';field.innerHTML='<legend>Nueva sección</legend><label>Título de sección<input name="section_h[]"></label><label>Texto<textarea name="section_p[]"></textarea></label><button type="button" class="button-secondary" data-remove-section>Quitar sección</button>';container.append(field);field.querySelector('input').focus()});
container?.addEventListener('click',event=>{if(event.target.closest('[data-remove-section]'))event.target.closest('fieldset').remove()});
document.querySelector('#image')?.addEventListener('change',event=>{document.querySelector('#cover-preview').src=event.target.value});
