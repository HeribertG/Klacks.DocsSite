---
sidebar_position: 1
---

En Configuración > Reglas de planificación (valores predeterminados) define los valores que se rellenan automáticamente al crear un nuevo contrato o una nueva regla de planificación.

## Cómo funciona

La página agrupa varios conjuntos de valores predeterminados:

- **Horas de trabajo:** Horas de trabajo diarias (jornada teórica), límite de horas extra (h/semana), horas mensuales garantizadas, mínimas y máximas, así como el número de horas de jornada completa.
- **Valores límite de las reglas de planificación:** Máx. días de trabajo, mín. días de descanso entre dos bloques de trabajo, mín. horas libres entre dos días de trabajo, máx. hueco óptimo entre turnos, máx. horas diarias/semanales y máx. días de trabajo consecutivos — las mismas magnitudes que también define una regla de planificación individual.
- **Recargos:** Recargo nocturno, de día festivo, de sábado y de domingo, en porcentaje.
- **Días de trabajo estándar y fin de semana:** Qué días de la semana se consideran días de trabajo, si se aplica el trabajo por turnos (turnos de mañana/tarde/noche), qué días cuentan como fin de semana y en qué día de la semana comienza la semana.
- **Comandos de planificación (palabras clave):** Los comandos de texto `FREE`, `EARLY`, `LATE`, `NIGHT`, así como sus contrapartes negadas `-FREE`, `-EARLY`, `-LATE`, `-NIGHT`, son configurables aquí. Si una persona escribe estas palabras directamente en una celda de día del plan de turnos, Klacks no lo reconoce como una nota, sino como un deseo: `FREE` significa "a ser posible, no asignar turno ese día", `EARLY`/`LATE`/`NIGHT` prefieren o fuerzan un tipo de turno determinado, las variantes negadas excluyen lo contrario. Tanto la planificación automática como el harmonizer tienen en cuenta estos deseos como pauta.

## Es bueno saberlo

- Esta página gestiona **valores predeterminados globales** — los cambios solo afectan a los contratos o reglas de planificación **recién creados**, no de forma retroactiva a los ya existentes.
- Los valores límite de las reglas de planificación aquí son idénticos a los que, por lo demás, se establecen individualmente por contrato — aquí solo se define el valor inicial con el que parte un nuevo contrato.
- Los comandos de planificación están ocultos de forma predeterminada en el plan de turnos y se pueden mostrar mediante un icono propio en la barra de herramientas.

---
*Pruébalo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen a diario.*
