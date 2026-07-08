---
sidebar_position: 4
---

En Configuración > OpenRoute registra la clave API del servicio externo openrouteservice.org, que Klacks utiliza para la optimización de rutas.

## Cómo funciona

OpenRouteService calcula tiempos de viaje y distancias — para desplazamientos en coche, bicicleta y a pie — y proporciona así la base para la optimización de rutas en Klacks. En el único campo de esta página, introduce su clave API personal. Puede obtener una clave gratuita a través del enlace de registro a openrouteservice.org, disponible en la página.

## Es bueno saberlo

- La clave se envía directamente desde el navegador a openrouteservice.org y, por ello, se muestra deliberadamente **en texto plano** en lugar de enmascarada (`***`) — a diferencia, por ejemplo, de las contraseñas de correo electrónico. Esto es intencionado, para que pueda detectar un error tipográfico accidental o una clave caducada; no es un error de visualización.
- En la base de datos, la clave se almacena, no obstante, cifrada.
- Sin una clave válida, la optimización de rutas no funciona — no se pueden calcular entonces tiempos de viaje ni distancias.
- Para la mera conversión de direcciones en coordenadas (geocodificación), Klacks utiliza otro servicio independiente — esta clave es responsable exclusivamente del cálculo de rutas.

---
*Pruébalo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen a diario.*
