---
sidebar_position: 6
---

En Configuración > Proveedores de mensajería conecta canales externos de chat y SMS a través de los cuales Klacks (y Klacksy) puede escribir directamente a empleados y clientes — en lugar de, o además de, el correo electrónico.

## Cómo funciona

**Principio común:** Todos los canales se configuran mediante la misma lista: nombre interno, nombre para mostrar, tipo de proveedor y los datos de acceso, que varían según el canal (token, ID de cuenta, certificado, etc.), además de un interruptor de activación/desactivación y un botón de prueba por entrada para comprobar la conexión de inmediato. A quién llega un mensaje se resuelve mediante el identificador específico del canal (número de teléfono, nombre de usuario, ID de usuario, etc.) registrado en el empleado o cliente en Dirección > Datos de contacto — usted mismo no tiene que introducir IDs en bruto.

**Para qué se utiliza la mensajería en Klacks:** como vía de notificación adicional junto al correo electrónico, por ejemplo para avisos del plan de turnos o mensajes de Klacksy — según qué canales estén activados y registrados para cada persona.

**Los 11 canales de un vistazo:**

| Canal | Envío/Recepción | Particularidad |
|---|---|---|
| Slack | Envío + Recepción | El bot debe además ser invitado explícitamente a cada canal mediante `/invite`. |
| Telegram | Envío + Recepción | El destinatario debe haber activado previamente el bot mediante `/start`. |
| Signal | Solo envío | Requiere un puente signal-cli autogestionado (Docker) con un número de teléfono propio, vinculado mediante código QR — no existe una API de nube oficial. |
| Microsoft Teams | Solo envío | Un webhook de Power Automate por canal; sin mensajes 1:1, para varios canales de Teams se necesitan varias entradas. |
| SMS | Solo envío | Número de teléfono en formato E.164; en cuentas de prueba (p. ej., Twilio) solo a números previamente verificados, el país de destino debe estar habilitado. |
| WeChat | Solo envío | La verificación como Official Account fuera de China es exigente; solo llega a seguidores con interacción en las últimas 48 horas. |
| KakaoTalk | Solo envío | El token de acceso solo es válido unas 6 horas y debe renovarse manualmente; el destinatario debe ser "amigo" de la aplicación. |
| Line | Envío + Recepción | Cuota de envío mensual limitada según el plan; el ID del destinatario solo se conoce mediante un mensaje entrante. |
| Threema | Solo envío | Cuenta de pasarela Threema de pago (modelo de saldo); sin recepción, ya que no se utiliza el modo de extremo a extremo. |
| Viber | Envío + Recepción | El bot solo puede escribir a personas que lo hayan suscrito previamente; el webhook requiere HTTPS accesible públicamente. |
| Zalo | Solo envío | El token de acceso caduca tras aproximadamente 25 horas, el envío solo es posible dentro de una ventana de interacción. |

## Es bueno saberlo

- Para cada canal existe un manual propio y detallado con instrucciones paso a paso para la configuración en el respectivo proveedor — accesible directamente en la página de configuración de cada entrada de proveedor.
- Varios canales pueden estar activos en paralelo; cuál se utiliza realmente depende de qué datos de contacto estén registrados para cada persona.
- En todos los canales con token de acceso temporal (p. ej., KakaoTalk, Zalo), este debe renovarse fuera de Klacks en el proveedor correspondiente y actualizarse en Klacks, de lo contrario el envío por este canal se interrumpe.

---
*Pruébalo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen a diario.*
