---
sidebar_position: 5
---

L'assistant IA Klacksy apprend de l'utilisation quotidienne quelles compétences (skills) vont ensemble — et sélectionne ainsi la prochaine fois les skills adaptés de manière plus ciblée.

## Comment ça fonctionne

Klacksy observe en arrière-plan quels skills sont fréquemment utilisés ensemble ou l'un après l'autre au cours d'une session, et en déduit des **relations**. Le processus d'apprentissage s'exécute automatiquement toutes les 6 heures. La page Relations entre skills affiche toutes les relations détectées ; les administrateurs décident si elles sont adoptées ou rejetées.

**Types de relation**
- *Séquentielle :* le skill A est régulièrement utilisé avant le skill B.
- *Nécessaire conjointement :* les deux skills apparaissent souvent dans la même session, sans ordre fixe.

**Source**
- *Apprise :* calculée à partir de données d'utilisation réelles — haute fiabilité.
- *Déduite :* déduite logiquement de la structure des skills, pas encore confirmée par des données d'utilisation.

**Statut**
- *Candidate :* nouvellement détectée, en attente de votre décision.
- *Active :* adoptée — influence activement Klacksy.
- *Écartée :* rejetée — est ignorée.

La **confiance** (0–100 %) indique à quel point Klacksy est sûr d'une relation. Elle augmente à chaque session qui confirme le schéma (**confirmations**), et diminue lors des sessions qui le contredisent (**contradictions**).

## Bon à savoir

- Adoptez une relation lorsqu'elle est pertinente sur le fond — les deux skills vont effectivement ensemble et le schéma correspond au flux de travail souhaité.
- Rejetez les relations apparues par hasard ou qui ne vont pas ensemble dans votre contexte (par ex. à cause de sessions de test).
- Règle empirique : seules les relations *apprises* avec une confiance élevée valent typiquement la peine d'être adoptées. Il vaut mieux rejeter les candidates déduites avec peu de soutien, jusqu'à ce que davantage de données d'utilisation soient disponibles.

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
