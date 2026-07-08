---
sidebar_position: 5
---

Las reglas de planificación definen las condiciones marco para la planificación automática de turnos — horarios de trabajo, tiempos de descanso y capacidades que Klacks respeta al distribuir los turnos.

## Cómo funciona

Una regla de planificación se asigna a una **plantilla de contrato**. Los valores límite definidos rigen así para todos los empleados con esa plantilla de contrato. Cada regla comprende cuatro áreas:

**Días de trabajo y tiempos de descanso**
- Máx. días de trabajo: regla flexible para la duración de bloque preferida antes de planificar un día de descanso (por ejemplo, «trabajar 5 días, luego descanso») — una infracción no invalida el plan, solo lo hace menos óptimo
- Mín. días de descanso entre dos bloques de trabajo
- Mín. horas libres entre dos días de trabajo (tiempo de descanso desde el final de un día de trabajo hasta el inicio del siguiente)
- Máx. brecha óptima entre turnos en horas
- Máx. días de trabajo consecutivos sin día de descanso

**Límites de horas**
- Máx. horas diarias y máx. horas semanales
- Horas de trabajo diarias (tiempo objetivo)
- Límite de horas extra: a partir de este número de horas semanales, las horas se consideran horas extra

**Horas mensuales**
- Horas garantizadas (número mínimo asegurado al empleado por mes)
- Horas mínimas y máximas por mes
- Horas de tiempo completo (número de horas mensuales que corresponde a un empleo a tiempo completo)

**Vacaciones**
- Días de vacaciones por año natural

## Bueno saberlo

- Al crear una nueva regla se adoptan automáticamente los **valores predeterminados de la configuración** (reglas de planificación — valores predeterminados); posteriormente puede ajustar cada valor de forma individual.
- Las reglas de planificación actúan a través de la plantilla de contrato — no es necesario mantenerlas por persona. Si una regla cambia, afecta a todos los empleados con esa plantilla de contrato.
- El límite de horas extra y el tiempo objetivo son dos cosas distintas: el tiempo objetivo es el estándar por día, el límite de horas extra es el umbral por semana.
- «Máx. días de trabajo» (preferencia flexible para la duración de bloque) y «máx. días de trabajo consecutivos» (límite superior estricto, nunca superable) son dos reglas distintas — no deben confundirse.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen a diario.*
