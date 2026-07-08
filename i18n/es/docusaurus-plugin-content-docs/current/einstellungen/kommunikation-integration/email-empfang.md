---
sidebar_position: 2
---

En Configuración > Ajustes IMAP guarda un buzón de correo que Klacks consulta continuamente en segundo plano y muestra en la sección "Bandeja de entrada" — así se puede rastrear automáticamente la correspondencia entrante asignada a empleados y clientes.

## Cómo funciona

**Datos de conexión:** Servidor, puerto (por defecto 993), cifrado SSL, nombre de usuario, contraseña, la carpeta a consultar (por defecto `INBOX`) así como el intervalo de consulta en segundos (por defecto 300).

**Qué sucede con los correos recibidos:** Klacks consulta el buzón periódicamente mediante IMAP, comprueba los mensajes nuevos con un filtro antispam (el spam se mueve a la carpeta de correo no deseado tanto en Klacks como en el buzón real) y asigna automáticamente los mensajes restantes al registro de cliente o empleado correspondiente, siempre que la dirección del remitente esté guardada como dato de contacto. Así se genera en la "Bandeja de entrada" un historial de correspondencia filtrable por persona. Cambios como "marcar como leído", mover o eliminar también repercuten en el buzón real.

**Probar conexión:** El botón "Probar conexión IMAP" se conecta realmente con el servidor, inicia sesión, abre en modo lectura la carpeta configurada y muestra el número de mensajes encontrados. Si la carpeta no existe, se notifica explícitamente.

## Bueno saberlo

- Este buzón **no** es un canal para notificaciones de ausencia y **no** forma parte del traspaso de pedidos ERP (para eso existen puntos de traspaso separados, véase la página correspondiente) — solo alimenta la "Bandeja de entrada" general.
- Este ajuste es global para toda la instalación — no hay una cuenta IMAP separada por usuario.
- Si se restablece la clave de cifrado utilizada por la instalación, Klacks ya no puede descifrar la contraseña guardada y pausa la consulta hasta que se vuelva a guardar la contraseña.
- Los mensajes en la bandeja de entrada se pueden traducir directamente si DeepL está configurado (véase la página correspondiente).

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen diariamente.*
