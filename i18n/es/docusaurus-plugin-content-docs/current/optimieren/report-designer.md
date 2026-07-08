---
sidebar_position: 6
---

Con el diseñador de informes puede crear sus propias plantillas de impresión — desde el plan de turnos hasta la lista de direcciones — directamente en Klacks, sin herramientas externas.

## Cómo funciona

Un informe consta de tres áreas que se editan en la pestaña *Designer*:

- **Cabecera (Header)** — se imprime en la parte superior de cada página. Tiene tres zonas (izquierda, centro, derecha) que pueden contener campos de la base de datos, texto libre o imágenes (por ejemplo, el logotipo de su empresa, cargado mediante el gestor de imágenes).
- **Cuerpo (Body)** — contiene una o varias tablas de datos. Las columnas se añaden arrastrando y soltando desde la lista de campos; el orden también se ajusta mediante arrastrar y soltar, y el ancho a través de un campo de entrada en porcentaje por columna.
- **Pie de página (Footer)** — se imprime en la parte inferior de cada página.

Cada tabla está vinculada a una **fuente de datos**, que se selecciona en la pestaña *Datenquelle*: plan de trabajo (Schedule), direcciones como lista o detalle, ausencias, turnos, grupos o plantilla de contenedor. La fuente de datos determina qué campos están disponibles.

Para el diseño están disponibles:
- **Formato** por celda y texto libre: tipo de letra, tamaño, negrita/cursiva/subrayado, color de texto, alineación.
- **Bordes de celda** individuales por lado (arriba/derecha/abajo/izquierda) con estilo y color de línea.
- **Pie de tabla** con campos SUM: las columnas numéricas se suman automáticamente.
- **Líneas de texto libre** antes o después de las tablas de datos — por ejemplo, para avisos, condiciones o campos de firma.
- **Configuración de página** en la pestaña *Allgemein*: orientación vertical u horizontal, tamaño de papel (A4, A3, B4/B5 JIS, Letter) y márgenes de página en mm.

## Bueno saberlo

- **Campos combinados (Merged Fields):** A través de la barra de herramientas del campo seleccionado puede combinar varios campos en una sola columna; el separador (coma, espacio, salto de línea, guion) es configurable.
- En la fuente de datos **plan de trabajo** hay dos opciones adicionales: *Agrupar entradas por día* (varias entradas del mismo día en una sola fila) y *Mostrar periodo completo* (todos los días, incluso sin entradas).
- El pie de tabla se activa mediante una casilla de verificación justo debajo de la tabla correspondiente; el rótulo SUM del campo de pie de página se puede mostrar u ocultar por separado.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen a diario.*
