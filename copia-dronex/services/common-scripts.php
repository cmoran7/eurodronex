<?php include_once ROOT . '/components/cookie-banner.php'; ?>
<?php include_once ROOT . '/components/whatsapp.php'; ?>
<button type="button" class="cookie-settings" data-cookie-settings>Gestionar consentimiento</button>
<script src="/assets/js/site.js?v=<?= filemtime(ROOT . '/assets/js/site.js') ?>" defer
    data-contact-recaptcha="<?= $config['recaptcha_enabled'] ? 'true' : 'false' ?>"
    data-recaptcha-key="<?= e($config['recaptcha_site_key']) ?>"></script>
