---
sidebar_position: 3
---

El monitor de recursos muestra de un vistazo cómo está la ocupación de personal de un grupo (o de todos los grupos) en el año seleccionado — una barra por día, a lo largo de los 365 días del año completo.

## Cómo funciona

La representación sigue el «gráfico de capacidad frente a carga de trabajo» («Capacity vs. Workload Chart»), establecido en la planificación de personal (conocido en la literatura de gestión de proyectos como «Resource Histogram»). Los elementos:

- **Barras verdes — Turnos:** Número de turnos planificados en el día. Cada turno cuenta como una posición de empleado; los turnos de contenedor cuentan como 1.
- **Barras grises — Ausencias:** Número de empleados ausentes, apiladas sobre las barras verdes. Una anotación completa de vacaciones o enfermedad cuenta como 1, una media jornada como 0,5 — también en fin de semana.
- **Línea rosa punteada — Disponibilidad deseada:** Cuántos empleados estarían disponibles de media si se respetan los días de trabajo deseados por semana (estándar: 5 días de trabajo, 2 días de descanso). Este es el objetivo de la planificación.
- **Línea roja discontinua — Disponibilidad máxima:** El máximo físico/legal con el número máximo permitido de días de trabajo consecutivos (estándar: 6). Siempre se sitúa en o por encima de la línea rosa.
- **Línea azul — Número de empleados:** Plantilla total con contrato activo en el día correspondiente (headcount).

**Interpretación:** Si el borde superior de las barras verdes se acerca a la línea rosa, la plantilla está siendo utilizada de forma óptima. La diferencia entre la línea azul y el borde superior de las barras apiladas es su reserva.

Con los botones de flecha de arriba a la derecha cambia el año; a través de la selección de grupo puede acotar a una sucursal o un equipo.

## Bueno saberlo

- Valor empírico: el borde superior de las barras grises de ausencias no debería suponer más de un tercio de la brecha entre los turnos y la plantilla total — de lo contrario, la reserva operativa está en riesgo y los picos de enfermedad o vacaciones son difíciles de cubrir.
- Los valores son estimaciones y aproximaciones, no una liquidación exacta — dan una impresión de la disponibilidad.
- Los turnos provienen de la planificación, no de la realización — por eso también son visibles los turnos futuros.
- Con un contrato 24/7, la línea rosa se suaviza a lo largo de la semana (aprox. 0,71 por persona y día natural); con un contrato de lunes a viernes, se sitúa en 1,0 los días laborables y en 0 el fin de semana.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen a diario.*
