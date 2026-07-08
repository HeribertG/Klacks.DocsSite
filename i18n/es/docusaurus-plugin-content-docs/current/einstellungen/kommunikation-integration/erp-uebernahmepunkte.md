---
sidebar_position: 5
---

En Configuración > Puntos de traspaso ERP configura cómo los pedidos de un sistema ERP externo se traspasan automáticamente a Klacks como archivos XML.

## Cómo funciona

**Tres vías de entrega:** El sistema ERP puede depositar archivos en el almacenamiento del punto de traspaso (Klacks los recoge automáticamente según un plan horario), enviarlos directamente mediante HTTP-POST a un endpoint de importación (autenticado con un token de acceso), o una administradora puede subir el archivo XML manualmente en esta página mediante arrastrar y soltar.

**El punto de traspaso** es el buzón central, gestionado por el propio Klacks, para todos los archivos de importación — muestra tres áreas: Entrada (espera la próxima ejecución), Procesado (archivo) y Errores (archivos inválidos junto con el motivo del error, con posibilidad de reintentar la importación). Un plan horario (expresión cron, por defecto cada hora) y un interruptor de activación para pausar controlan la recogida automática.

**Los tokens de acceso** solo son necesarios cuando un sistema ERP entrega archivos mediante push. Cada token comienza con `klacks_erp_`, es válido de 1 a 730 días (por defecto 365) y se muestra en texto plano **solo una vez, en el momento de la creación**. Un token de este tipo es válido exclusivamente para el endpoint de importación, no para el resto del acceso a la API, y puede revocarse en cualquier momento.

**Procesamiento:** Los pedidos se asignan a un cliente existente o recién creado mediante el ID del sistema de origen y la referencia externa del cliente (o, en su defecto, empresa/código postal/calle) y se crean inicialmente como borrador, que los planificadores deben revisar y sellar. Una nueva entrega modificada de un pedido ya sellado cierra automáticamente el antiguo y crea una nueva versión vinculada; las entregas repetidas sin cambios no desencadenan nada.

## Es bueno saberlo

- Los pedidos individuales incorrectos (p. ej., sin día de la semana o con referencia duplicada) se rechazan sin bloquear los demás pedidos válidos del mismo archivo; sin embargo, el archivo completo termina igualmente en el área de errores, para que nada pase desapercibido.
- Los archivos procesados se archivan, no se eliminan.
- El formato XML exacto (campos obligatorios, formatos de fecha, lógica de días de la semana) está documentado en el manual, directamente en la página de configuración, así como mediante un archivo de ejemplo descargable.
- Esta configuración se encuentra en el área de Configuración y, por tanto, está reservada a roles administrativos.

---
*Pruébalo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen a diario.*
