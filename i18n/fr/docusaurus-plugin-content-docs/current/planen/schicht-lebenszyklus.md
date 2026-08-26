---
sidebar_position: 8
---

# Le cycle de vie d'un service : de la commande au segment

Avant même de pouvoir être pourvu, un service traverse quatre étapes — de la commande librement modifiable à la commande scellée immuable, puis au service planifiable et à ses segments. L'idée : ce qui a été convenu reste consultable durablement, tandis que ce que le quotidien replanifie ensuite reste mobile.

## Comment ça marche

**1. Commande — librement modifiable.** Tout nouveau service commence ici. Sur la page des services, le bouton **+ Nouvelle commande** ouvre le masque de saisie ; vous retravaillez la commande autant de fois que vous le voulez, tous les champs sont ouverts. Elle n'apparaît pas encore dans le plan d'engagement — et il n'est donc pas non plus possible d'y planifier des collaborateurs. Ce n'est pourtant pas une simple ébauche : c'est une véritable commande, simplement pas encore scellée. Dans la liste des services, Klacks range cette étape sous **Commandes**. Si vous basculez sur **Services planifiables**, le bouton s'appelle **+ Nouveau service** : il crée une commande sans référence client — pour du travail général que personne ne commande ni ne paie de l'extérieur. La carte *Adresse* disparaît alors ; ce service traverse lui aussi les quatre étapes.

**2. Commande scellée — immuable.** Une fois la commande arrêtée, vous la scellez à l'aide du bouton cadenas dans la carte *Général*. À partir de cet instant, elle est verrouillée et subsiste durablement comme reflet contraignant de ce qui a été convenu — même longtemps après que l'exploitation courante a replanifié le service. Après l'enregistrement, l'opération est **irréversible**. Les commandes ayant déjà atteint cette étape s'affichent grâce à la case **Afficher uniquement les commandes scellées** dans la liste des services.

**3. Service planifiable — c'est ici que l'on planifie.** Le scellement crée d'un seul geste, et une seule et unique fois, le service planifiable : une copie reliée à la commande. Seul ce service apparaît dans [La grille de plan : votre matrice temporelle interactive](../planen/plan-raster.md), lui seul permet d'y affecter des collaborateurs — et il reste modifiable. Un enregistrement ultérieur ne crée pas de deuxième copie. Dans la liste des services, vous le trouvez sous **Services planifiables**.

**4. Segments — le service découpé.** Un service planifiable peut être découpé, par exemple par journées ou par plages horaires. Le service existant devient lui-même l'un des segments, les autres apparaissent à côté. Tous les segments sont à leur tour planifiables et portent alors l'affectation effective. La commande scellée n'en est pas affectée — elle reste le contrat en arrière-plan.

**Quand le bouton cadenas devient actif :** il reste grisé tant que la commande n'est pas suffisamment complète pour la planification — abréviation, nom et date de début renseignés, au moins un jour de la semaine et au moins un groupe sélectionnés, le nombre de tâches ainsi que le nombre d'employés par équipe supérieurs à zéro. Son infobulle le dit sans ambiguïté : « Après verrouillage, la commande est immutable et prête pour la planification. »

**La seule exception à l'immuabilité :** si une commande scellée n'a pas de date de fin — parce qu'elle se prolonge en continu ou que son terme n'est pas encore connu —, vous pouvez renseigner ce seul champ après coup. À condition qu'aucun service ne soit déjà planifié à partir de la date choisie. Ensuite, ce champ est verrouillé comme tous les autres.

**Un exemple :** le 1er mai, vous saisissez la commande « Mariage Müller » et l'affinez pendant deux jours. Le 3 mai, le client confirme — vous scellez. Klacks fige la commande et crée à côté le service planifiable. Le 4 mai, la planification y inscrit deux collaborateurs ; le 5 mai, le service est découpé en deux segments. Le 1er juin, la période est clôturée et les entrées portées sur les segments sont verrouillées. Dans tout cela, la commande scellée du 3 mai n'a jamais été modifiée.

**Les cartes du masque de saisie.** Le masque se compose de cartes que vous dépliez et repliez individuellement ; l'enregistrement et l'annulation passent par la barre d'enregistrement au bas de l'espace de travail. Une partie des cartes n'apparaît qu'après avoir activé l'interrupteur **Mode expert** dans la carte *Général* :

- **Général** — abréviation (6 caractères au maximum ; Klacks la propose automatiquement pendant la saisie du nom), nom, date de début et date de fin ainsi que des notes. C'est ici que se trouvent également le bouton cadenas et l'interrupteur du mode expert.
- **Groupe** — rattache le service à un ou plusieurs groupes. Au moins un groupe est obligatoire ; tant qu'aucun n'est sélectionné, un encadré d'information le rappelle.
- **Qualifications requises** — les [qualifications](../einstellungen/stammdaten-organisation/qualifikationen.md) exigées par le service, chacune avec un niveau minimal (de Faible à Expert) et l'indication de son caractère obligatoire.
- **Heures et jours de la semaine** — heure de début, heure de fin et durée, ainsi que les jours de la semaine concernés, plus deux règles pour les jours fériés. En mode expert, vous pouvez à la place gérer le service comme une plage horaire : il se situe alors librement dans la fenêtre entre l'heure de début et l'heure de fin, et c'est la durée saisie qui compte.
- **Macro** (mode expert) — relie le service à une [macro](../einstellungen/klacksy-konfiguration/makros.md) pour le calcul de la durée et du salaire.
- **Adresse** — le client, autrement dit le lieu d'intervention, recherché par nom ou par numéro d'identification. La colonne de filtres à droite restreint précisément cette recherche.
- **Caractéristiques spéciales** (mode expert) — utilisation sporadique avec sa périodicité, briefing et débriefing, temps de trajet aller et retour, ainsi que le nombre d'employés et de tâches par équipe.
- **Frais par défaut** (mode expert) — les frais qui reviennent régulièrement sur ce service, chacun avec sa désignation, son montant et l'indication de son caractère imposable.

La manière dont les services planifiables sont ensuite pourvus est décrite dans [Planification automatique : le plan en quelques secondes](../planen/auto-planung.md) et [La grille de plan : votre matrice temporelle interactive](../planen/plan-raster.md).

## Bon à savoir

- **Sceller n'a pas ici le même sens que dans le workflow de validation.** Sceller une commande fige la *description* du service — ce qui est à faire, durablement. Le [Workflow de validation : de l'ébauche au plan définitif](../planen/freigabe-workflow.md) et la [clôture de période](../planen/periodenabschluss.md) verrouillent en revanche les *entrées sur des journées concrètes*. Les deux fonctionnent indépendamment l'un de l'autre.
- **Les commandes naissent aussi automatiquement.** Outre le masque de saisie, l'[import ERP](../einstellungen/kommunikation-integration/erp-uebernahmepunkte.md) constitue la deuxième voie : les commandes qui en proviennent arrivent elles aussi d'abord comme commandes non scellées et doivent être vérifiées puis scellées.
- **Une commande oubliée se rappelle à vous.** Si une commande reste non scellée peu avant son début, [Klacksy, membre proactif de l'équipe](../ki/klacksy-proaktiv.md) le signale avec le type de constat « Commande ouverte » — car non scellée signifie : non planifiable.
- **Les services conteneurs fonctionnent un peu différemment.** Un conteneur est une enveloppe qui regroupe plusieurs services partiels ; il n'a donc ni client ni adresse, et les cartes *Adresse* et *Frais par défaut* disparaissent. La carte *Caractéristiques spéciales* n'affiche pour lui que l'option d'utilisation sporadique. La case « Est un conteneur » se trouve en mode expert dans la carte *Général*, et elle ne peut être cochée que tant que la commande n'est pas scellée.
- **Les services sporadiques et les services à plage horaire ne sont pas comptabilisés.** Ni les uns ni les autres n'apparaissent délibérément dans la barre des services du [moniteur de ressources](../optimieren/ressourcen-monitor.md), car ils ne représentent pas un besoin quotidien fixe.

---
*À tester directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
