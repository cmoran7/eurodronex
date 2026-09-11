<?php
if(PHP_SAPI!=='cli'){http_response_code(404);exit;}
fwrite(STDERR,"Introduzca una contraseña de al menos 14 caracteres (entrada visible en esta consola):\n");
$password=rtrim(fgets(STDIN),"\r\n");
if(strlen($password)<14){fwrite(STDERR,"Contraseña demasiado corta.\n");exit(1);}
echo password_hash($password,PASSWORD_DEFAULT).PHP_EOL;
