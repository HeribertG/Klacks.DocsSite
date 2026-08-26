---
sidebar_position: 8
---

# Klacksy como miembro proactivo del equipo

Klacksy no espera a que se le pregunte. Una vez por hora observa la operación en segundo plano y notifica lo que detecta: turnos sin cubrir, contratos próximos a vencer, periodos atrasados, datos maestros faltantes. Hasta dónde puede llegar lo determinan los administradores de forma individual para cada tipo de hallazgo — de fábrica, solo notifica y nunca actúa por iniciativa propia.

No debe confundirse con los [Niveles de autonomía](../einstellungen/klacksy-konfiguration/autonomie-stufen.md): allí se trata de cuánta confirmación necesita Klacksy cuando **usted** le pide algo en el chat. Aquí se trata de lo contrario — de lo que hace **sin que se le pida**.

## Cómo funciona

**Qué es un hallazgo:** un hallazgo es una constatación que Klacksy ha hecho por sí mismo — por ejemplo, «este turno sigue sin cubrir dentro de tres días» o «este periodo de liquidación lleva una semana atrasado». Para ello se ejecuta cada hora un proceso en segundo plano sobre una docena aproximada de reglas de comprobación. La detección en sí está programada de forma fija: ningún modelo de lenguaje decide si algo es un hallazgo — la misma regla produce siempre el mismo resultado, independientemente del proveedor de IA que utilice.

**Catorce tipos de hallazgo son configurables,** entre ellos Turno sin cubrir, Brecha en la disponibilidad, Contrato próximo a vencer, Datos maestros faltantes, Pedido abierto, Cierre de periodo próximo, Periodo atrasado, Desviación de las horas objetivo, Contenedor vacío, Conflicto de bloqueo y Escenario abierto. Dos de ellos no se originan en el proceso horario, sino en la importación de pedidos ERP.

**Los tres niveles — individuales por tipo de hallazgo:** en Configuración > Klacksy > «Margen de actuación de Klacksy» (modo experto, solo administradores), cada tipo de hallazgo figura en su propia fila con la columna «Nivel máximo»:

- **Solo notificar** — Klacksy avisa, nada más. Es el ajuste de fábrica para cada tipo de hallazgo.
- **Preparar un escenario** — Klacksy, además, deja lista una solución como escenario, que una persona solo tiene que aceptar.
- **Ejecutar** — Klacksy resuelve el hallazgo por sí mismo y después informa al respecto.

A partir de «Preparar un escenario» debe designarse una persona responsable: la acción se ejecuta con sus permisos, y ella recibe el informe. A esto se añaden, por fila, presupuestos que limitan la frecuencia con la que Klacksy puede actuar (de fábrica, como máximo 5 acciones por día y 3 en 60 minutos), así como un interruptor «Activo». Este controla exclusivamente la actuación autónoma — si una notificación le llega y cómo, sigue siendo su ajuste de notificación personal.

**El límite duro en el programa:** un nivel más alto solo surte efecto donde para ese tipo de hallazgo existe realmente una resolución automática definida. Si no existe, se queda en la notificación — independientemente del ajuste, e incluso si alguien delega el hallazgo en Klacksy en un caso concreto. Este límite está incorporado en el código del programa y no se puede abrir desde la interfaz. Actualmente hay definida exactamente una resolución: en el tipo de hallazgo «Contenedor vacío», Klacksy puede crear él mismo la plantilla de puesto faltante.

**Dónde llegan los hallazgos:** en el botón de Klacksy de la cabecera, un contador muestra los avisos no leídos. Un clic abre la barra lateral, donde los hallazgos aparecen agrupados bajo el título «Mientras estabas fuera…». Por cada notificación están disponibles «Muéstramelo» (salta al punto afectado), «Útil» y «Ocultar» — esta última, opcionalmente con un motivo («No quiero este tipo de avisos en general», «Esta vez el aviso era incorrecto», «Ya está resuelto») o sin él. Donde está permitido, además hay «Hazlo tú»: una autorización para un caso concreto que eleva justo ese hallazgo a «Preparar un escenario». También puede preguntarle a Klacksy directamente en el chat qué hallazgos están abiertos en este momento.

**Cuando un hallazgo está resuelto:** la fila afectada lleva, en la vista de contenedores de la lista de turnos, la marca «Resuelto por Klacksy el …» — tanto cuando Klacksy ha ejecutado la resolución él mismo como cuando una persona ha aprobado un escenario preparado por Klacksy. Si Klacksy ejecuta por sí mismo, además se envía un informe a la persona responsable.

**La parada de emergencia:** encima del chat, los administradores ven el interruptor «Klacksy actúa de forma autónoma: ACTIVADO/DESACTIVADO». Al desactivarlo, cada tipo de hallazgo vuelve de inmediato a «solo notificar» — incluidas las autorizaciones para casos concretos ya concedidas. Los avisos no se detienen por ello: la parada de emergencia detiene la actuación, no la notificación. El mismo interruptor también se encuentra en la tarjeta de configuración.

## Bueno saberlo

- De fábrica, cada tipo de hallazgo está en «Solo notificar» — Klacksy solo actúa cuando un administrador sube deliberadamente un nivel. La parada de emergencia no es necesaria para ello: de fábrica no está activada y queda en reserva como freno inmediato.
- Las notificaciones solo se envían a administradores y planificadores autorizados. Quien solo puede ver determinados grupos, también recibe únicamente hallazgos de esos grupos; los administradores lo ven todo. Los planificadores reciben los hallazgos, pero no ven el ajuste de niveles.
- El nivel «Preparar un escenario» solo se aplica a resoluciones que se pueden representar como escenario. La resolución definida actualmente no pertenece a ese grupo — en ella solo surte efecto «Ejecutar».
- La tarjeta de configuración y el interruptor de autonomía requieren permisos de administrador; sin ellos no se puede consultar el estado de autonomía.
- El ritmo horario está integrado de forma fija y no se puede ajustar desde la interfaz; la primera ejecución se inicia dos minutos después del arranque del programa.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen a diario.*
