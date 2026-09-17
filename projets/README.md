# Incubateur et Projets de Cohabitats Locaux

Bienvenue dans le répertoire des **projets et sites concrets de cohabitats** affiliés ou en gestation au sein de **COHABITAT.CC**.

L'un des objectifs fondamentaux de notre organisation est de favoriser un **modèle décentralisé et modulaire** : une fédération d'initiatives à l'échelle humaine partageant des outils communs (cadres juridiques, logiciels d'analyse foncière, gouvernance sociocratique, obligations communautaires) tout en s'ancrant dans des réalités de quartier spécifiques.

---

## Comment proposer un projet de cohabitat pour un site précis ?

Vous avez repéré un terrain disponible, un bâtiment patrimonial à requalifier, ou vous formez un groupe de voisins désireux de bâtir un milieu de vie sans automobile et hautement mutualisé ?

Voici la marche à suivre pour soumettre votre projet au réseau :

### Étape 1 : Cloner le gabarit officiel
Copiez le fichier [`modele-fiche-projet.md`](modele-fiche-projet.md) et renommez-le sous le format suivant :
```bash
projets/YYYY-nom-du-projet.md
```
*Exemple : `projets/2026-cohabitat-petite-patrie.md` ou `projets/2026-pole-angus-cycliste.md`.*

### Étape 2 : Compléter la fiche du site
Remplissez les différentes rubriques avec le niveau de détail actuellement connu :
* **Localisation et accessibilité** (proximité des transports en commun et réseaux cyclables de premier plan comme le REV).
* **Échelle du milieu de vie** (nombre d'unités privatives compactes, profil multigénérationnel).
* **Espaces partagés prioritaires** (atelier vélo, grande cuisine, buanderie partagée, chambre d'invités, toiture active).
* **Posture stricte sans voiture individuelle solo** (places pour vélos-cargos et accès à l'autopartage).
* **Modèle anti-spéculatif** (OBNL Partie III, coopérative de solidarité ou fiducie foncière).

### Étape 3 : Ouvrir une Pull Request sur GitHub
1. Créez une branche descriptive : `git checkout -b projet/nom-du-site`
2. Ajoutez votre fichier et validez :
   ```bash
   git add projets/YYYY-nom-du-projet.md
   git commit -m "Ajout du projet de site : Nom du Projet"
   git push origin projet/nom-du-site
   ```
3. Rendez-vous sur [GitHub](https://github.com/cohabitat-cc/www.cohabitat.cc) et ouvrez une **Pull Request**.

---

## Processus d'accueil et d'accompagnement par le Réseau

1. **Revue bienveillante et dialogue :** Les membres du *Cercle Projets & Sites* prennent connaissance de la proposition, posent des questions dans la PR et évaluent les synergies possibles.
2. **Accompagnement méthodologique :** Accès aux outils de simulation financière et de zonage développés au sein du réseau (ex. [HABILE.ca](https://habile.ca)).
3. **Mise en visibilité :** Une fois le projet accueilli au sein du réseau (fusion de la PR), une fiche publique est publiée pour aider les porteurs à recruter des co-concevants, des futurs résidents et des souscripteurs d'obligations communautaires.

---

## Critères d'éligibilité et alignement éthique

Pour être reconnu comme projet du réseau **COHABITAT.CC**, tout site doit souscrire aux critères non négociables suivants :
* **Déspéculation totale et perpétuelle :** Aucune revente spéculative individuelle.
* **Mobilité active :** Absence totale de cases de stationnement pour véhicules solo motorisés au profit d'infrastructures vélo de classe mondiale.
* **Laïcité stricte :** Refus absolu de tout prosélytisme dogmatique, sectaire ou religieux.
* **Sobriété environnementale :** Efficacité énergétique de pointe, acoustique supérieure et mutualisation maximale des ressources.
