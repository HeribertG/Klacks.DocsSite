---
sidebar_position: 1
---

En Configuración > Ajustes de correo electrónico guarda el servidor SMTP a través del cual Klacks envía correos electrónicos salientes — por ejemplo, notificaciones, correos de restablecimiento de contraseña o mensajes enviados por Klacksy.

## Cómo funciona

**Datos de conexión:** Se introducen servidor, puerto, tiempo de espera, modo SSL/TLS, tipo de autenticación (Ninguna, LOGIN, NTLM, GSSAPI, WDIGEST), así como nombre de usuario y contraseña. Además, se pueden configurar el acuse de recibo de lectura/notificación de entrega y una dirección de respuesta. El modo SSL/TLS se deduce además del puerto: el puerto 465 usa SSL directo, el puerto 587 (o SSL activado) usa StartTLS.

**Guardado:** No hay un botón de guardar explícito — cada campo se guarda automáticamente tras un breve retraso en cuanto se modifica.

**Probar conexión:** El botón "Enviar correo de prueba" establece una conexión SMTP real, se autentica y envía un correo de prueba real a la dirección de usuario guardada. Esto no es una mera comprobación de conexión, sino un envío de correo real — útil para verificar de inmediato las credenciales de acceso. Con proveedores conocidos (Outlook, Gmail, Yahoo, GMX, entre otros), Klacks exige obligatoriamente un tipo de autenticación distinto de "Ninguna".

## Bueno saberlo

- Este ajuste es global para toda la instalación — no hay una cuenta SMTP separada por usuario.
- Solo una persona con permisos de administrador puede configurar esta página.
- La contraseña se guarda cifrada y se muestra en el formulario oculta/visible mediante un icono de ojo, nunca en texto plano.
- Si la prueba de conexión falla, Klacks notifica el motivo concreto (p. ej., error de autenticación, error de negociación SSL, tiempo de espera agotado) en lugar de un mensaje de error genérico.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen diariamente.*
