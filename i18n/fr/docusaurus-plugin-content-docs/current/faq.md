---
sidebar_position: 9
---
# Questions fréquentes

Les questions les plus souvent posées avant la première mise en service — avec des réponses honnêtes, y compris lorsque la réponse est « pas encore ».

## Essayer et démarrer

**Dois-je installer Klacks pour le voir ?**
Non. Le [Playground](https://play.klacks-software.ch) est une instance publique avec des données de démonstration ; vous vous connectez avec `admin@test.com` / `P@ssw0rt1` et disposez de tous les droits d'administrateur. La base de données est réinitialisée chaque jour à 04:00, heure suisse — n'y saisissez aucune donnée personnelle réelle.

**Combien de temps dure une installation ?**
L'installateur tient en une seule commande. Il génère les mots de passe et le certificat, épingle la version actuelle, démarre la pile et attend que tout soit en bonne santé. La plus grande partie du temps est consacrée au téléchargement des images. Les prérequis figurent sous [Configuration requise](../betrieb/systemvoraussetzungen/).

**Pourquoi dois-je créer mon propre compte administrateur ?**
Parce que le compte fourni a un mot de passe connu publiquement. Klacks ne vous laisse vous connecter qu'une seule fois avec lui, puis exige votre propre compte ; ensuite, le compte par défaut est désactivé. C'est voulu, ce n'est pas un défaut.

## Exploitation

**Où se trouvent mes données ?**
Sur votre infrastructure. Klacks n'envoie pas vos données au fabricant. Si vous intégrez un modèle d'IA comme service externe, ce sont naturellement les conditions de **ce** service qui s'appliquent — le choix du modèle vous appartient.

**Ai-je absolument besoin d'un fournisseur cloud ?**
Non, c'est l'essence même de l'on-premise : la pile tourne sur votre serveur. Vous avez seulement besoin d'un accès **sortant** aux sources de paquets et de mises à jour (`ghcr.io`, `github.com`). Un fonctionnement entièrement sans accès à Internet n'existe **pas** actuellement — les installations dans des réseaux isolés sont une étape d'évolution pas encore réalisée.

**Comment sauvegarder mes données ?**
Vous-même — la sauvegarde relève de votre responsabilité. La marche à suivre et le volume à ne surtout pas oublier sont décrits sous [Sauvegarde et restauration](../betrieb/backup-und-wiederherstellung/).

**Que se passe-t-il si une mise à jour échoue ?**
Le service de mise à jour sauvegarde d'abord la base de données, bascule ensemble les nouvelles versions, puis vérifie l'état de santé. Si la nouvelle version n'est pas saine, il revient automatiquement en arrière. Détails sous [Mises à jour et rollback](../betrieb/updates-und-rollback/).

**Klacks fonctionne-t-il sur mon matériel existant ?**
À titre indicatif : **8 Go de RAM et 4 vCPU**. Pour les hôtes plus petits, il existe des réglages documentés qui libèrent de la mémoire — au prix d'une réponse un peu plus longue à la prochaine question posée à Klacksy.

**Klacks est-il compatible avec mon fournisseur d'identité ?**
Oui. Klacks peut être relié à un fournisseur d'identité existant au lieu de gérer ses propres comptes — voir [Fournisseur d'identité](../einstellungen/kommunikation-integration/identity-provider/).

## Fonctions

**À quels secteurs Klacks convient-il ?**
Il est conçu pour les entreprises fonctionnant par équipes et interventions : soins ambulatoires et Spitex, hôpitaux, services de sécurité, services de nettoyage et d'entretien, ainsi que logistique.

**Quelles langues l'interface parle-t-elle ?**
La documentation est disponible en 25 langues, dont l'allemand, l'anglais, le français, l'italien, l'espagnol, le polonais, le japonais, le chinois (simplifié et traditionnel), l'arabe et l'hébreu — l'arabe et l'hébreu également avec le sens de lecture de droite à gauche.

**Dois-je me décider pour un modèle d'IA ?**
Vous choisissez vous-même le fournisseur et le modèle, et vous pouvez en changer. La configuration et la vérification sont décrites sous [Fournisseurs LLM et modèles](../einstellungen/klacksy-konfiguration/llm-provider-und-modelle/) et [Test de connexion des modèles](../einstellungen/klacksy-konfiguration/modell-verbindungstest/).

**Combien coûte Klacks ?**
Le code source est publié sous la GNU Affero General Public License v3 (AGPL-3.0) — vous pouvez le lire, le modifier et l'exploiter vous-même. Si vous proposez une version modifiée à d'autres via un réseau, vous devez également mettre le code source modifié à la disposition de ces utilisateurs sous l'AGPL-3.0. Tout ce qui va au-delà (questions, échanges, développement ultérieur) passe par la [communauté Klacks sur Discord](https://discord.gg/YRP8p2abVC) et le [dépôt public du code source](https://github.com/HeribertG/Klacks.Api).

**Klacks est-il terminé ?**
Non, et il ne prétend pas l'être. Klacks est en construction, mais il est développé publiquement et réellement exploité — dans le Playground, vous pouvez à tout moment vérifier vous-même l'état actuel au lieu de croire une description.

## Contribuer

**J'ai trouvé une erreur ou j'ai une question.**
Le plus rapide est la [communauté sur Discord](https://discord.gg/YRP8p2abVC). Pour les erreurs du logiciel, un signalement doit être déposé dans le [dépôt](https://github.com/HeribertG/Klacks.Api). Toujours utiles : la version, la dernière étape avant l'erreur et les dernières lignes des journaux — voir [Dépannage](../betrieb/fehlerbehebung/).

**Puis-je contribuer moi-même ?**
Le code source est ouvert et la documentation se trouve dans la même maison. Les remarques sur les passages peu clairs sont aussi bienvenues que le code.

---

*Votre question manque ? [Communauté Klacks sur Discord](https://discord.gg/YRP8p2abVC).*
