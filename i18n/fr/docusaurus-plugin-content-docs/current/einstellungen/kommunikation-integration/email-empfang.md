---
sidebar_position: 2
---

Dans Paramètres > Paramètres IMAP, vous configurez une boîte aux lettres que Klacks interroge en continu en arrière-plan et affiche dans la section « Boîte de réception » — ce qui permet de suivre automatiquement la correspondance entrante en l'associant aux collaborateurs et clients concernés.

## Comment ça marche

**Données de connexion :** serveur, port (par défaut 993), chiffrement SSL, nom d'utilisateur, mot de passe, dossier à interroger (par défaut `INBOX`) ainsi que l'intervalle d'interrogation en secondes (par défaut 300).

**Ce qui se passe avec les e-mails récupérés :** Klacks interroge périodiquement la boîte aux lettres via IMAP, vérifie les nouveaux messages avec un filtre anti-spam (les spams sont déplacés dans le dossier indésirables aussi bien dans Klacks que sur la vraie boîte aux lettres) et associe automatiquement les messages restants au client ou au collaborateur correspondant, à condition que l'adresse de l'expéditeur figure dans les coordonnées enregistrées. On obtient ainsi, dans la « Boîte de réception », un historique de correspondance filtrable par personne. Les modifications comme « marquer comme lu », déplacer ou supprimer se répercutent également sur la vraie boîte aux lettres.

**Tester la connexion :** Le bouton « Tester la connexion IMAP » se connecte réellement au serveur, s'authentifie, ouvre le dossier configuré en lecture et affiche le nombre de messages trouvés. Si le dossier n'existe pas, cela est signalé explicitement.

## Bon à savoir

- Cette boîte aux lettres n'est **ni** un canal pour les déclarations d'absence, **ni** un élément de la reprise des commandes ERP (des points de reprise séparés existent à cet effet, voir la page dédiée) — elle alimente exclusivement la « Boîte de réception » générale.
- Ce paramètre est global pour toute l'installation — il n'existe pas de compte IMAP séparé par utilisateur.
- Si la clé de chiffrement de l'installation est réinitialisée, Klacks ne peut plus déchiffrer le mot de passe enregistré et met la récupération en pause jusqu'à ce que le mot de passe soit ressaisi.
- Les messages de la boîte de réception peuvent être traduits directement si DeepL est configuré (voir la page dédiée).

---
*Essayez directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
