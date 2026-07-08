---
sidebar_position: 4
---

Sous Paramètres > OpenRoute, vous renseignez la clé API du service externe openrouteservice.org, que Klacks utilise pour l'optimisation des tournées.

## Comment ça fonctionne

OpenRouteService calcule les temps de trajet et les distances — en voiture, à vélo et à pied — et fournit ainsi la base de l'optimisation des tournées dans Klacks. Vous saisissez votre clé API personnelle dans l'unique champ de cette page. Vous obtenez une clé gratuite via le lien d'inscription vers openrouteservice.org indiqué sur la page.

## Bon à savoir

- La clé est envoyée directement depuis le navigateur vers openrouteservice.org, et s'affiche donc volontairement **en clair** plutôt que masquée (`***`) — contrairement, par exemple, aux mots de passe e-mail. C'est voulu, afin que vous puissiez repérer une faute de frappe accidentelle ou une clé expirée ; il ne s'agit pas d'une erreur d'affichage.
- Dans la base de données, la clé est néanmoins stockée de façon chiffrée.
- Sans clé valide, l'optimisation des tournées ne fonctionne pas — les temps de trajet et les distances ne peuvent alors pas être calculés.
- Pour la simple conversion d'adresses en coordonnées (géocodage), Klacks utilise un autre service, distinct — cette clé est exclusivement destinée au calcul des itinéraires.

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées quotidiennement.*
