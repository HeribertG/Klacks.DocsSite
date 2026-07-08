---
sidebar_position: 3
---

Dans Paramètres > DeepL, vous enregistrez une clé API DeepL permettant à Klacks de traduire automatiquement des textes — actuellement surtout les e-mails entrants dans la boîte de réception.

## Comment ça marche

**Clé API :** Un seul champ de saisie accueille la clé API DeepL (format `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx` pour l'API gratuite Free, ou sans le suffixe `:fx` pour l'API payante Pro). Klacks détecte automatiquement, grâce au suffixe `:fx`, laquelle des deux adresses API DeepL utiliser — pas besoin de basculer manuellement entre Free et Pro. Vous obtenez un compte et la clé elle-même sur deepl.com/pro-api.

**Utilisation :** Dans la « Boîte de réception », chaque e-mail peut être traduit dans la langue d'interface actuellement configurée grâce à une icône de traduction ; un bouton de bascule permet de comparer l'original et la traduction. Sans clé enregistrée, cette fonctionnalité n'est pas disponible.

## Bon à savoir

- Ce paramètre est global pour toute l'installation — il n'existe pas de clé par utilisateur.
- Il n'y a pas de bouton « Test » dédié sur cette page ; le fonctionnement de la clé se vérifie lors de la première tentative de traduction dans la boîte de réception.
- Si la clé est invalide ou expirée, Klacks le détecte grâce à la réponse de DeepL (erreur d'authentification) et le signale au lieu d'afficher une traduction vide ou erronée.
- La clé est stockée chiffrée et masquée dans le formulaire.

---
*Essayez directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
