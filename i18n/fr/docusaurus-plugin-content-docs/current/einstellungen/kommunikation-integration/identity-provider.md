---
sidebar_position: 4
---

Dans Paramètres > Fournisseur d'identité, vous connectez Klacks à un service d'annuaire externe — LDAP/Active Directory ou OAuth2/OpenID Connect — pour importer automatiquement des collaborateurs et/ou gérer la connexion via ce service.

## Comment ça marche

**LDAP/Active Directory :** vous renseignez l'hôte, le port (389/636), le SSL, le Base DN, le Bind DN, le mot de passe de bind et un filtre utilisateur. Un interrupteur « Utiliser pour l'import de clients » active l'import automatique : le nom, le prénom, le titre, l'entreprise et l'adresse sont repris depuis les attributs de l'annuaire — chez OpenLDAP et Active Directory, parfois sous des noms d'attributs différents (par ex. `uid` vs `sAMAccountName`, `street` vs `streetAddress`). Ces correspondances de champs sont fixées en dur dans le backend et ne sont pas modifiables via l'interface.

**OAuth2/OpenID Connect :** ID client, secret client, éventuellement ID de locataire (Azure), URL d'autorisation, de jeton et d'informations utilisateur ainsi que les scopes — pour la connexion via Google, Microsoft ou GitHub.

**Tester la connexion et synchroniser :** pour les fournisseurs LDAP/AD, « Tester la connexion » affiche le nombre d'utilisateurs trouvés, avec des exemples de noms d'utilisateur. Si l'import de clients est activé, « Synchroniser maintenant » déclenche une synchronisation manuelle ; le résultat (traités/nouveaux/mis à jour/désactivés) apparaît immédiatement après sous forme de message sur la page.

## Bon à savoir

- Cette page est accessible **uniquement aux administratrices et administrateurs**, pas au rôle de superviseur.
- Le mot de passe de bind et le secret client sont stockés chiffrés et affichés masqués (`***`) dans l'interface ; lors d'un enregistrement sans modification, la valeur existante est conservée.
- Un journal de synchronisation permanent (historique, historique des erreurs) n'est **pas** actuellement affiché dans l'interface — seul le résultat du dernier lancement manuel est visible.
- Les personnes qui ne sont plus trouvées dans l'annuaire ne sont pas supprimées lors de la synchronisation, mais désactivées via la date de sortie de leur adhésion ; si elles réapparaissent plus tard, elles sont automatiquement réactivées.
- Un identifiant externe issu de l'annuaire (ObjectGUID LDAP ou, à défaut, le Distinguished Name) permet d'éviter les doublons : si le même identifiant est retrouvé lors d'une nouvelle synchronisation, la personne existante est mise à jour plutôt que recréée.

---
*Essayez directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
