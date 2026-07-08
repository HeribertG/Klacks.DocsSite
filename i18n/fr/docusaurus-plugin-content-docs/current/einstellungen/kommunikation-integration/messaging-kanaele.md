---
sidebar_position: 6
---

Dans Paramètres > Fournisseurs de messagerie, vous connectez des canaux de chat et de SMS externes permettant à Klacks (et à Klacksy) de contacter directement les collaborateurs et les clients — à la place ou en complément de l'e-mail.

## Comment ça marche

**Principe commun :** tous les canaux sont configurés via la même liste : nom interne, nom d'affichage, type de fournisseur et les données d'accès propres à chaque canal (jeton, ID de compte, certificat, etc.), ainsi qu'un interrupteur marche/arrêt et un bouton de test par entrée pour vérifier immédiatement la connexion. Le destinataire d'un message est déterminé à partir de l'identifiant spécifique au canal (numéro de téléphone, nom d'utilisateur, ID utilisateur, etc.) enregistré chez le collaborateur ou le client sous Adresse > Coordonnées — vous n'avez pas besoin de saisir vous-même d'ID bruts.

**À quoi sert la messagerie dans Klacks :** comme canal de notification supplémentaire à côté de l'e-mail, par exemple pour les messages issus du planning ou les messages de Klacksy — selon les canaux activés et enregistrés pour chaque personne.

**Les 11 canaux en un coup d'œil :**

| Canal | Envoi/Réception | Particularité |
|---|---|---|
| Slack | Envoi + Réception | Le bot doit en plus être invité explicitement dans chaque canal via `/invite`. |
| Telegram | Envoi + Réception | Le destinataire doit avoir lui-même activé le bot au préalable via `/start`. |
| Signal | Envoi uniquement | Nécessite un pont signal-cli auto-hébergé (Docker) avec son propre numéro de téléphone couplé par QR code — pas d'API cloud officielle. |
| Microsoft Teams | Envoi uniquement | Un webhook Power Automate par canal ; pas de messages en tête-à-tête, plusieurs entrées sont nécessaires pour plusieurs canaux Teams. |
| SMS | Envoi uniquement | Numéro de téléphone au format E.164 ; pour les comptes d'essai (par ex. Twilio), uniquement vers des numéros préalablement vérifiés, le pays de destination doit être activé. |
| WeChat | Envoi uniquement | Vérification en tant que compte officiel exigeante hors de Chine ; n'atteint que les abonnés ayant interagi au cours des dernières 48 heures. |
| KakaoTalk | Envoi uniquement | Jeton d'accès valable seulement environ 6 heures et devant être renouvelé manuellement ; le destinataire doit être « ami » de l'application. |
| Line | Envoi + Réception | Quota d'envoi mensuel limité selon le plan ; l'ID du destinataire n'est connu qu'après réception d'un message entrant. |
| Threema | Envoi uniquement | Compte Threema Gateway payant (modèle de crédit) ; pas de réception, car le mode de bout en bout n'est pas utilisé. |
| Viber | Envoi + Réception | Le bot ne peut contacter que les personnes qui s'y sont préalablement abonnées ; le webhook nécessite une adresse HTTPS accessible publiquement. |
| Zalo | Envoi uniquement | Le jeton d'accès expire après environ 25 heures, l'envoi n'est possible que dans une fenêtre d'interaction. |

## Bon à savoir

- Pour chaque canal existe un manuel détaillé propre, avec instructions étape par étape pour la configuration chez le fournisseur concerné — accessible directement sur la page des paramètres de l'entrée du fournisseur en question.
- Plusieurs canaux peuvent être actifs en parallèle ; celui effectivement utilisé dépend des coordonnées enregistrées pour la personne concernée.
- Pour tous les canaux à jeton d'accès à durée limitée (par ex. KakaoTalk, Zalo), celui-ci doit être renouvelé chez le fournisseur en dehors de Klacks puis reporté dans Klacks, sinon l'envoi via ce canal s'interrompt.

---
*Essayez directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
