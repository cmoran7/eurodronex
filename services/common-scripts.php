<?php include_once ROOT . '/components/cookie-banner.php'; ?>
<?php include_once ROOT . '/components/whatsapp.php'; ?>
<?php if ($pageKey === 'index'): ?>
<script>
if ('IntersectionObserver' in window) {
    const backgroundObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('edx-section-ready');
                backgroundObserver.unobserve(entry.target);
            }
        });
    }, { rootMargin: '200px' });
    document.querySelectorAll('#contenido > .e-parent:not(:first-child)').forEach(section => {
        backgroundObserver.observe(section);
    });
}
</script>
<?php endif; ?>
<button type="button" class="cookie-settings" data-cookie-settings>Gestionar consentimiento</button>
<script src="/assets/js/site.js?v=<?= filemtime(ROOT . '/assets/js/site.js') ?>" defer
    data-contact-recaptcha="<?= $config['recaptcha_enabled'] ? 'true' : 'false' ?>"
    data-recaptcha-key="<?= e($config['recaptcha_site_key']) ?>"></script>
