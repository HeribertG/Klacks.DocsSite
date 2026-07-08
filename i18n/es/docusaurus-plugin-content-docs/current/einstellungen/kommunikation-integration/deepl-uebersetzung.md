---
sidebar_position: 3
---

En Configuración > DeepL guarda una clave de API de DeepL con la que Klacks puede traducir textos automáticamente — actualmente, sobre todo, los correos electrónicos entrantes en la bandeja de entrada.

## Cómo funciona

**Clave de API:** Un único campo de entrada recibe la clave de API de DeepL (formato `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx` para la API gratuita Free, o sin la terminación `:fx` para la API de pago Pro). Klacks reconoce automáticamente, por la terminación `:fx`, cuál de las dos direcciones de la API de DeepL debe usarse — no es necesario un conmutador separado entre Free y Pro. La cuenta y la propia clave se obtienen en deepl.com/pro-api.

**Uso:** En el "Bandeja de entrada" cada correo electrónico se puede traducir al idioma de interfaz actualmente configurado mediante el icono de traducir; el original y la traducción se pueden comparar mediante un conmutador. Sin una clave configurada, esta función no está disponible.

## Bueno saberlo

- Este ajuste es global para toda la instalación — no hay una clave por usuario.
- No hay un botón de "prueba" propio en esta página; si la clave funciona se comprueba en el primer intento de traducción en la bandeja de entrada.
- Si la clave no es válida o ha caducado, Klacks lo detecta a partir de la respuesta de DeepL (error de autenticación) y lo notifica en lugar de mostrar una traducción vacía o incorrecta.
- La clave se guarda cifrada y se muestra enmascarada en el formulario.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen diariamente.*
