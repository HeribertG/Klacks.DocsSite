---
sidebar_position: 8
---

# Escalade et service de piquet

Quelqu'un fait défaut et le service commence dans quelques heures. Klacks ne réveille alors pas toute l'équipe au hasard : il déroule une liste d'appel enregistrée, une personne après l'autre, jusqu'à ce que quelqu'un prenne le relais.

## Comment ça fonctionne

- **La chaîne se déclenche lors de la couverture d'un défaut** : pour chaque jour concerné où la personne absente avait un service, Klacks crée sa propre escalade — rattachée précisément à ce service (voir [Absences en un coup d'œil](./absenzen-im-blick.md)).
- **La liste d'appel se règle une fois pour toutes** : sous Paramètres > Liste d'appel d'escalade figurent tous les utilisateurs disposant d'une visibilité de groupe et d'un numéro de téléphone enregistré. Vous en définissez l'ordre par glisser-déposer, il est enregistré immédiatement — un ordre unique pour toute l'entreprise.
- **Qui est réellement appelé se décide au moment critique** : Klacks retient dans votre ordre les personnes ayant une visibilité sur le groupe supérieur, saute toutes celles qui sont inscrites comme absentes, et place les administrateurs en fin de liste comme filet de sécurité.
- **La notification passe par plusieurs canaux** : la demande arrive toujours dans la boîte de réception Klacks, s'affiche immédiatement dans l'application pour les personnes connectées, et part en plus par la messagerie raccordée — car à 3 heures du matin, personne n'est assis devant un navigateur ouvert. Le raccordement de la messagerie et la progression automatique de la chaîne sont activés par installation.
- **Un mot suffit pour accepter** : la personne actuellement sollicitée répond brièvement dans la messagerie (« je prends ») ; les administrateurs peuvent à la place utiliser *Prendre en charge* sur la page *Escalades en cours*. Elle reçoit ensuite une confirmation, toutes celles sollicitées auparavant une note discrète — personne n'est réveillé une deuxième fois.

## Bon à savoir

- L'échéance n'est pas le début du service lui-même, mais un délai de préparation avant celui-ci (deux heures par défaut) — la personne qui reprend le service a ainsi encore le temps de se mettre en route.
- Le temps accordé à une étape est calculé par Klacks à partir de l'échéance restante : plus le service approche, plus les tours sont courts. Si le temps devient trop juste pour procéder l'un après l'autre, Klacks sollicite toutes les personnes restantes en même temps.
- Sur la page *Escalades en cours*, vous voyez l'état de chaque étape — en attente, sollicité, pris en charge, sans réponse, ignoré ou annulé. Lorsqu'une escalade est en cours, un symbole d'avertissement apparaît en plus dans l'en-tête.
- La liste d'appel et la vue d'ensemble sont réservées aux administrateurs (voir [Rôles et droits](../erste-schritte/rollen-und-rechte.md)). Les administrateurs peuvent annuler une escalade en cours — avec un motif, afin que l'on puisse comprendre plus tard pourquoi la chaîne a été arrêtée.
- Une personne sans numéro de téléphone dans son compte utilisateur n'apparaît pas du tout dans la liste d'appel. La demande via la messagerie nécessite en outre un contact de messagerie associé. Les absences du service de piquet se gèrent directement dans cette même liste : du–au, avec un motif facultatif, et de manière permanente si vous le souhaitez.

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
