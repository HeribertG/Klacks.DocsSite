---
sidebar_position: 4
---

El calendario perpetuo calcula los días festivos para cada año de forma automática — usted define las reglas una vez y, a partir de ahí, Klacks conoce los días festivos para todos los años venideros.

## Cómo funciona

Cada día festivo se describe mediante una regla breve. Hay dos tipos básicos:

- **Fechas fijas** en formato `MM/DD`: `01/01` es Año Nuevo, `08/01` la fiesta nacional suiza, `12/25` Navidad.
- **Fechas relacionadas con la Pascua** en formato `EASTER+XX` o `EASTER-XX`: la fecha de Pascua se calcula automáticamente según la fórmula gaussiana de Pascua, y el día festivo como distancia respecto a ella. Ejemplos: `EASTER-02` = Viernes Santo, `EASTER+01` = Lunes de Pascua, `EASTER+39` = Ascensión, `EASTER+50` = Lunes de Pentecostés, `EASTER+60` = Corpus Christi.

Además existen **fechas fijas con desplazamiento de día de la semana** (`MM/DD+XX+WW` o `MM/DD+XX-WW`) para días festivos como «primer jueves de noviembre» (`11/01+00+TH`) o «último lunes de mayo» (`05/25+00-MO`).

Con **SubRules** se desplaza automáticamente un día festivo cuando cae en un día de la semana determinado — p. ej. `SA+2;SU+1`: si el día cae en sábado o domingo, se traslada al lunes. Varias reglas se separan con `;`.

Por cada regla se registran además nombre y descripción (multilingües), país y cantón/estado federado, así como las casillas de verificación **Día festivo legal** y **Remunerado**.

## Bueno saberlo

- Las abreviaturas de los días de la semana están en inglés: `SU`, `MO`, `TU`, `WE`, `TH`, `FR`, `SA`.
- Las SubRules están pensadas principalmente para trasladar los días festivos del fin de semana al siguiente día laborable.
- La casilla **Remunerado** es relevante para el cálculo de la nómina.
- Mediante país y cantón/estado federado se controlan las diferencias regionales — el Viernes Santo, por ejemplo, no rige en todos los cantones de Suiza (excepciones: VS, TI).
- Los paquetes de calendario preinstalados para países y cantones suizos están protegidos contra eliminación; las selecciones de calendario propias, creadas por usted mismo, se pueden eliminar en cualquier momento.

![Reglas de días festivos en Klacks](/img/app-calendar-de.png)

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen diariamente.*
