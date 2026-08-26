---
sidebar_position: 8
---

# Klacksy, membre proactif de l'équipe

Klacksy n'attend pas qu'on lui demande. Une fois par heure, il examine l'exploitation en arrière-plan et signale ce qui lui saute aux yeux : services non pourvus, contrats arrivant à échéance, périodes en retard, données de base manquantes. Jusqu'où il peut aller, ce sont les administrateurs qui le définissent pour chaque type de constat séparément — en configuration d'usine, il se contente de signaler et n'agit jamais de lui-même.

À ne pas confondre avec les [Niveaux d'autonomie](../einstellungen/klacksy-konfiguration/autonomie-stufen.md) : là, il s'agit du niveau de validation dont Klacksy a besoin lorsque **vous** lui demandez quelque chose dans le chat. Ici, c'est l'inverse — il s'agit de ce qu'il fait **sans qu'on le lui demande**.

## Comment ça marche

**Ce qu'est un constat :** un constat est une observation que Klacksy a faite de lui-même — par exemple « ce service est encore non pourvu dans trois jours » ou « cette période de décompte est en retard depuis une semaine ». Pour cela, un passage en arrière-plan parcourt chaque heure une douzaine de règles de contrôle. La détection elle-même est codée en dur : aucun modèle de langage ne décide si quelque chose est un constat — la même règle donne le même résultat, indépendamment du fournisseur d'IA que vous utilisez.

**Quatorze types de constat sont pilotables,** notamment Service non pourvu, Lacune de disponibilité, Contrat arrivant à échéance, Données de base manquantes, Commande ouverte, Clôture de période imminente, Période en retard, Écart par rapport aux heures cibles, Conteneur vide, Conflit de verrouillage et Scénario en attente. Deux d'entre eux ne naissent pas du passage horaire, mais de l'import des commandes ERP.

**Les trois étapes — pour chaque type de constat :** sous Paramètres > Klacksy > « Marge d'action de Klacksy » (mode expert, administrateurs uniquement), chaque type de constat occupe sa propre ligne avec la colonne « Étape maximale » :

- **Signaler uniquement** — Klacksy vous informe, rien de plus. C'est la configuration d'usine pour chaque type de constat.
- **Préparer un scénario** — Klacksy dépose en plus une solution prête à l'emploi sous forme de scénario, qu'un être humain n'a plus qu'à accepter.
- **Exécuter** — Klacksy corrige le constat lui-même et en rend compte ensuite.

À partir de « Préparer un scénario », une personne responsable doit être désignée : l'action s'exécute sous ses droits et c'est elle qui reçoit le rapport. S'y ajoutent, par ligne, des budgets qui limitent la fréquence à laquelle Klacksy peut agir (par défaut au maximum 5 actions par jour et 3 en 60 minutes), ainsi qu'un interrupteur « Actif ». Celui-ci ne régit que l'action autonome — la manière dont un message vous parvient reste votre réglage de notification personnel.

**La limite dure inscrite dans le programme :** une étape supérieure ne produit d'effet que là où une correction automatique existe réellement pour ce type de constat. À défaut, on en reste au signalement — quel que soit le réglage, et même si quelqu'un délègue le constat à Klacksy au cas par cas. Cette limite est inscrite dans le code du programme et ne peut pas être levée depuis l'interface. Actuellement, une seule correction est prévue : pour le type « Conteneur vide », Klacksy peut créer lui-même le modèle de créneau manquant.

**Où arrivent les constats :** sur le bouton Klacksy dans l'en-tête, un compteur affiche les notes non lues. Un clic ouvre le panneau latéral, où les constats sont regroupés sous le titre « Pendant ton absence… ». Chaque message propose « Montre-moi » (saute à l'endroit concerné), « Utile » et « Masquer » — ce dernier avec un motif au choix (« Je ne veux jamais ce genre d'indication », « Cette fois, l'indication était fausse », « Déjà réglé ») ou sans. Là où c'est autorisé, s'ajoute « Fais-le » : une autorisation ponctuelle qui fait passer ce seul constat à « Préparer un scénario ». Vous pouvez aussi demander directement à Klacksy dans le chat quels constats sont actuellement ouverts.

**Lorsqu'un constat est résolu :** la ligne concernée porte, dans la vue Conteneurs de la liste des services, la mention « Résolu par Klacksy le … » — aussi bien lorsque Klacksy a effectué la correction lui-même que lorsqu'un être humain a validé un scénario préparé par Klacksy. Si Klacksy exécute lui-même, un rapport part en plus vers la personne responsable.

**L'arrêt d'urgence :** au-dessus du chat, les administrateurs voient l'interrupteur « Klacksy agit de façon autonome : ACTIVÉ/DÉSACTIVÉ ». Le désactiver ramène immédiatement chaque type de constat à « signaler uniquement » — y compris les autorisations ponctuelles déjà accordées. Les indications, elles, ne s'arrêtent pas : l'arrêt d'urgence stoppe l'action, pas le signalement. Le même interrupteur figure également dans la carte de paramètres.

## Bon à savoir

- En configuration d'usine, chaque type de constat est sur « Signaler uniquement » — Klacksy n'agit que lorsqu'un administrateur relève délibérément une étape. L'arrêt d'urgence n'est pas nécessaire pour cela : il n'est pas activé par défaut et reste en réserve comme frein immédiat.
- Les messages ne vont qu'aux administrateurs et aux planificateurs autorisés. Qui ne peut voir que certains groupes ne reçoit que les constats de ces groupes ; les administrateurs voient tout. Les planificateurs reçoivent les constats, mais ne voient pas le réglage des étapes.
- L'étape « Préparer un scénario » ne s'applique qu'aux corrections qui peuvent prendre la forme d'un scénario. La correction actuellement prévue n'en fait pas partie — pour elle, seul « Exécuter » produit un effet.
- La carte de paramètres et l'interrupteur d'autonomie exigent des droits d'administrateur ; sans eux, l'état d'autonomie n'est pas consultable.
- Le rythme horaire est figé et ne se règle pas depuis l'interface ; le premier passage démarre deux minutes après le lancement du programme.

---
*Essayez-le directement : [Playground Klacks](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées quotidiennement.*
