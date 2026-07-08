---
sidebar_position: 4
---

# Actualizaciones

En Configuración > Actualizaciones se ve la versión de Klacks instalada actualmente y la última disponible, se controla el comportamiento de actualización automática y, si es necesario, se puede iniciar manualmente una actualización o una reversión (rollback).

## Cómo funciona

**Estado:** La tarjeta muestra la versión actual, si hay una versión más reciente disponible, así como la operación de actualización en curso o ejecutada por última vez junto con su estado.

**Iniciar actualización o revertir:** Mediante "Instalar ahora" se inicia manualmente una actualización disponible; "Deshacer" revierte la última operación de actualización realizada con éxito. Ambas acciones quedan bloqueadas mientras ya haya una operación en curso.

**Configurar la automatización:**
- **Activar actualizaciones automáticas** activa o desactiva la comprobación y ejecución automática de actualizaciones.
- **Solo notificar** no desencadena ninguna actualización automática, pero avisa cuando hay una nueva versión disponible.
- **Canal** elige entre `Stable` y `Beta` como fuente de actualización.
- El **intervalo de comprobación** (horas) y una **ventana de mantenimiento** (hora de inicio/fin) determinan con qué frecuencia y en qué franja horaria se comprueba o se instala.
- El **número de copias de seguridad conservadas** determina cuántas copias de seguridad se mantienen antes de una migración, antes de que las más antiguas se eliminen automáticamente.

**Historial:** Una tabla enumera las últimas operaciones de actualización con tipo, versión de destino, estado y momento de la solicitud.

## Bueno saberlo

- Antes de cada migración, Klacks crea automáticamente una copia de seguridad — sin copia de seguridad no se aplica ninguna migración.
- Si la comprobación de estado falla tras una actualización, Klacks revierte automáticamente a la versión anterior (restaurar copia de seguridad → activar versión anterior → volver a comprobar); solo si esta reversión falla por sí misma es necesaria una intervención manual.
- Una reversión manual restaura específicamente la copia de seguridad correspondiente a la última operación exitosa y activa su versión de origen — no simplemente "una versión hacia atrás".
- Actualizar y revertir son acciones exclusivas para administradores.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen diariamente.*
