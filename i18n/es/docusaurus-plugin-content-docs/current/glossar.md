---
sidebar_position: 8
---
# Glosario

Los términos que aparecen una y otra vez en Klacks y en esta documentación — breves y en el orden en que los irá encontrando.

## Planificación

**Fila de empleado**
La unidad planificable más pequeña. No la persona y no el día, sino la fila de una persona en una hoja de plan concreta. Todos los valores del plan dependen de esta fila.

**Hoja de plan**
Un contenedor que reúne **referencias** a filas de empleado — no copias. Por eso una persona existe una sola vez, sin importar en cuántos subplanes aparezca, y un cambio es visible de inmediato en todas partes. Base de la [planificación modular](../planen/modulare-planung/).

**Planificación automática**
El asistente rellena un plan según sus reglas. El cálculo se ejecuta en segundo plano mientras usted sigue trabajando — véase [Planificación automática](../planen/auto-planung/).

**Disponibilidad**
Cuándo está una persona lista para trabajar — con precisión de horas o de días, tanto para el personal propio como para el externo. Véase [Cuadrícula de disponibilidad](../planen/verfuegbarkeits-raster/).

**Pedido (encargo)**
Un boceto de una intervención que todavía se puede editar. Un pedido **todavía no es planificable**.

**Sellar**
El paso único e **irreversible** que convierte un pedido en un turno planificable. Al hacerlo se crea al mismo tiempo la contrapartida planificable del pedido. En Klacks no existe la posibilidad de crear directamente un turno planificable — todo turno nace mediante el sellado. Véase [El ciclo de vida de un turno](../planen/schicht-lebenszyklus/).

**Turno (servicio)**
La intervención planificable y sellada. El término «servicio» significa lo mismo.

**Niveles de aprobación (plan de turnos)**
El plan de turnos pasa por cuatro estados en un orden fijo: **borrador → confirmado → aprobado → cerrado**. Confirmar puede hacerlo cualquier cuenta con sesión iniciada; aprobar, solo Supervisor y Admin; cerrar, exclusivamente Admin. Véase [Flujo de aprobación](../planen/freigabe-workflow/).

**Periodo / cierre de periodo**
El periodo de liquidación (semanal, quincenal, mensual o individual; se define mediante el intervalo de pago). El cierre hace vinculante un periodo y queda reservado a Admin — véase [Cierre de periodo](../planen/periodenabschluss/).

**Ausencia — dos cosas, una palabra**
«Ausencia» designa, en el área de datos maestros, el **catálogo de tipos de ausencia** (nombre, color, duración estándar, valor estándar). Las barras del calendario, en cambio, son o bien un **deseo** (una ausencia prevista, libremente desplazable y sin nivel de bloqueo) o bien una **ausencia registrada** (tomada del plan de servicio, de solo lectura en la página de ausencias y con nivel de bloqueo). Quien confunda ambas busca en el lugar equivocado.

## Asistente de IA

**Klacksy**
El asistente de IA de Klacks. Planifica, explica y ejecuta — con un modelo de libre elección. Véase [Klacksy](../ki/klacksy-ki-assistent/).

**Habilidad (skill)**
Una capacidad individual y acotada de Klacksy — un envoltorio declarativo en torno a lógica de programa concreta («buscar empleado», «asignar contrato», «crear informe»). Klacksy elige en tiempo de ejecución las habilidades adecuadas.

**Nivel de autonomía**
Hasta dónde puede llegar Klacksy sin preguntar:

| Nivel | Nombre | Comportamiento |
|---|---|---|
| 0 | Proponer | Cada acción de escritura necesita su confirmación |
| 1 | Asistido | Las acciones reversibles se ejecutan libremente; las definitivas y las delicadas preguntan |
| 2 | Autónomo (predeterminado) | Todo salvo las acciones clasificadas como delicadas se ejecuta libremente |
| 3 | Totalmente autónomo | También los pasos definitivos se ejecutan |

Las acciones delicadas — por ejemplo, eliminar usuarios o cambiar permisos — preguntan en **todos** los niveles. Véase [Niveles de autonomía](../einstellungen/klacksy-konfiguration/autonomie-stufen/).

## Roles y operación

**Admin / Supervisor / Planificador**
Los tres niveles de acceso. Admin puede todo, Supervisor crear y editar; una cuenta sin rol es Planificador. El resumen está en [Roles y permisos](../erste-schritte/rollen-und-rechte/).

**Perfil de país**
Un conjunto de ajustes preparado para un país: idioma, zona horaria, calendario de festivos, fin de semana e inicio de semana, límites de jornada, derecho a vacaciones, recargos, exportación de nómina predeterminada y plantillas sectoriales. Se elige al instalar mediante `REGION`.

**Playground**
La instancia de prueba pública en [play.klacks-software.ch](https://play.klacks-software.ch) con datos de demostración — expresamente para probar, sin datos personales reales. Véase [Instalación y Playground](../erste-schritte/installation-und-playground/).

**On-Premise**
La operación en su propia infraestructura: su hardware, su base de datos, sus datos. El término opuesto a la variante alojada.

**Servicio de actualización**
El servicio incluido que aplica actualizaciones firmadas — con copia de seguridad previa y rollback automático en caso de problemas. Véase [Actualizaciones y rollback](../betrieb/updates-und-rollback/).

**Roles y protección de datos**
Klacks no «llama a casa»: no hay ninguna comunicación de sus datos al fabricante. De los datos que realmente deben eliminarse se encarga la [retención de datos](../einstellungen/system-sicherheit/datenaufbewahrung/) — las eliminaciones se borran físicamente una vez vencido el plazo.

---

*¿Falta un término o está mal explicado? [Comunidad de Klacks en Discord](https://discord.gg/YRP8p2abVC).*
