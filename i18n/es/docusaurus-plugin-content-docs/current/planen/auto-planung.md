---
sidebar_position: 1
---

# Planificación automática: un clic, el resto se ejecuta en segundo plano

La parte más laboriosa de la planificación de turnos — asignar personas a turnos — la realiza Klacks con solo pulsar un botón. El propio cálculo requiere su tiempo, pero sigue ejecutándose en segundo plano: usted no tiene que esperar y puede dedicarse mientras tanto a otras cosas.

## Cómo funciona

Detrás de la planificación automática de 1 clic hay un **algoritmo genético**: genera miles de variantes de plan, las evalúa y combina las mejores — hasta que se obtiene una solución equilibrada. Las reglas estrictas siempre tienen prioridad; solo después cuentan otros objetivos:

- **Reglas** — el derecho laboral, los tiempos de descanso, las calificaciones y las disponibilidades no son negociables: ningún resultado, por bueno que sea, puede vulnerar una regla estricta
- **Cobertura** — cada turno se cubre con el número de personas requerido
- **Equidad** — las horas de trabajo se reparten de manera uniforme, y la secuencia de turnos por persona sigue, en la medida de lo posible, el patrón mañana → tarde → noche
- **Continuidad** — en la medida de lo posible, los empleados permanecen en su lugar de trabajo habitual

La planificación automática se inicia directamente desde el plan de turnos para el periodo seleccionado. El resultado aparece como un borrador de plan normal: todo se puede seguir ajustando manualmente, nada queda fijado sin consultarlo.

## Bueno saberlo

- Las calificaciones actúan como un límite real: quien no tenga una calificación requerida no será asignado.
- La planificación automática respeta las entradas ya existentes — así puede fijar primero los puntos fijos y dejar que se rellene el resto.
- Si un resultado no le convence, simplemente vuelva a planificar: el algoritmo encuentra alternativas equivalentes.
- Puede crear varios escenarios en paralelo sin modificar el plan existente: cada escenario es una copia hipotética independiente que puede comparar, descartar o aplicar. Así está preparado para cambios de última hora, en lugar de tener que recalcularlo todo después.

![Cuadrícula del plan de turnos de Klacks](/img/app-schedule-de.png)

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen a diario.*
