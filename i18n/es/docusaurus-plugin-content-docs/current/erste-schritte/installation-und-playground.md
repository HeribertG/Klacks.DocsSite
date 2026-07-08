---
sidebar_position: 1
---

# Instalación y Playground

Puede probar Klacks en un minuto — e instalarlo en pocos minutos. Sin registro, sin conversaciones comerciales.

## Opción 1: Playground (sin instalar nada)

Una instancia pública de Klacks con datos de ejemplo está disponible en **[klacks-software.ch](https://klacks-software.ch:7643)**:

- **Inicio de sesión:** `admin@test.com` · **Contraseña:** `P@ssw0rt1`
- Dispone de derechos de administrador completos — pruebe todo lo que quiera.
- Todos los datos se **restablecen automáticamente cada día**. No introduzca datos personales reales.

## Opción 2: En su propio servidor (On-Premise)

El paquete On-Premise lo incluye todo: imágenes Docker, instalador, base de datos, HTTPS y actualizaciones automáticas.

```bash
curl -fsSLO https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip
unzip klacks-onprem.zip && cd onprem && ./install.sh
```

En Windows: `install.ps1` en lugar de `install.sh`. El instalador genera contraseñas y certificados por sí mismo, descarga las imágenes Docker actuales y espera hasta que todo esté en funcionamiento. Primer inicio de sesión con `admin@test.com` / `P@ssw0rt1` — **cambie esta contraseña inmediatamente después del primer inicio de sesión.**

## Bueno saberlo

- Un servicio de actualización incluido mantiene su instalación siempre al día — con copia de seguridad antes de cada actualización y reversión automática en caso de problemas.
- Sus datos permanecen por completo en su infraestructura; Klacks no envía nada a servidores externos.
- Se requiere un servidor con Docker, acceso saliente a Internet (para las imágenes Docker y las actualizaciones) y los puertos 80/443 abiertos.

---
*¿Preguntas sobre la instalación? [Comunidad de Klacks en Discord](https://discord.gg/YRP8p2abVC).*
