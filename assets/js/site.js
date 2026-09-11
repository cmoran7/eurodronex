'use strict';
const nav=document.querySelector('#site-nav');
const menu=document.querySelector('.menu-toggle');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');nav.classList.toggle('is-open',open)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu?.setAttribute('aria-expanded','false');nav?.classList.remove('is-open');document.querySelectorAll('.nav-group[open]').forEach(n=>n.open=false)}});
document.querySelectorAll('.site-nav a').forEach(a=>{if(a.getAttribute('href')===location.pathname)a.setAttribute('aria-current','page')});
document.querySelectorAll('.nav-group').forEach(el=>el.addEventListener('toggle',()=>{if(el.open)document.querySelectorAll('.nav-group').forEach(other=>{if(other!==el)other.open=false})}));
document.addEventListener('click',e=>{document.querySelectorAll('.nav-group[open]').forEach(el=>{if(!el.contains(e.target))el.open=false})});
// Restore Base44's viewport entry effects; content stays visible without JavaScript.
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
let revealObserver;
function setupReveal() {
    revealObserver?.disconnect();
    const sections = document.querySelectorAll('main section');
    if (motionPreference.matches || !('IntersectionObserver' in window)) {
        sections.forEach(section => section.classList.remove('reveal-item', 'is-visible'));
        return;
    }
    revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });
    sections.forEach(section => {
        if (section.getBoundingClientRect().top < innerHeight) {
            section.classList.add('is-visible');
        } else {
            section.classList.add('reveal-item');
            revealObserver.observe(section);
        }
    });
}
setupReveal();
motionPreference.addEventListener('change', setupReveal);
const siteHeader = document.querySelector('.site-header');
function updateHeader() { siteHeader?.classList.toggle('is-scrolled', scrollY > 12); }
updateHeader();
addEventListener('scroll', updateHeader, { passive: true });

document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
const value=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.setAttribute('aria-pressed',String(active));b.classList.toggle('filter-active',active);b.classList.remove('bg-primary','text-primary-foreground','border-primary')});
document.querySelectorAll('main [data-category]').forEach(card=>card.hidden=!['Todos','Todas',card.dataset.category].includes(value));
}));
document.querySelectorAll('[data-filter]').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===0)));
const consentDialog=document.querySelector('#cookie-dialog');const videoDialog=document.querySelector('#video-dialog');let pendingVideo=null;
function consent(){try{const c=JSON.parse(localStorage.getItem('edx_consent'));return c&&c.until>Date.now()?c.value:'reject'}catch{return 'reject'}}
function openVideo(id,title){if(!/^[\w-]{11}$/.test(id))return;const frame=document.createElement('iframe');frame.src='https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1';frame.title=title;frame.allow='autoplay; encrypted-media; picture-in-picture';frame.allowFullscreen=true;frame.referrerPolicy='strict-origin-when-cross-origin';document.querySelector('#video-title').textContent=title;document.querySelector('#video-container').replaceChildren(frame);videoDialog.showModal()}
document.querySelectorAll('[data-video]').forEach(button=>button.addEventListener('click',()=>{const title=button.getAttribute('aria-label')?.replace(/^Reproducir: /,'')||button.textContent.trim();pendingVideo=[button.dataset.video,title];if(consent()==='accept'){openVideo(...pendingVideo);pendingVideo=null}else consentDialog.showModal()}));
document.querySelectorAll('[data-cookie-settings]').forEach(b=>b.addEventListener('click',()=>{pendingVideo=null;consentDialog.showModal()}));
document.querySelectorAll('[data-consent]').forEach(b=>b.addEventListener('click',()=>{try{localStorage.setItem('edx_consent',JSON.stringify({value:b.dataset.consent,until:Date.now()+180*86400000}))}catch{}if(b.dataset.consent==='accept'&&pendingVideo){consentDialog.close();openVideo(...pendingVideo)}if(b.dataset.consent==='reject')document.querySelector('#video-container').replaceChildren();pendingVideo=null}));
document.querySelector('[data-close-video]')?.addEventListener('click',()=>{document.querySelector('#video-container').replaceChildren();videoDialog.close()});videoDialog?.addEventListener('close',()=>document.querySelector('#video-container').replaceChildren());
document.querySelectorAll('[data-contact-form]').forEach(form=>form.addEventListener('submit',async event=>{event.preventDefault();const button=form.querySelector('[type=submit]'),status=form.querySelector('.form-status');button.disabled=true;button.textContent='Enviando…';status.hidden=false;status.textContent='Enviando solicitud…';try{const response=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});const result=await response.json();status.textContent=result.message;if(result.ok)form.reset()}catch{status.textContent='No se ha podido confirmar el envío. Contacte con contacto@eurodronex.com o llame al 611 623 480.'}finally{button.disabled=false;button.textContent='Solicitar revisión técnica';status.scrollIntoView({block:'nearest',behavior:'smooth'})}}));

// FAQ: original 300 ms easing, with native details as the no-JavaScript fallback.
const faqMotion = matchMedia('(prefers-reduced-motion: reduce)');
const faqToggles = new Map();
document.querySelectorAll('details.faq').forEach(details => {
    const summary = details.querySelector('summary');
    let animation = null;
    let expanded = details.open;

    function setExpanded(next) {
        const startHeight = details.getBoundingClientRect().height;
        if (animation) {
            animation.onfinish = null;
            animation.cancel();
            animation = null;
        }
        expanded = next;
        details.classList.toggle('faq-expanding', next);
        details.classList.toggle('faq-collapsing', !next);
        if (faqMotion.matches || typeof details.animate !== 'function') {
            details.open = next;
            details.classList.remove('faq-expanding', 'faq-collapsing');
            return;
        }
        details.open = true;
        const border = parseFloat(getComputedStyle(details).borderBottomWidth) || 0;
        const endHeight = next ? details.getBoundingClientRect().height : summary.getBoundingClientRect().height + border;
        animation = details.animate(
            [{ height: `${startHeight}px` }, { height: `${endHeight}px` }],
            { duration: 300, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
        );
        animation.onfinish = () => {
            details.open = next;
            details.classList.remove('faq-expanding', 'faq-collapsing');
            animation = null;
        };
    }
    faqToggles.set(details, setExpanded);
    summary.addEventListener('click', event => {
        event.preventDefault();
        const next = !expanded;
        if (next) {
            for (const sibling of details.parentElement.children) {
                if (sibling !== details && sibling.open) faqToggles.get(sibling)?.(false);
            }
        }
        setExpanded(next);
    });
});
