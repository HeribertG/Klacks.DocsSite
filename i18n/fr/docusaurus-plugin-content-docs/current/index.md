---
sidebar_position: 1
slug: /
---

# Bienvenue dans la documentation Klacks

**Klacks** est la plateforme open source pour la planification du personnel dans les entreprises fonctionnant par équipes et interventions : planifiez automatiquement les services, optimisez les tournées, pilotez le tout via un assistant IA — en local (on-premise), avec le modèle d'IA de votre choix. Pour les services de soins à domicile, les hôpitaux, les entreprises de sécurité, de nettoyage et de logistique.

Ce wiki explique le fonctionnement de Klacks par petites étapes. Chaque page se lit en quelques minutes — et tout peut être testé immédiatement dans le playground public.

## Démarrer immédiatement

| | |
|---|---|
| 🎮 **Essayer** | [Playground Klacks](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1` (instance de test publique, les données sont réinitialisées quotidiennement) |
| 📦 **Installer** | [Télécharger le paquet On-Premise](https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip) — une seule commande, et Klacks fonctionne |
| 💬 **Questions et échanges** | [Communauté Klacks sur Discord](https://discord.gg/YRP8p2abVC) |
| 🌐 **Site web** | [klacks-software.ch](https://klacks-software.ch) |

## Les petites étapes

**À propos de Klacks**
- [La philosophie derrière Klacks](./ueber-klacks/philosophie.md) — souveraineté des données, liberté de choix de l'IA, open source

**Premiers pas**
- [Installation et playground](./erste-schritte/installation-und-playground.md) — un Klacks opérationnel en quelques minutes
- [La visite guidée de configuration](./erste-schritte/gefuehrte-einrichtungs-tour.md) — Klacksy vous guide à travers les réglages de base
- [Collaborateurs et données de base](./erste-schritte/mitarbeiter-und-stammdaten.md) — Le fondement de toute planification
- [Rôles et droits](./erste-schritte/rollen-und-rechte.md) — Superviseur et administrateur, clairement distingués

**Planifier**
- [Planification automatique : le plan en quelques secondes](./planen/auto-planung.md) — Le plan en quelques secondes, en un clic
- [La grille de planification : votre matrice temporelle interactive](./planen/plan-raster.md) — La matrice temporelle interactive avec glisser-déposer
- [Planification modulaire : diviser pour mieux régner](./planen/modulare-planung.md) — Répartir de grands plans sans doubles réservations
- [Workflow de validation : du brouillon au plan contraignant](./planen/freigabe-workflow.md) — Du brouillon au plan scellé
- [Règles de planification](./planen/planungsregeln.md) — Temps de repos, limites et jours ouvrés
- [Clôture de période](./planen/periodenabschluss.md) — Clôturer les mois de manière définitive

**Optimiser et analyser**
- [Optimisation des tournées et itinéraires](./optimieren/touren-und-routenoptimierung.md) — Le meilleur itinéraire, automatiquement
- [Absences en un coup d'œil](./optimieren/absenzen-im-blick.md) — Vacances et maladies dans une vue Gantt
- [Moniteur de ressources](./optimieren/ressourcen-monitor.md) — La charge de travail en un coup d'œil
- [Jours fériés et calendriers](./optimieren/feiertage-und-kalender.md) — Précis jusqu'à la commune
- [Relations entre compétences](./optimieren/skill-beziehungen.md) — Klacksy apprend lui-même quelles compétences vont ensemble
- [Générateur de rapports](./optimieren/report-designer.md) — Créez vos propres rapports

**L'assistant IA**
- [Klacksy : votre assistant IA pour la planification](./ki/klacksy-ki-assistent.md) — Planification vocale, avec choix libre du modèle

**Paramètres**

*Données de base et organisation*
- [Filiales](./einstellungen/stammdaten-organisation/branches.md), [Pays](./einstellungen/stammdaten-organisation/laender.md), [Adresse de l'exploitant](./einstellungen/stammdaten-organisation/owner-address.md), [Paramètres de base du travail](./einstellungen/stammdaten-organisation/work-setting.md), [Catalogue de qualifications](./einstellungen/stammdaten-organisation/qualifikationen.md), [Modèles de contrat](./einstellungen/stammdaten-organisation/vertragsvorlagen.md)

*Planification et automatisation*
- [Valeurs par défaut des règles de planification](./einstellungen/planung-automatisierung/planungsregeln-standardwerte.md), [Sélection de calendrier](./einstellungen/planung-automatisierung/kalenderauswahl.md), [Paramètres de l'assistant de planification](./einstellungen/planung-automatisierung/wizard-einstellungen.md), [API d'optimisation des itinéraires](./einstellungen/planung-automatisierung/routenoptimierung-api.md), [Visibilité des groupes](./einstellungen/planung-automatisierung/gruppen-sichtbarkeit.md)

*Configuration de Klacksy*
- [Fournisseurs LLM et modèles](./einstellungen/klacksy-konfiguration/llm-provider-und-modelle.md), [Personnalité](./einstellungen/klacksy-konfiguration/persoenlichkeit.md), [Entrée/sortie vocale](./einstellungen/klacksy-konfiguration/sprachein-ausgabe.md), [Niveaux d'autonomie](./einstellungen/klacksy-konfiguration/autonomie-stufen.md), [Test de connexion au modèle](./einstellungen/klacksy-konfiguration/modell-verbindungstest.md), [Suggestions de compétences](./einstellungen/klacksy-konfiguration/skill-vorschlaege.md), [Macros](./einstellungen/klacksy-konfiguration/makros.md)

*Communication et intégration*
- [Envoi d'e-mails](./einstellungen/kommunikation-integration/email-versand.md), [Réception d'e-mails](./einstellungen/kommunikation-integration/email-empfang.md), [Traduction DeepL](./einstellungen/kommunikation-integration/deepl-uebersetzung.md), [Fournisseur d'identité](./einstellungen/kommunikation-integration/identity-provider.md), [Points de reprise ERP](./einstellungen/kommunikation-integration/erp-uebernahmepunkte.md), [Canaux de messagerie](./einstellungen/kommunikation-integration/messaging-kanaele.md)

*Système et sécurité*
- [Gestion des utilisateurs](./einstellungen/system-sicherheit/benutzerverwaltung.md), [Jetons d'accès personnels](./einstellungen/system-sicherheit/personal-access-tokens.md), [Conservation des données](./einstellungen/system-sicherheit/datenaufbewahrung.md), [Mises à jour](./einstellungen/system-sicherheit/updates.md), [Extensions fonctionnelles](./einstellungen/system-sicherheit/feature-plugins.md), [Extensions linguistiques](./einstellungen/system-sicherheit/sprach-plugins.md), [Règles anti-spam](./einstellungen/system-sicherheit/spam-regeln.md), [Paramètres généraux](./einstellungen/system-sicherheit/allgemeine-einstellungen.md)

---
*Klacks est open source sous licence MIT — [code source sur GitHub](https://github.com/HeribertG/Klacks.Api).*
