---
sidebar_position: 1
---

# Optimización de tours y rutas

Para los desplazamientos móviles — rutas de Spitex, rondas de seguridad, objetos de limpieza, entregas — Klacks no solo planifica *quién*, sino también *en qué orden*.

## Cómo funciona

Cada lugar de trabajo tiene su dirección registrada; así, Klacks conoce los trayectos. Un **algoritmo de colonia de hormigas** (un método de optimización probado para problemas de rutas) calcula, a partir de las direcciones de los desplazamientos, el orden más razonable:

1. **Registrar direcciones** — se registran una única vez en los lugares de trabajo
2. **Optimizar el orden** — Klacks establece la secuencia más corta y razonable; se eliminan los rodeos y los desplazamientos en vacío
3. **Mostrar en el mapa** — la ruta terminada aparece como un trayecto, opcionalmente para coche, bicicleta o a pie

Si para un desplazamiento hay franjas horarias fijas registradas (por ejemplo, solo por la mañana), esto se tiene en cuenta en la planificación de rutas — pero no es una garantía firme de su cumplimiento.

## Bueno saberlo

- Para el cálculo de distancia y tiempo de viaje, Klacks puede integrar el servicio externo OpenRouteService (las coordenadas GPS se transmiten de forma anonimizada) — según la configuración de la instancia.
- La optimización de rutas es un módulo independiente para los turnos de contenedor; la planificación automática general del plan de turnos evalúa, de forma independiente, la cobertura, la equidad y el cumplimiento de las reglas.
- El medio de transporte se puede elegir por ruta — práctico para rutas urbanas en bicicleta junto a rutas rurales en coche.
- Si alguien falta, Klacks muestra de inmediato quién está calificado y disponible.

![Vista de línea de tiempo para la planificación de rutas](/img/app-timeline-de.png)

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen a diario.*
