---
sidebar_position: 5
---

# Plugins de funciones

Los plugins de funciones amplían Klacks con áreas funcionales opcionales que no forman parte del producto principal — por ejemplo, Messaging (envío y recepción a través de Telegram, Slack, Viber, LINE, Microsoft Teams, SMS, Signal, Threema, KakaoTalk, WeChat y Zalo) o Floor Plan (editor visual de plano de sala con marcadores de puesto de trabajo y asignación de turnos).

## Cómo funciona

**Gestionar plugins instalados:** En Configuración > Plugins de funciones se ve una lista de los plugins ya instalados. En cada fila se activa o desactiva el plugin mediante un interruptor (activado/desactivado), sin desinstalarlo, o se elimina por completo mediante la acción Desinstalar.

**Encontrar nuevos plugins:** El botón de lupa abre el diálogo del Marketplace, en el que se pueden buscar más plugins disponibles e instalarlos directamente.

## Bueno saber

- Un plugin desactivado permanece instalado, pero queda bloqueado para todos los usuarios: las páginas asociadas no son accesibles y los endpoints de API asociados devuelven una respuesta 404, como si no existieran.
- Tras activar/desactivar o instalar/desinstalar, Klacks recarga automáticamente las traducciones, de modo que los nuevos textos del plugin sean visibles de inmediato, sin necesidad de recargar la página.
- Algunos plugins incorporan sus propias tarjetas de configuración (por ejemplo, la configuración de proveedores de mensajería) — estas aparecen recién después de la instalación en otro lugar de la configuración.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen diariamente.*
