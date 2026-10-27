---
sidebar_position: 3
---
# Actualizaciones y rollback

Klacks se actualiza por sí mismo — con paquetes firmados, una copia de seguridad antes de cada paso y un camino de vuelta automático si algo sale mal. Esta página explica qué ocurre y cómo puede intervenir.

## Cómo transcurre una actualización

1. **Detectar.** La API consulta el manifiesto firmado que el fabricante publica con cada release. Si allí figura una versión más reciente, la actualización se considera disponible.
2. **Respaldar.** El servicio de actualización crea una copia de seguridad de la base de datos. Si la nueva versión contiene una migración, esa copia queda vinculada de forma fija a la operación de actualización y estará disponible más tarde para un camino de vuelta.
3. **Descargar y activar conjuntamente.** El servicio descarga las nuevas imágenes de `klacks-api` **y** `klacks-ui` y conmuta ambas a la vez — las dos partes avanzan al unísono, nunca en versiones distintas.
4. **Comprobar.** Tras la conmutación, el servicio consulta la comprobación de estado profunda `/internal/health/deep`.
5. **Evaluar.** Si la nueva versión está en buen estado, la actualización se considera correcta. Si no lo está, el servicio revierte automáticamente **ambas** partes a la versión anterior y vuelve a comprobar. Si tampoco eso tiene éxito, el estado se registra como fallido para que usted lo vea.

## Qué significa «firmado»

El fabricante firma cada release, y su Klacks comprueba la firma antes de aceptar un paquete. La clave pública y la dirección del manifiesto son valores fijos del fabricante en su `.env`:

- `UPDATE_MANIFEST_BASE_URL` — fijada a la fuente de releases del fabricante
- `UPDATE_SIGNATURE_PUBLIC_KEY` — debe coincidir con la clave privada con la que firma el fabricante

Estos dos valores **no están pensados para modificarse**. Quien los sustituye anula la comprobación y abre justo la brecha que cierra la firma.

El manifiesto contiene, entre otras cosas: el canal (`Stable` o `Beta`), la versión más reciente, la versión mínima desde la que es posible una actualización directa (`MinUpgradableFrom`), la fecha de publicación, si incluye una migración de base de datos, los artefactos, la firma y una referencia a la lista de cambios.

`klacks-api` y `klacks-ui` están **fijados a una versión exacta** en el `.env`, para que no diverjan sin que se note. El propio servicio de actualización funciona siempre con `latest` — deliberadamente no figura en el manifiesto firmado y solo sustituye api y ui.

## Ajustes en la operación

En el área de administración, en **Sistema → Actualizaciones**:

| Ajuste | Efecto |
|---|---|
| **Activar actualizaciones automáticas** | Las actualizaciones se detectan y se aplican automáticamente |
| **Solo notificar** | Las actualizaciones solo se **detectan**, pero no se aplican hasta que usted lo active |
| **Ventana de mantenimiento** | Periodo en el que pueden ejecutarse las actualizaciones automáticas |

Estos ajustes están en la base de datos y prevalecen sobre los valores iniciales del `.env` (`UPDATE_AUTO_ENABLED`, `UPDATE_NOTIFY_ONLY`), que solo se aplican en el primer inicio.

## Rollback manual

En el caso automático nadie tiene que intervenir — el servicio revierte por sí mismo una actualización fallida. Si desea deliberadamente dar un paso atrás:

1. Establezca en el `.env` `KLACKS_API_TAG` y `KLACKS_UI_TAG` en la versión anterior.
2. Reactive el stack: `docker compose up -d klacks-api klacks-ui`.
3. **Si la versión defectuosa ya ha migrado**, restaure además la copia de seguridad correspondiente anterior a la actualización — y tenga en cuenta el escollo descrito en la página [Copia de seguridad y restauración](../backup-und-wiederherstellung/): las tablas que creó la nueva versión sobreviven a la restauración y bloquean el siguiente arranque.

## Bueno saberlo

- **El camino de vuelta no es una solución de emergencia, sino el caso normal.** Cada operación de actualización tiene un estado: correcta, revertida o camino de vuelta fallido. Una actualización revertida es una operación normal y registrada — no un incidente.
- **Una actualización revertida no es una actualización deshecha.** El rollback restablece la versión, no sus datos. Los cambios de datos que haya realizado entre la actualización y el camino de vuelta proceden del estado de la copia de seguridad.
- **Puede consultarlo en los registros:** `docker compose logs klacks-updater` muestra la detección, la copia de seguridad, la conmutación y el camino de vuelta.

---

*¿Preguntas sobre la operación? [Comunidad de Klacks en Discord](https://discord.gg/YRP8p2abVC).*
