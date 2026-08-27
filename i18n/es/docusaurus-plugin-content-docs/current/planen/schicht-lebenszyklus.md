---
sidebar_position: 8
---

# El ciclo de vida de un turno: del pedido al segmento

Antes de que un turno pueda siquiera cubrirse, atraviesa cuatro etapas — desde el pedido libremente editable, pasando por el pedido sellado e inmutable, hasta el turno planificable y sus segmentos. El sentido de todo ello: lo que se acordó permanece siempre consultable; lo que el día a día replanifica después, sigue siendo flexible.

Un turno no está necesariamente vinculado a un pedido: Klacks representa tanto turnos internos y regulares sin relación con un cliente como pedidos complejos con numerosas entregas o intervenciones divididas en varios segmentos de contenedor.

## Cómo funciona

**1. Pedido — libremente editable.** Cada turno nuevo empieza aquí. En la página de turnos, el botón **+ nuevo pedido** abre el formulario; puede revisar el pedido tantas veces como quiera, todos los campos están abiertos. Todavía no aparece en el plan de servicio, por lo que tampoco se puede asignar personal a él. Aun así, no es un mero boceto — es un pedido real, solo que todavía no sellado. En la lista de turnos, Klacks lleva esta etapa bajo **Pedidos**. Si cambia allí a **Turnos planificables**, el botón se llama **+ nuevo turno**: crea un pedido sin vínculo a un cliente — para trabajo general que nadie externo encarga ni paga. En ese caso, la tarjeta *Dirección* desaparece; este turno también atraviesa las cuatro etapas.

**2. Pedido sellado — inmutable.** Cuando el pedido está definido, lo sella con el botón de candado en la tarjeta *General*. A partir de ese momento queda bloqueado y se conserva de forma permanente como reflejo vinculante del acuerdo — incluso cuando la operación diaria ya ha replanificado el turno hace tiempo. Una vez guardado, esto **no se puede deshacer**. Qué pedidos ya han alcanzado esta etapa lo muestra, en la lista de turnos, la casilla **Mostrar solo pedidos sellados**.

**3. Turno planificable — aquí se planifica.** El sellado genera, en un solo paso y exactamente una única vez, el turno planificable: una copia vinculada al pedido. Solo este turno aparece en [La cuadrícula del plan: su matriz de tiempo interactiva](../planen/plan-raster.md), solo en él se puede reservar personal — y sigue siendo editable. Un guardado posterior no genera una segunda copia. En la lista de turnos lo encuentra bajo **Turnos planificables**.

**4. Segmentos — el turno recortado.** Un turno planificable se puede recortar, por ejemplo por días o por franjas horarias. El turno anterior se convierte entonces él mismo en un segmento, y los demás surgen junto a él. Todos los segmentos son a su vez planificables y son los que llevan la asignación real. El pedido sellado no se ve afectado por ello — es y sigue siendo el contrato de fondo.

**Cuándo se activa el botón de candado:** permanece gris hasta que el pedido está lo bastante completo para la planificación — la abreviatura, el nombre y la fecha de inicio están rellenados, se ha elegido al menos un día de la semana y al menos un grupo, y tanto el número de tareas como el número de empleados por turno son mayores que cero. Su información sobre herramientas lo dice sin ambigüedad: «Tras el bloqueo, el pedido es inmutable y está listo para la planificación».

**La única excepción a la inmutabilidad:** si un pedido sellado no tiene fecha de fin — por ejemplo, porque el pedido se prorroga continuamente o su fin todavía está abierto —, puede establecer ese único campo también con posterioridad. Requisito: a partir de la fecha elegida todavía no hay turnos planificados. Después, ese campo también queda bloqueado como todos los demás.

**Un ejemplo:** el 1 de mayo registra el pedido «Boda Müller» y lo va perfeccionando durante dos días. El 3 de mayo la clientela confirma — usted sella. Klacks fija el pedido y crea junto a él el turno planificable. El 4 de mayo, la coordinación asigna a dos empleados; el 5 de mayo el turno se recorta en dos segmentos. El 1 de junio se cierra el periodo y las entradas en los segmentos quedan bloqueadas. El pedido sellado del 3 de mayo nunca se modifica en todo este proceso.

**Las tarjetas del formulario.** El formulario se organiza en tarjetas que puede desplegar y plegar individualmente; se guarda y se descarta mediante la barra de guardado al pie del área de trabajo. Parte de las tarjetas solo aparece cuando activa el interruptor **Modo experto** en la tarjeta *General*:

- **General** — abreviatura (como máximo 6 caracteres; Klacks la sugiere automáticamente al escribir el nombre), nombre, fecha de inicio y de fin, así como notas. Aquí también se encuentran el botón de candado y el interruptor del modo experto.
- **Grupo** — asigna el turno a uno o varios grupos. Al menos un grupo es obligatorio; mientras no se haya elegido ninguno, un cuadro informativo lo señala.
- **Calificaciones requeridas** — qué [calificaciones](../einstellungen/stammdaten-organisation/qualifikationen.md) exige el turno, cada una con un nivel mínimo (Bajo a Experto) y la indicación de si es obligatoria.
- **Horas y días de la semana** — hora de inicio, hora de fin y duración, así como los días de la semana en los que se produce el turno, más dos reglas de días festivos. En modo experto puede gestionar aquí el turno en su lugar como franja horaria: entonces se sitúa de forma flexible dentro de la ventana entre la hora de inicio y la de fin, y se cuenta la duración registrada.
- **Macro** (modo experto) — vincula el turno con un [macro](../einstellungen/klacksy-konfiguration/makros.md) para el cálculo de la duración y del salario.
- **Dirección** — el cliente o el lugar de la prestación, buscado por nombre o número de identificación. La columna de filtro de la derecha acota precisamente esta búsqueda.
- **Características especiales** (modo experto) — servicio esporádico con su periodicidad, briefing y debriefing, tiempo de desplazamiento de ida y vuelta, así como el número de empleados y de tareas por turno.
- **Gastos estándar** (modo experto) — gastos que se producen regularmente en este turno, cada uno con denominación, importe e indicación de si están sujetos a impuestos.

Cómo se cubren después los turnos planificables lo describen [Planificación automática: un clic, el resto se ejecuta en segundo plano](../planen/auto-planung.md) y [La cuadrícula del plan: su matriz de tiempo interactiva](../planen/plan-raster.md).

## Bueno saberlo

- **Sellar significa aquí algo distinto que en el flujo de aprobación.** Sellar un pedido congela la *descripción* del turno — lo que hay que hacer, de forma permanente. El [Flujo de aprobación: del borrador al plan vinculante](../planen/freigabe-workflow.md) y el [Cierre de periodo](../planen/periodenabschluss.md), en cambio, bloquean las *entradas en días concretos*. Ambos procesos funcionan de forma independiente entre sí.
- **Los pedidos también se generan automáticamente.** Además del formulario, la [importación ERP](../einstellungen/kommunikation-integration/erp-uebernahmepunkte.md) es la segunda vía: los pedidos procedentes de allí también llegan primero como pedido sin sellar y deben revisarse y sellarse.
- **Un pedido olvidado se hace notar.** Si un pedido permanece sin sellar poco antes de su inicio, [Klacksy como miembro proactivo del equipo](../ki/klacksy-proaktiv.md) lo señala mediante el tipo de hallazgo «Pedido abierto» — porque sin sellar significa: no planificable.
- **Los turnos de contenedor funcionan de forma algo distinta.** Un contenedor es una envoltura que agrupa varios turnos parciales; por eso no tiene ni cliente ni dirección, y las tarjetas *Dirección* y *Gastos estándar* desaparecen. En él, la tarjeta *Características especiales* solo muestra la opción de servicio esporádico. La casilla «Es un contenedor» se encuentra en modo experto en la tarjeta *General*, y solo se puede marcar mientras el pedido siga sin sellar.
- **Los turnos esporádicos y los turnos de franja horaria no cuentan.** Ambos se excluyen deliberadamente de la barra de turnos del [monitor de recursos](../optimieren/ressourcen-monitor.md), porque no representan una necesidad diaria fija.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen a diario.*
