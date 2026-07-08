---
sidebar_position: 1
---

Dans Paramètres > Paramètres e-mail, vous configurez le serveur SMTP par lequel Klacks envoie les e-mails sortants — notamment les notifications, les e-mails de réinitialisation de mot de passe ou les messages envoyés par Klacksy.

## Comment ça marche

**Données de connexion :** vous renseignez le serveur, le port, le délai d'expiration, le mode SSL/TLS, le type d'authentification (Aucune, LOGIN, NTLM, GSSAPI, WDIGEST) ainsi que le nom d'utilisateur et le mot de passe. Vous pouvez également configurer l'accusé de lecture/notification de remise et une adresse de réponse. Le mode SSL/TLS est en outre déduit du port : le port 465 utilise le SSL direct, le port 587 (ou le SSL activé) utilise StartTLS.

**Enregistrement :** Il n'y a pas de bouton d'enregistrement explicite — chaque champ est enregistré automatiquement après un court délai dès qu'il est modifié.

**Tester la connexion :** Le bouton « Envoyer un e-mail de test » établit une véritable connexion SMTP, s'authentifie et envoie un e-mail de test réel à l'adresse de l'utilisateur enregistrée. Il ne s'agit pas d'un simple test de connexion mais d'un envoi effectif — utile pour vérifier immédiatement les identifiants. Pour les fournisseurs connus (Outlook, Gmail, Yahoo, GMX, etc.), Klacks exige impérativement un type d'authentification différent de « Aucune ».

## Bon à savoir

- Ce paramètre est global pour toute l'installation — il n'existe pas de compte SMTP séparé par utilisateur.
- Seule une personne disposant des droits d'administrateur peut configurer cette page.
- Le mot de passe est stocké chiffré et peut être affiché/masqué dans le formulaire via une icône en forme d'œil ; il n'est jamais affiché en clair.
- Si le test de connexion échoue, Klacks indique la raison précise (par ex. erreur d'authentification, échec de la négociation SSL, dépassement du délai) plutôt qu'un message d'erreur générique.

---
*Essayez directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
