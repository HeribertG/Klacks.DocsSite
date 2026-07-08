---
sidebar_position: 4
---

# Niveles de autonomía

¿Con cuánta independencia puede actuar Klacksy antes de preguntar? En Configuración > Autonomía de Klacksy define esto de forma personal — el ajuste se aplica por cuenta de usuario, no para todos los usuarios en conjunto.

## Cómo funciona

**Cuatro niveles:**

- **Proponer** — Klacksy solo propone, cada cambio necesita su confirmación.
- **Asistido** — las acciones reversibles se ejecutan directamente, todo lo demás necesita confirmación.
- **Autónomo** (predeterminado) — todas las acciones se ejecutan directamente, salvo las especialmente delicadas.
- **Totalmente autónomo** — incluso los planes de varios pasos se ejecutan sin aprobaciones intermedias.

**Cómo actúa la clasificación:** Cada acción que Klacksy podría ejecutar está clasificada internamente según su riesgo: las acciones de solo lectura se ejecutan siempre de inmediato; las acciones reversibles o vinculadas a un escenario (p. ej., en una planificación de prueba) necesitan como mínimo el nivel Asistido; las acciones irreversibles necesitan como mínimo el nivel Autónomo. Las acciones delicadas — administración de usuarios, permisos y cambios en el propio ajuste de autonomía — requieren siempre una confirmación explícita, **independientemente del nivel elegido**.

**El flujo de confirmación:** Si una acción necesita su aprobación, Klacksy no la ejecuta de inmediato, sino que la retiene con un plazo de espera de 5 minutos y resume lo que sucedería. Solo cuando usted confirma expresamente con sus propias palabras, Klacksy desencadena la acción retenida — nunca confirma de forma autónoma en su nombre.

## Bueno saberlo

- El nivel de autonomía es un ajuste personal por cuenta de usuario — cada usuario puede elegir su propio nivel de confort.
- Un nivel más alto no significa que ya no se pregunte nada: las acciones delicadas siempre requieren confirmación.
- Por defecto está activo el nivel Autónomo — esto corresponde al comportamiento que Klacksy ya tenía antes de la introducción de los niveles de autonomía.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen diariamente.*
