---
sidebar_position: 6
---

Avec le Report-Designer, vous créez vos propres modèles d'impression — du planning de service à la liste d'adresses — directement dans Klacks, sans outil externe.

## Comment ça fonctionne

Un rapport se compose de trois zones que vous modifiez dans l'onglet *Designer* :

- **En-tête** — imprimé en haut de chaque page. Il comporte trois zones (gauche, centre, droite) pouvant contenir des champs de base de données, du texte libre ou des images (par ex. votre logo d'entreprise, téléchargé via le gestionnaire d'images).
- **Corps** — contient une ou plusieurs tables de données. Les colonnes s'ajoutent par glisser-déposer depuis la liste des champs ; l'ordre s'ajuste également par glisser-déposer, la largeur via un champ de saisie en pourcentage par colonne.
- **Pied de page** — imprimé en bas de chaque page.

Chaque table est liée à une **source de données** que vous choisissez dans l'onglet *Source de données* : planning (Schedule), adresses sous forme de liste ou de détail, absences, services, groupes ou modèle de conteneur. La source de données détermine les champs disponibles.

Pour la mise en forme, vous disposez de :
- **Mise en forme** par cellule et texte libre : police, taille, gras/italique/souligné, couleur du texte, alignement.
- **Bordures de cellule** individuelles par côté (haut/droite/bas/gauche) avec style et couleur de ligne.
- **Pied de tableau** avec champs SUM : les colonnes numériques sont additionnées automatiquement.
- **Lignes de texte libre** avant ou après les tables de données — par exemple pour des remarques, des conditions ou des champs de signature.
- **Paramètres de page** dans l'onglet *Général* : format portrait ou paysage, taille de papier (A4, A3, B4/B5 JIS, Letter) et marges de page en mm.

## Bon à savoir

- **Champs fusionnés :** via la barre d'outils du champ sélectionné, vous pouvez combiner plusieurs champs dans une seule colonne ; le séparateur (virgule, espace, saut de ligne, tiret) est configurable.
- Pour la source de données **Planning**, deux options supplémentaires sont disponibles : *Regrouper les entrées par jour* (plusieurs entrées du même jour sur une seule ligne) et *Afficher la période complète* (tous les jours, même sans entrées).
- Le pied de tableau s'active via une case à cocher directement sous le tableau concerné ; l'étiquette SUM peut être affichée ou masquée séparément pour le champ de pied de page.

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
