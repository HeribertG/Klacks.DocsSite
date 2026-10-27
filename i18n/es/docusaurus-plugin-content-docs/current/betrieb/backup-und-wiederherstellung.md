---
sidebar_position: 2
---
# Copia de seguridad y restauración

Sus datos están por completo en su infraestructura — y por eso la copia de seguridad también corre de su cuenta. Esta página muestra qué hay que respaldar y cómo restaurarlo.

## Qué hay que respaldar

| Qué | Dónde | Con qué frecuencia |
|---|---|---|
| Base de datos | Volumen `postgres_data` | a diario, como mínimo antes de cada actualización |
| Archivos subidos | Volumen `api-uploads` | junto con la base de datos |
| Documentos | Volumen `api-documents` | junto con la base de datos |
| Llavero de claves | Volumen `api-dataprotection` | junto con la base de datos, **imprescindible** |

El volumen `api-dataprotection` contiene el llavero de claves con el que Klacks descifra los ajustes cifrados (por ejemplo, las credenciales de los canales de comunicación). Una base de datos sin este llavero está ahí, pero no es plenamente utilizable — respáldelo siempre también.

## Respaldar la base de datos

```bash
docker exec klacks-postgres pg_dump -U admin -d Klacks -Fc > klacks-20260922.dump
```

El formato `-Fc` (custom) comprime y permite elegir tablas individuales al restaurar.

## Restaurar la base de datos

```bash
docker exec -i klacks-postgres pg_restore -U admin -d Klacks --clean --if-exists < klacks-20260922.dump
```

`--clean --if-exists` elimina antes los objetos existentes, para que la restauración no falle por tablas que ya existen.

## El escollo: rollback tras una migración fallida

Justo aquí se produjo en el pasado una caída de producción, y el mecanismo es el de cualquier rollback basado en un volcado:

Si una versión defectuosa crea **tablas nuevas** mediante una migración, esas tablas no están en el volcado. Al restaurar, la base de datos no vuelve por tanto al estado anterior — las tablas nuevas **sobreviven** a la restauración, mientras que el historial de migraciones (`__EFMigrationsHistory`) se restablece al estado anterior. El siguiente intento de arranque tropieza entonces con el error `42P07: relation "…" already exists` y la instalación queda atrapada en un bucle de reinicios.

Si tras una actualización fallida hace usted el rollback manualmente, compruebe por eso después de restaurar si han quedado tablas que no existían en la versión anterior, y elimínelas **antes** de volver a iniciar la API.

## Retención y eliminación

Klacks no elimina los datos solo con una marca de borrado, sino **físicamente**. Un servicio en segundo plano se ejecuta a diario y elimina de forma irrevocable todas las filas marcadas como eliminadas cuyo momento de eliminación sea anterior al plazo configurado — y esto en **todas** las tablas con marca de borrado (empleados, direcciones, grupos, turnos, horas de trabajo, ausencias, pausas, etc.). No hay lista de excepciones; la obligación de eliminar prevalece deliberadamente sobre la recuperabilidad.

El plazo se controla mediante el ajuste `DATA_RETENTION_DAYS`; sin indicación propia rige el valor predeterminado de **3650 días (10 años)**. La página [Retención de datos](../../einstellungen/system-sicherheit/datenaufbewahrung/) describe el ajuste en detalle.

## Bueno saberlo

- **Antes de cada actualización, Klacks hace una copia por sí mismo.** El servicio de actualización crea una copia de seguridad de los datos antes de activar una nueva versión; en caso de migración, la copia queda vinculada a la operación de actualización y se reutiliza para un rollback automático o manual. No sustituye a una copia de seguridad propia y **externa** — esta protege justo en los casos en que el propio host resulta afectado.
- **Compruebe su copia de seguridad.** Un volcado que nunca se ha restaurado es una suposición, no una copia de seguridad. Cree una base de datos desechable y restaure en ella antes de fiarse del procedimiento.
- **Guarde el llavero de claves por separado de la base de datos.** Si `api-dataprotection` está en el mismo conjunto de copias y el mismo incidente afecta a ambos, el cifrado no sirve de nada.

---

*¿Preguntas sobre la operación? [Comunidad de Klacks en Discord](https://discord.gg/YRP8p2abVC).*
