'use strict';

// Consent interface retained; no analytics or advertising scripts are installed.
const banner = document.querySelector('#cmplz-cookiebanner-container');
try { banner.hidden = Boolean(localStorage.getItem('edx_original_consent')); } catch {}
function saveConsent(value) {
    const categories = {};
    banner.querySelectorAll('[data-category]').forEach(input => {
        categories[input.dataset.category] = input.dataset.category === 'cmplz_functional' || value === 'accept' || (value === 'preferences' && input.checked);
    });
    try { localStorage.setItem('edx_original_consent', JSON.stringify({value, categories, date:Date.now()})); } catch {}
    banner.hidden = true;
}
banner?.querySelector('.cmplz-accept')?.addEventListener('click', () => saveConsent('accept'));
banner?.querySelector('.cmplz-deny')?.addEventListener('click', () => saveConsent('deny'));
banner?.querySelector('.cmplz-save-preferences')?.addEventListener('click', () => saveConsent('preferences'));
banner?.querySelector('.cmplz-close')?.addEventListener('click', () => saveConsent('deny'));
banner?.querySelector('.cmplz-close')?.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); saveConsent('deny'); } });
banner?.querySelector('.cmplz-view-preferences')?.addEventListener('click', () => banner.classList.toggle('show-preferences'));
document.querySelector('[data-cookie-settings]')?.addEventListener('click', () => { banner.hidden = false; });
banner?.querySelectorAll('.cmplz-category-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const description = document.getElementById(button.getAttribute('aria-controls'));
        const open = button.getAttribute('aria-expanded') !== 'true';
        button.setAttribute('aria-expanded', String(open));
        description.hidden = !open;
    });
});
const functional = banner?.querySelector('[data-category="cmplz_functional"]');
if (functional) { functional.checked = true; functional.disabled = true; }

// Navigation: same public links, without Elementor's runtime.
const header = document.querySelector('.elementor-location-header');
function measureHeader() { document.documentElement.style.setProperty('--header-height', header.getBoundingClientRect().height + 'px'); }
measureHeader();
new ResizeObserver(measureHeader).observe(header);
document.querySelectorAll('.e-n-menu').forEach(menu => {
    const toggle = menu.querySelector('.e-n-menu-toggle');
    function close() {
        menu.classList.remove('menu-open');
        toggle?.setAttribute('aria-expanded', 'false');
        menu.querySelectorAll('.e-n-menu-item').forEach(item => {
            item.classList.remove('menu-open');
            item.querySelector('.e-n-menu-dropdown-icon')?.setAttribute('aria-expanded', 'false');
        });
    }
    toggle?.addEventListener('click', () => {
        const open = menu.classList.toggle('menu-open');
        toggle.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('.e-n-menu-item').forEach(item => {
        const button = item.querySelector('.e-n-menu-dropdown-icon');
        if (!button) return;
        const set = open => { item.classList.toggle('menu-open', open); button.setAttribute('aria-expanded', String(open)); };
        button.addEventListener('click', () => set(!item.classList.contains('menu-open')));
        item.addEventListener('mouseenter', () => { if (matchMedia('(min-width:1025px) and (hover:hover)').matches) set(true); });
        header.addEventListener('mouseleave', () => { if (matchMedia('(min-width:1025px) and (hover:hover)').matches) set(false); });
        item.addEventListener('focusout', event => { if (!item.contains(event.relatedTarget)) set(false); });
    });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
    document.addEventListener('click', event => { if (!menu.contains(event.target)) close(); });
});

document.querySelectorAll('[data-column-clickable]').forEach(element => {
    const href = element.dataset.columnClickable;
    element.setAttribute('role', 'link');
    element.tabIndex = 0;
    element.addEventListener('click', event => { if (!event.target.closest('a,button')) location.href = href; });
    element.addEventListener('keydown', event => { if (event.key === 'Enter') location.href = href; });
});

const accordions = new Map();
document.querySelectorAll('.e-n-accordion-item').forEach(item => {
    const summary = item.querySelector('summary');
    let animation, expanded = item.open;
    function set(next) {
        const from = item.getBoundingClientRect().height;
        if (animation) { animation.onfinish = null; animation.cancel(); }
        expanded = next;
        summary.setAttribute('aria-expanded', String(next));
        if (matchMedia('(prefers-reduced-motion:reduce)').matches) { item.open = next; return; }
        item.open = true;
        const border = parseFloat(getComputedStyle(item).borderTopWidth) + parseFloat(getComputedStyle(item).borderBottomWidth);
        const to = next ? item.getBoundingClientRect().height : summary.getBoundingClientRect().height + border;
        animation = item.animate([{height:from+'px'}, {height:to+'px'}], {duration:300,easing:'cubic-bezier(.22,1,.36,1)'});
        animation.onfinish = () => { item.open = next; animation = null; };
    }
    accordions.set(item, set);
    summary.addEventListener('click', event => {
        event.preventDefault();
        const next = !expanded;
        if (next) item.parentElement.querySelectorAll(':scope > details[open]').forEach(other => { if (other !== item) accordions.get(other)?.(false); });
        set(next);
    });
});

const contactScript = document.querySelector('script[data-contact-recaptcha]');
const contactRecaptchaEnabled = contactScript?.dataset.contactRecaptcha === 'true';
const contactRecaptchaKey = contactScript?.dataset.recaptchaKey || '';
let contactRecaptchaLoader;
function contactRecaptchaToken() {
    if (!contactRecaptchaKey) return Promise.reject(new Error('Antispam not configured'));
    if (!contactRecaptchaLoader) {
        contactRecaptchaLoader = new Promise((resolve, reject) => {
            const script = document.createElement('script');
            const timer = setTimeout(() => reject(new Error('Antispam timeout')), 12000);
            script.src = 'https://www.google.com/recaptcha/api.js?render=' + encodeURIComponent(contactRecaptchaKey);
            script.async = true;
            script.onload = () => {
                if (!window.grecaptcha) { clearTimeout(timer); reject(new Error('Antispam unavailable')); return; }
                grecaptcha.ready(() => { clearTimeout(timer); resolve(); });
            };
            script.onerror = () => { clearTimeout(timer); script.remove(); reject(new Error('Antispam unavailable')); };
            document.head.append(script);
        }).catch(error => { contactRecaptchaLoader = null; throw error; });
    }
    return contactRecaptchaLoader.then(() => new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error('Antispam timeout')), 12000);
        grecaptcha.execute(contactRecaptchaKey, {action: 'contact'}).then(token => {
            clearTimeout(timer);
            if (token) resolve(token); else reject(new Error('Empty antispam token'));
        }, error => { clearTimeout(timer); reject(error); });
    }));
}
document.querySelectorAll('[data-contact-form]').forEach(form => {
    form.addEventListener('submit', async event => {
        event.preventDefault();
        const button = form.querySelector('[type=submit]');
        const status = form.querySelector('.form-status');
        button.disabled = true;
        status.hidden = false;
        status.textContent = 'Enviando solicitud…';
        try {
            const data = new FormData(form);
            if (contactRecaptchaEnabled) data.set('g-recaptcha-response', await contactRecaptchaToken());
            const response = await fetch(form.action, {method:'POST',body:data,headers:{Accept:'application/json'}});
            const result = await response.json();
            status.textContent = result.message;
            if (result.ok) form.reset();
        } catch {
            status.textContent = 'No se ha podido confirmar el envío. Contacte con contacto@eurodronex.com o el 611 623 480.';
        } finally { button.disabled = false; }
    });
});
