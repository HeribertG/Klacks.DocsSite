---
sidebar_position: 1
slug: /
---

# Bienvenido a la documentación de Klacks

**Klacks** es la plataforma de código abierto para la planificación de personal en empresas con turnos y servicios: planificar turnos automáticamente, optimizar rutas, controlar mediante un asistente de IA — On-Premise, con el modelo de IA de su elección. Para servicios de atención domiciliaria (Spitex), hospitales, empresas de seguridad, limpieza y logística.

Este wiki explica en pequeñas píldoras cómo funciona Klacks. Cada página se lee en pocos minutos — y todo se puede probar de inmediato en el Playground público.

## Empezar de inmediato

| | |
|---|---|
| 🎮 **Probar** | [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1` (instancia de prueba pública, los datos se restablecen diariamente) |
| 📦 **Instalar** | [Descargar el paquete On-Premise](https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip) — un comando, y Klacks funciona |
| 💬 **Preguntas e intercambio** | [Comunidad de Klacks en Discord](https://discord.gg/YRP8p2abVC) |
| 🌐 **Sitio web** | [klacks-software.ch](https://klacks-software.ch) |

## Las píldoras

**Sobre Klacks**
- [La filosofía detrás de Klacks](./ueber-klacks/philosophie.md) — soberanía de datos, libertad de elección de IA, código abierto

**Primeros pasos**
- [Instalación y Playground](./erste-schritte/installation-und-playground.md) — En pocos minutos, un Klacks en funcionamiento
- [El tour guiado de configuración](./erste-schritte/gefuehrte-einrichtungs-tour.md) — Klacksy le guía por los ajustes básicos
- [Empleados y datos maestros](./erste-schritte/mitarbeiter-und-stammdaten.md) — El fundamento de toda planificación
- [Roles y permisos](./erste-schritte/rollen-und-rechte.md) — Supervisor y Admin, claramente diferenciados

**Planificar**
- [Planificación automática: el plan en segundos](./planen/auto-planung.md) — El plan en segundos, con un clic
- [La cuadrícula del plan: su matriz de tiempo interactiva](./planen/plan-raster.md) — La matriz de tiempo interactiva con arrastrar y soltar
- [Planificación modular: divide y vencerás](./planen/modulare-planung.md) — Dividir planes grandes sin dobles reservas
- [Flujo de aprobación: del borrador al plan vinculante](./planen/freigabe-workflow.md) — Del borrador al plan sellado
- [Reglas de planificación](./planen/planungsregeln.md) — Tiempos de descanso, límites y días laborables
- [Cierre de periodo](./planen/periodenabschluss.md) — Cerrar meses de forma vinculante

**Optimizar y evaluar**
- [Optimización de rutas](./optimieren/touren-und-routenoptimierung.md) — La mejor ruta, automáticamente
- [Control de ausencias](./optimieren/absenzen-im-blick.md) — Vacaciones y enfermedad como resumen Gantt
- [Monitor de recursos](./optimieren/ressourcen-monitor.md) — Ocupación de un vistazo
- [Días festivos y calendario](./optimieren/feiertage-und-kalender.md) — Con precisión hasta el municipio
- [Relaciones entre habilidades](./optimieren/skill-beziehungen.md) — Klacksy aprende por sí mismo qué habilidades suyas están relacionadas
- [Diseñador de informes](./optimieren/report-designer.md) — Crear informes propios

**El asistente de IA**
- [Klacksy: su asistente de IA para la planificación](./ki/klacksy-ki-assistent.md) — Planificación por voz, con libre elección de modelo

**Configuración**

*Datos maestros y organización*
- [Sucursales](./einstellungen/stammdaten-organisation/branches.md), [Países](./einstellungen/stammdaten-organisation/laender.md), [Dirección del operador](./einstellungen/stammdaten-organisation/owner-address.md), [Ajustes básicos de trabajo](./einstellungen/stammdaten-organisation/work-setting.md), [Catálogo de calificaciones](./einstellungen/stammdaten-organisation/qualifikationen.md), [Plantillas de contrato](./einstellungen/stammdaten-organisation/vertragsvorlagen.md)

*Planificación y automatización*
- [Valores predeterminados de las reglas de planificación](./einstellungen/planung-automatisierung/planungsregeln-standardwerte.md), [Selección de calendario](./einstellungen/planung-automatisierung/kalenderauswahl.md), [Ajustes del asistente](./einstellungen/planung-automatisierung/wizard-einstellungen.md), [API de optimización de rutas](./einstellungen/planung-automatisierung/routenoptimierung-api.md), [Visibilidad de grupos](./einstellungen/planung-automatisierung/gruppen-sichtbarkeit.md)

*Configuración de Klacksy*
- [Proveedor de LLM y modelos](./einstellungen/klacksy-konfiguration/llm-provider-und-modelle.md), [Personalidad](./einstellungen/klacksy-konfiguration/persoenlichkeit.md), [Entrada/salida de voz](./einstellungen/klacksy-konfiguration/sprachein-ausgabe.md), [Niveles de autonomía](./einstellungen/klacksy-konfiguration/autonomie-stufen.md), [Prueba de conexión del modelo](./einstellungen/klacksy-konfiguration/modell-verbindungstest.md), [Sugerencias de habilidades](./einstellungen/klacksy-konfiguration/skill-vorschlaege.md), [Macros](./einstellungen/klacksy-konfiguration/makros.md)

*Comunicación e integración*
- [Envío de correo electrónico](./einstellungen/kommunikation-integration/email-versand.md), [Recepción de correo electrónico](./einstellungen/kommunikation-integration/email-empfang.md), [Traducción DeepL](./einstellungen/kommunikation-integration/deepl-uebersetzung.md), [Proveedor de identidad](./einstellungen/kommunikation-integration/identity-provider.md), [Puntos de traspaso ERP](./einstellungen/kommunikation-integration/erp-uebernahmepunkte.md), [Canales de mensajería](./einstellungen/kommunikation-integration/messaging-kanaele.md)

*Sistema y seguridad*
- [Administración de usuarios](./einstellungen/system-sicherheit/benutzerverwaltung.md), [Tokens de acceso personal](./einstellungen/system-sicherheit/personal-access-tokens.md), [Retención de datos](./einstellungen/system-sicherheit/datenaufbewahrung.md), [Actualizaciones](./einstellungen/system-sicherheit/updates.md), [Plugins de funciones](./einstellungen/system-sicherheit/feature-plugins.md), [Plugins de idioma](./einstellungen/system-sicherheit/sprach-plugins.md), [Reglas de spam](./einstellungen/system-sicherheit/spam-regeln.md), [Ajustes generales](./einstellungen/system-sicherheit/allgemeine-einstellungen.md)

---
*Klacks es código abierto bajo licencia MIT — [código fuente en GitHub](https://github.com/HeribertG/Klacks.Api).*
