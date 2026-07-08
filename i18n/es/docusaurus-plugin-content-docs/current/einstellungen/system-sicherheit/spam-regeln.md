---
sidebar_position: 7
---

# Reglas de spam

En Configuración > Reglas de spam se definen reglas de filtrado con las que los correos electrónicos entrantes en el módulo de bandeja de entrada se clasifican automáticamente como spam — las reglas actúan tanto durante la recepción continua de nuevos correos (sondeo IMAP) como en una reevaluación posterior de correos ya recibidos.

## Cómo funciona

**Crear regla:** Elija un tipo de regla — el remitente contiene, dominio del remitente, el asunto contiene o el contenido contiene — introduzca el patrón que se debe comprobar y haga clic en Añadir.

**Gestionar reglas:** Cada regla puede activarse o desactivarse mediante una casilla de verificación, sin eliminarla, así como eliminarse de forma permanente mediante el botón de papelera.

## Bueno saber

- Las reglas desactivadas permanecen guardadas, pero ya no actúan sobre correos nuevos o reevaluados — útil para suspender una regla a modo de prueba en lugar de eliminarla.
- Klacks utiliza para la importación de pedidos ERP la misma bandeja de entrada que el módulo normal de correo electrónico (arquitectura de un solo buzón). Por ello, una regla definida de forma demasiado amplia (por ejemplo, un dominio de remitente completo) puede clasificar también, en teoría, correos entrantes de pedidos ERP como spam — compruebe con cuidado las reglas nuevas antes de activarlas.
- Utilice reglas de dominio de remitente para bloquear organizaciones remitentes no deseadas en su totalidad, en lugar de registrar cada dirección individual como regla de remitente-contiene.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen diariamente.*
