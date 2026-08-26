---
sidebar_position: 7
---

# Horas extra

En Configuración > Compliance y reglas de recargo (modo experto) > Horas extra determina a partir de cuántas horas acumuladas el trabajo adicional genera derecho a recargo y qué importe tiene el recargo en cada nivel.

## Cómo funciona

**Base de cálculo:** diaria o semanal — no hay más opciones. No está prevista una base mensual o anual. Con «Semanal», la semana comienza en el primer día de la semana configurado.

**Hasta tres niveles:** cada nivel consta de dos campos — «Nivel X a partir de horas» (el número de horas acumuladas en el día o en la semana a partir del cual se aplica ese nivel) y «Recargo del nivel X» en porcentaje. El nivel configurado más alto en cada caso queda abierto hacia arriba.

**Cada nivel cuenta solo las horas dentro de su propio tramo**, no todas las horas desde cero. Si el nivel 1 comienza en 8 horas y el nivel 2 en 10 horas, un día de diez horas y media paga la tarifa del nivel 1 por las dos horas entre 8 y 10, y la tarifa del nivel 2 solo por la media hora siguiente — nunca la tarifa del nivel 2 por las diez horas y media completas. Así, un único bloque de trabajo puede generar varias partidas de recargo, una por cada nivel alcanzado.

**Un nivel incompleto se omite silenciosamente:** si falta el valor de horas, o si el recargo es cero o negativo, ese nivel no cuenta. Así pues, pueden estar realmente activos entre cero y tres niveles.

**El recargo es el suplemento, no el importe total:** el 25 % significa un cuarto de hora adicional por cada hora trabajada en ese nivel — no que la hora se pague con el factor 1,25. El modo de recargo situado al lado (multiplicador o importe fijo por hora) solo determina la unidad; el cálculo subyacente sigue siendo el mismo.

**Qué cuenta como horas ya trabajadas:** los niveles se rellenan a partir de las horas realizadas previamente ese mismo día o esa misma semana — ordenadas primero por fecha y después por hora de inicio. Así, cada bloque de trabajo ocupa su propia posición dentro del tramo, y ninguna hora se atribuye dos veces a un nivel superior. Si cambia una entrada anterior, las posteriores se recalculan.

**De dónde proceden los valores:** esta tarjeta ofrece los valores válidos para toda la empresa — solo se aplican cuando ninguna otra fuente tiene prioridad. Si al contrato de la persona se le ha asignado una [regla de planificación](../../planen/planungsregeln.md) con sus propios niveles de horas extra, esta tiene prioridad; una versión posterior de esa regla, vigente para la fecha correspondiente, sustituye si es necesario el conjunto completo, pero, si no tiene su propio bloque de horas extra, recae en los ajustes de empresa mostrados aquí, no en la regla de planificación. Si no hay ningún nivel configurado en ningún sitio, como último recurso sirve únicamente el **límite de horas extra** de la regla de planificación — y exclusivamente como valor inicial del primer nivel, nunca como tasa de recargo. Las fuentes nunca se mezclan: quien aporta el primer nivel, aporta también todos los demás.

**Dos condiciones sin las cuales no se genera ningún recargo:**

- El turno necesita un macro de cálculo. El trabajo en un turno sin macro nunca se comprueba para horas adicionales.
- Debe haber al menos un nivel completo configurado. Sin un nivel de este tipo, el resultado no es «cero horas extra», sino que no se realiza ninguna comprobación en absoluto.

**Excepciones:** las correcciones y las sustituciones de última hora nunca se comprueban para horas extra — solo se incluye el trabajo regular.

**Coincidencia con otros recargos:** la misma hora puede calificar simultáneamente para horas extra y para un recargo por circunstancias, como el trabajo nocturno o de fin de semana. Si ambos se suman o solo se aplica el más alto no lo decide esta tarjeta, sino el macro de cálculo del turno correspondiente.

**Guardado:** la tarjeta se encuentra en la sección Compliance y reglas de recargo de la página de configuración (junto con Descanso compensatorio, Modo de recargo y Aplicación de Compliance), visible solo en modo experto. Los cambios se acumulan y se guardan o se descartan mediante la barra de guardado común de la página de configuración — no hay un botón de guardar propio en esta tarjeta.

## Bueno saberlo

- Esta tarjeta cubre exclusivamente la escalonación automática de horas extra según el umbral diario o semanal. Los recargos por trabajo nocturno, dominical o festivo, en cambio, se calculan de forma genérica mediante script — véase [Macros](../klacksy-konfiguration/makros.md).
- Un nivel sin valor de «a partir de horas» o con un recargo del 0 % o menos se ignora — así se pueden desactivar niveles individuales sin eliminarlos.
- Sin al menos un nivel completo y sin macro de cálculo en el turno, no se generan en ningún caso recargos por horas extra, ni siquiera en turnos muy largos.
- Una regla de planificación con sus propios niveles de horas extra sobrescribe por completo estos valores válidos para toda la empresa, no solo niveles individuales.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen a diario.*
