---
sidebar_position: 3
---

La gestion des adresses et des personnes est le cœur de vos données de base : collaborateurs, clientes et clients ainsi que personnes externes, avec leurs adresses, coordonnées, contrats, appartenance à des groupes et qualifications — accessible via l'icône « Personnes » dans la navigation.

## Comment ça marche

**Créer des collaborateurs :** les champs obligatoires sont le prénom, le nom et le sexe (femme/homme/intersexe/personne morale). Vous pouvez saisir en option la date de naissance, l'e-mail, le téléphone, l'adresse (rue, code postal, localité, canton, pays) ainsi que le groupe/département. Vous pouvez aussi laisser Klacksy, l'assistant, s'occuper de la création (« crée un collaborateur… »).

**Statut :** le statut résulte automatiquement des dates d'entrée et de sortie de l'affiliation — il n'existe pas de champ de statut à saisir manuellement. On distingue les *Actifs* (affiliation en cours), les *Anciens* (date de sortie dans le passé) et les *Futurs* (date d'entrée pas encore atteinte).

**Groupes et départements :** les collaborateurs peuvent être rattachés à des groupes. La structure est hiérarchique (par ex. `Klacks AG > IT > Développement`), l'affectation multiple est possible, et les droits peuvent être gérés au niveau du groupe.

**Contrats :** chaque personne peut avoir plusieurs contrats, par exemple lors d'un changement de taux d'occupation. Les modèles de contrat eux-mêmes sont entièrement personnalisables : sous Paramètres > Contrats, vous créez vos propres contrats avec un nom, un taux d'occupation, des heures cibles/maximales/minimales, des majorations (nuit, dimanche et jours fériés) et un intervalle de paiement ; chaque contrat peut en outre se voir attribuer son propre calendrier de jours fériés, ce qui permet par exemple de refléter des jours fériés différents selon le canton. Chaque contrat est valable pour une durée déterminée ou indéterminée.

**Import :** il n'existe pas d'import CSV pour les données de base. Les répertoires existants sont repris automatiquement via une synchronisation LDAP/Active Directory par le biais d'un fournisseur d'identité (Identity Provider) ; les personnes individuelles sont créées manuellement ou via Klacksy.

**Recherche et filtrage :** la recherche en texte libre trouve les personnes par nom, prénom, entreprise ou numéro de personnel, ainsi que par numéro de téléphone/code postal ; vous pouvez en outre filtrer par canton, statut (Actifs/Anciens/Futurs) et groupe.

## Bon à savoir

- Seuls les *Actifs* sont planifiables — vérifiez la date d'entrée/de sortie de l'affiliation si quelqu'un n'apparaît pas dans le plan de service.
- Il est normal qu'une personne ait plusieurs contrats, par exemple lors d'un changement de taux d'occupation — il n'est pas nécessaire de créer une deuxième personne pour cela. Vous créez vous-même les nouveaux modèles de contrat (taux d'occupation, majorations, calendrier) sous Paramètres > Contrats.
- Créez d'abord la structure des groupes, puis affectez-y les personnes — ainsi, les droits au niveau du groupe s'appliquent dès le départ.

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
