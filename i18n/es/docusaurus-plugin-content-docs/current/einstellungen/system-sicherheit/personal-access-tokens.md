---
sidebar_position: 2
---

# Tokens de acceso personal

Los tokens de acceso personal (PATs) son claves de API de larga duración con las que herramientas y servicios externos acceden de forma segura a Klacks sin nombre de usuario ni contraseña — por ejemplo, asistentes de IA como Claude Desktop a través del Model Context Protocol (MCP), scripts de automatización o pipelines de CI/CD.

## Cómo funciona

**Crear token:** En Configuración > Tokens de acceso personal, haga clic en "Crear nuevo token", asigne un nombre descriptivo (por ejemplo, `Claude Desktop` o `CI-Pipeline`) y elija una duración de validez entre 1 y 730 días (por defecto: 365 días). El token se muestra tras su creación en el formato `klacks_pat_<cadena aleatoria>` **exactamente una vez** — cópielo de inmediato, ya que después no se podrá volver a consultar.

**Uso:** El token se transmite como token portador (Bearer) en la cabecera `Authorization` de cada solicitud de API, por ejemplo `Authorization: Bearer klacks_pat_...`. Para clientes MCP como Claude Desktop, introdúzcalo como variable de entorno `AUTHORIZATION` del servidor MCP que apunta a `/mcp`.

**Gestión:** El resumen muestra el nombre, la fecha de creación, la fecha de caducidad y el último uso de cada token — el token en texto plano nunca se vuelve a mostrar allí. Los tokens que caducan en los próximos 30 días aparecen marcados en la lista. Mediante el botón Revocar, un token se bloquea de inmediato y de forma definitiva.

## Bueno saber

- Klacks solo almacena un hash SHA-256 del token, nunca el token en texto plano — un token perdido no se puede recuperar, solo revocar y crear uno nuevo.
- Cada token está vinculado a su cuenta de usuario y tiene los mismos permisos que su propia cuenta — no existe una restricción de alcance (scope) detallada por token.
- Utilice un token propio por cada herramienta, para poder revocarlo de forma específica en caso de sospecha de uso indebido, sin interrumpir otras integraciones.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen diariamente.*
