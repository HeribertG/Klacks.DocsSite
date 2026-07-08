---
sidebar_position: 7
---

# Macros

Los recargos por trabajo nocturno, dominical y en días festivos, o el cálculo exacto de horas en vacaciones y servicio militar, no se pueden cubrir con una fórmula fija para cada empresa. En Configuración > Macros escribe para ello sus propios scripts pequeños en un lenguaje similar a BASIC.

## Cómo funciona

**Para qué sirven los macros:** Un macro calcula, a partir de los datos de un turno (Work) o una ocupación, un único valor de retorno — normalmente un recargo en horas o francos. El resultado se guarda en `Work.Surcharges` y se incorpora automáticamente al cálculo de horas (ClientPeriodHours). Cada macro pertenece a un tipo — turno/ocupación o reglas de trabajo — y se puede nombrar, editar y eliminar como cualquier otro ajuste.

**Datos disponibles:** A través de `IMPORT` están disponibles en el script, entre otros, `hour` (horas de trabajo), `fromhour`/`untilhour` (hora de inicio/fin como horas decimales), `weekday` (ISO-8601: 1 = lunes … 7 = domingo), `holiday`/`holidaynextday` (si el día actual o el siguiente es festivo), así como las tasas de recargo definidas en el contrato `nightrate`, `holidayrate`, `sarate` (sábado) y `sorate` (domingo).

**Alcance del lenguaje:** El lenguaje de script conoce estructuras de control (`IF…THEN…ELSEIF…ELSE…ENDIF`, `SELECT CASE`, `FOR…NEXT`, `DO…LOOP`), funciones propias (`FUNCTION`) y procedimientos (`SUB`, deben estar definidos antes de su primera llamada), así como funciones integradas de cadenas, matemáticas, trigonometría y tiempo (p. ej., `TimeToHours`, `TimeOverlap` para periodos que cruzan la medianoche). El resultado se devuelve mediante `OUTPUT tipo, valor`.

**Probar en el editor:** El editor de macros tiene su propia pestaña de pruebas: introduce valores de ejemplo para las variables importadas, comprueba la sintaxis y ejecuta el script a modo de prueba. `DEBUGPRINT`/`DEBUGCLEAR` muestran valores adicionales en la ventana de prueba sin influir en el valor de retorno real.

**Seguridad:** El intérprete se ejecuta en un entorno aislado (sandbox) sin acceso al sistema de archivos ni a la red — un macro puede calcular mal, pero no puede causar ningún daño fuera del cálculo.

## Bueno saberlo

- `DIM` declara una variable, pero no la inicializa al mismo tiempo — `DIM x = 10` es un error de sintaxis; primero `DIM x` y luego, por separado, `x = 10`.
- Palabras clave como `ENDIF`, `ENDFUNCTION` y `ENDSUB` se escriben juntas, no con espacios.
- `weekday` sigue siempre ISO-8601 (1 = lunes … 7 = domingo) — en sus propias consultas `SELECT CASE` para "fin de semana", esos son los valores 6 (sábado) y 7 (domingo).

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen diariamente.*
