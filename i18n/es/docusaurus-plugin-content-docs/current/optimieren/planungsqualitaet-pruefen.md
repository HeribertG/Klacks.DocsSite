---
sidebar_position: 7
---

# Comprobar la calidad de la planificación: infracciones, brechas y omisiones

Después de una ejecución de los asistentes de planificación, Klacks coloca tres tablas de diagnóstico junto al resultado: dónde el plan choca con una regla, dónde falta una calificación y qué no llegó a planificarse en absoluto.

## Cómo funciona

Los tres informes aparecen en el diálogo del asistente de planificación correspondiente — no en la cuadrícula del plan. Forman parte del resultado de una ejecución del asistente y solo son visibles para administradores, porque la planificación automática en su conjunto requiere el rol de Admin. Cada informe indica el número de sus entradas en el título y **no se muestra en absoluto si no ha encontrado nada** — así que un recuadro ausente es una buena noticia.

**Así se accede a los diálogos:** El botón de varita mágica en el plan de turnos inicia, en su estado básico, directamente una ejecución de planificación, sin mostrar ningún diálogo. Con **Ctrl+Mayús+H**, los administradores conmutan el botón a un desplegable con los distintos asistentes de planificación (Plan, Fuzzy Harmonizer, Holistic Harmonizer, Background Optimizer, Recovery) — solo a través de este desplegable se abren los diálogos con las tablas de diagnóstico.

**Las lagunas de calificación** aparecen junto con el resultado, es decir, *antes* de que usted lo aplique. Columnas: gravedad, turno, fecha, calificación requerida, motivo — más una columna «Empleado», en cuanto al menos una fila menciona a una persona. Como motivo figura *Inexistente*, *Caducada* o *Nivel demasiado bajo*. Detrás de esto hay dos casos distintos: o bien un puesto de turno quedó vacío porque ninguna persona disponible aporta la calificación exigida — entonces la fila no menciona a ninguna persona. O bien una persona permaneció en un turno para el que no está calificada — entonces aparece su nombre. Si la calificación solo falta en el sistema, regístrela en la ficha de la persona; el [Catálogo de calificaciones](../einstellungen/stammdaten-organisation/qualifikationen.md) describe cómo se mantienen las calificaciones. En caso contrario, planifique a otra persona o ajuste el requisito del turno.

**Las infracciones de Compliance** aparecen *después* de que usted haya aplicado el resultado. Columnas: fecha, empleado, comentario; el comentario nombra en texto claro la regla infringida junto con los valores concretos. Las filas rojas son errores, las amarillas advertencias e indicaciones. En los dos asistentes de armonización, el informe muestra exclusivamente lo que el nuevo escenario aporta **adicionalmente** frente al plan real — y, además, cuántas de estas infracciones se gestionan en modo de bloqueo. Estas impiden que el escenario se aplique hasta que se subsanen o una persona autorizada las anule explícitamente.

**Las colocaciones omitidas** solo existen en el asistente de planificación de turnos, también después de aplicar el resultado — y siempre en rojo. Columnas: fecha, empleado, turno, motivo. Aquí no figura lo que se planificó, sino lo que Klacks deliberadamente **no** escribió: asignaciones que habrían infringido una regla gestionada en modo de bloqueo. El motivo aparece como una categoría breve («Tiempo de descanso demasiado corto», «Demasiados días de trabajo consecutivos», «Colisión horaria»…). Según la situación, Klacks ofrece debajo a las personas autorizadas la posibilidad de aplicar la ejecución igualmente mediante anulación (override); el resto recibe la indicación de repetir el asistente con la anulación activada o de pedírselo a una persona autorizada. Cada anulación queda registrada.

Qué reglas se comprueban y con qué grado de exigencia se aplican lo define en las [Reglas de planificación](../planen/planungsregeln.md); cómo se genera el plan en sí lo describe [Planificación automática: un clic, el resto se ejecuta en segundo plano](../planen/auto-planung.md).

## Bueno saberlo

- Una entrada bloqueada no descarta todo el plan: solo desaparecen las asignaciones afectadas; las entradas correctas de la misma persona se escriben igualmente.
- En la gravedad de las lagunas de calificación rige una regla sencilla: **error** solo cuando falta por completo una calificación marcada como obligatoria. Una calificación caducada, un nivel demasiado bajo y cualquier requisito opcional aparecen como **advertencia**.
- Un puesto de turno vacío solo aparece en las lagunas de calificación cuando realmente ninguna persona disponible entraba en consideración. Si quedó vacío por otros motivos, se trata de una infracobertura normal y no se notifica aquí.
- Si la planificación automática se ejecuta como pasada completa, Klacks solo notifica el resultado mediante un breve aviso emergente junto con el número de lagunas de calificación — las tablas detalladas pertenecen a los diálogos de los asistentes individuales.
- Los informes son vistas puras: no se pueden editar y no cambian nada. La corrección se realiza en [La cuadrícula del plan: su matriz de tiempo interactiva](../planen/plan-raster.md) o mediante una nueva ejecución.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen a diario.*
