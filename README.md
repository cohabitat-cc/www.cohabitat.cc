# COHABITAT.CC — Plateforme web, gouvernance ouverte et réseau d'habitats partagés

Bienvenue sur le dépôt officiel du site web et de l'espace de gouvernance ouverte de **[COHABITAT.CC](https://cohabitat.cc)**.

COHABITAT.CC est une initiative citoyenne en cours de constitution en personne morale sans but lucratif (*Loi sur les compagnies du Québec, RLRQ, c. C-38, Partie III*). Notre mission est de développer, fédérer et promouvoir des milieux de vie écologiques, solidaires et résilients, fondés sur la mutualisation des espaces, la mobilité active (sans voiture solo) et la déspéculation permanente du logement.

Ce dépôt héberge à la fois :
1. **Le site web public** accessible à l'adresse [https://cohabitat.cc](https://cohabitat.cc).
2. **Le texte officiel des règlements généraux proposés**, versionné sous Git afin de permettre à tout membre d'y soumettre des amendements par *Pull Request*.
3. **L'incubateur de projets de sites**, où des fiches de projets concrets de cohabitats peuvent être documentées et proposées par quartier ou terrain ciblé.

---

## Sommaire

* [Organisation du répertoire](#organisation-du-répertoire)
* [Guides de contribution par Pull Request](#guides-de-contribution-par-pull-request)
  * [1. Proposer une modification aux règlements généraux](#1-proposer-une-modification-aux-règlements-généraux)
  * [2. Rédiger et publier un article de blogue](#2-rédiger-et-publier-un-article-de-blogue)
  * [3. Ajouter ou mettre à jour un profil de membre](#3-ajouter-ou-mettre-à-jour-un-profil-de-membre)
  * [4. Proposer un projet concret de cohabitat à un site spécifique](#4-proposer-un-projet-concret-de-cohabitat-à-un-site-spécifique)
* [Démarrage et développement local](#démarrage-et-développement-local)
* [Éthique et principes fondamentaux](#éthique-et-principes-fondamentaux)
* [Licence](#licence)

---

## Organisation du répertoire

Le projet est propulsé par **Jekyll** (générateur de sites statiques) avec un environnement reproductible **Nix**, sans dépendances superflues :

```text
www.cohabitat.cc/
├── _includes/              # Composants HTML réutilisables (navbar, footer, seo, etc.)
│   ├── navbar.html         # Menu de navigation principal
│   ├── seo.html            # Balises meta, Open Graph et Twitter Cards
│   └── social-icons.html   # Liens vers les réseaux sociaux
├── _layouts/               # Gabarits de pages
│   ├── default.html        # Layout de base du site
│   ├── post.html           # Layout des articles de blogue
│   └── members.html        # Layout de la page membres
├── _posts/                 # Articles de blogue (format : YYYY-MM-DD-titre.md)
├── assets/                 # Fichiers statiques
│   ├── images/             # Images, bannières et schémas conceptuels
│   │   └── members/        # Photos de profil des membres
├── projets/                # Incubateur de projets et fiches de sites
│   ├── README.md           # Guide de soumission de projets de sites
│   └── modele-fiche-projet.md # Gabarit officiel pour un nouveau site
├── a-propos.md             # Page À propos : statut légal REQ, 7 objets et gouvernance
├── blogue.md               # Page d'accueil du blogue
├── index.md                # Page d'accueil principale
├── membres.md              # Liste YAML des membres et co-fondateurs
├── projets.md              # Page publique de présentation des projets de sites
├── reglements.md           # Règlements généraux proposés (versionnés en Markdown)
├── style.css               # Feuille de style principale (Vanilla CSS moderne)
├── _config.yml             # Paramètres globaux du site Jekyll et SEO
├── flake.nix / flake.lock  # Environnement Nix pour le développement local
└── .envrc                  # Intégration Direnv pour Nix
```

---

## Guides de contribution par Pull Request

Nous encourageons une **gouvernance ouverte et transparente**. Que vous souhaitiez suggérer une amélioration légale, partager une réflexion sur le blogue, rejoindre l'équipe publique ou proposer un site pour un futur cohabitat, tout passe par une **Pull Request (PR)** sur GitHub.

### Workflow Git de base :
1. Créez un *fork* du dépôt [cohabitat-cc/www.cohabitat.cc](https://github.com/cohabitat-cc/www.cohabitat.cc).
2. Clonez votre fork en local :
   ```bash
   git clone https://github.com/VOTRE_UTILISATEUR/www.cohabitat.cc.git
   cd www.cohabitat.cc
   ```
3. Créez une branche dédiée à votre proposition :
   ```bash
   git checkout -b ma-proposition
   ```
4. Effectuez vos modifications, committez et poussez :
   ```bash
   git add .
   git commit -m "Description claire de votre modification"
   git push origin ma-proposition
   ```
5. Ouvrez une **Pull Request** sur GitHub vers la branche `main` du dépôt parent.

---

### 1. Proposer une modification aux règlements généraux

Le fichier [`reglements.md`](reglements.md) contient le projet de règlements généraux de COHABITAT.CC. Il est rédigé de façon granulaire pour faciliter les revues de code et de texte (*diffs*).

#### Bonnes pratiques :
* **Un alinéa par ligne :** Évitez de regrouper plusieurs paragraphes en un seul bloc de texte. Cela permet de commenter des lignes précises dans la PR GitHub.
* **Respecter la numérotation :** Si vous ajoutez un article, respectez la hiérarchie existante (ex. `Clause 5.4`).
* **Motivation dans la description de la PR :** Expliquez la raison d'être de votre proposition (ex. clarification d'une procédure de médiation, ajustement sociocratique, précision sur les cercles).
* **Processus d'adoption :** La proposition est discutée par les pairs. Une fois le consentement constaté (absence d'objections raisonnables), la PR est fusionnée et le texte mis à jour automatiquement sur le site web.

---

### 2. Rédiger et publier un article de blogue

Les articles de blogue sont situés dans le dossier `_posts/`.

#### Format du fichier :
Créez un fichier avec la convention :
```text
_posts/AAAA-MM-JJ-titre-de-l-article-en-kebab-case.md
```
*(Exemple : `_posts/2026-10-15-retour-atelier-mecanique-velo.md`)*

#### Structure du fichier (Front Matter YAML) :
Chaque article doit débuter par un en-tête YAML complet :

```yaml
---
layout: post
title: "Titre percutant de votre article"
subtitle: "Sous-titre explicatif en une phrase"
date: 2026-10-15 18:00:00 -0400
author: "Votre Prénom et Nom"
categories: [communaute, mobilite]      # Ex: communaute, mobilite, urbanisme, gouvernance
tags: [velo, fablab, montreal, cohabitat]
image: "/assets/images/nom-de-votre-image.jpg"
image_caption: "Légende descriptive de l'image d'en-tête."
description: "Résumé concis (1 à 2 phrases) pour les moteurs de recherche et les partages Facebook/LinkedIn."
---

Votre texte rédigé en Markdown ici.

Vous pouvez insérer des sous-titres (`##`), des listes à puces, des citations (`>`) et des images :
![Légende alternative]({{ '/assets/images/autre-image.jpg' | relative_url }})
```

#### Recommandations pour les images :
* Déposez les images d'illustration dans `assets/images/`.
* Privilégiez des noms de fichiers sans espaces ni caractères accentués (ex. `atelier_velo_2026.jpg`).
* Utilisez la balise Liquid `{{ '/assets/images/... ' | relative_url }}` pour assurer la validité des liens.

---

### 3. Ajouter ou mettre à jour un profil de membre

La liste des membres et co-fondateurs est centralisée dans le fichier [`membres.md`](membres.md).

#### Marche à suivre :
1. Déposez votre photo de profil (format carré de préférence, min. 400x400 px, format PNG ou JPG) dans :
   ```text
   assets/images/members/votre-identifiant.jpg
   ```
2. Ouvrez [`membres.md`](membres.md) et ajoutez votre bloc sous la clé `members` :

```yaml
  - name: "Votre Prénom et Nom"
    role: "Votre Rôle ou Engagement"       # Ex: Membre actif, Cercle Projets, Architecte bénévole
    linkedin: "https://www.linkedin.com/in/votre-profil/"
    avatar: "/assets/images/members/votre-identifiant.jpg"
    bio: "Une courte présentation de 2 à 3 phrases expliquant votre démarche, vos convictions et ce qui vous motive dans le projet COHABITAT.CC."
    experience:
      - "Votre expérience professionnelle ou civique principale"
      - "Une réalisation clé ou implication communautaire pertinente"
      - "Autre élément de parcours, formation ou savoir-faire"
```

---

### 4. Proposer un projet concret de cohabitat à un site spécifique

Le réseau COHABITAT.CC a vocation à fédérer plusieurs sites à échelle humaine (modèle modulaire). Si vous avez repéré un terrain, un immeuble à requalifier ou si vous réunissez un groupe de citoyens autour d'un quartier :

1. Consultez le dossier [`projets/`](projets/).
2. Copiez le fichier modèle [`projets/modele-fiche-projet.md`](projets/modele-fiche-projet.md) vers :
   ```text
   projets/AAAA-nom-du-projet.md
   ```
   *(Exemple : `projets/2026-cohabitat-rosemont.md` ou `projets/2026-pole-cycliste-chabanel.md`)*
3. Renseignez les sections de la fiche :
   * **Localisation précise** (ville, quartier, intersection, proximité du réseau cyclable et du métro).
   * **Envergure** (nombre d'unités compactes ciblées, profil des ménages).
   * **Infrastructures mutualisées** (atelier vélo, grande cuisine partagée, fablab, buanderie écologique, toit cultivé).
   * **Mobilité active** (absence totale de stationnement pour automobile solo, ratios vélos-cargos).
   * **Modèle juridique et financier** (statut OBNL ou coopératif, déspéculation permanente, obligations communautaires).
4. Soumettez votre proposition via une **Pull Request**. Le *Cercle Projets & Sites* examinera l'initiative pour lui apporter l'appui du réseau.

---

## Démarrage et développement local

### Méthode 1 : Avec Nix (recommandé)

Si vous disposez de [Nix](https://nixos.org/) sur votre machine :

```bash
# Avec Direnv (recommandé - charge automatiquement l'environnement) :
direnv allow

# Ou avec nix-shell :
nix-shell -p jekyll --run "jekyll serve --host 127.0.0.1 --port 4000"
```

### Méthode 2 : Avec Ruby & Bundler standard

Si Ruby est installé sur votre système :

```bash
bundle install
bundle exec jekyll serve
```

Le site est ensuite accessible en local à l'adresse : **[http://localhost:4000](http://localhost:4000)**. Toute modification apportée aux fichiers `.md` ou `.html` recharge automatiquement le site en quelques millisecondes.

---

## Éthique et principes fondamentaux

Toute contribution et proposition au sein de COHABITAT.CC doit s'inscrire dans le respect de nos garde-fous statutaires :

1. **Laïcité stricte & Absence de dogme :** Espace rationnel et bienveillant, exempt de tout prosélytisme religieux, sectaire ou d'autorité spirituelle.
2. **Neutralité politique :** Indépendance totale face à tous les partis politiques.
3. **Non-lucrativité absolue :** Réinvestissement intégral de tout surplus dans la mission et le fonds de réserve écologique (*Asset Lock*).
4. **Langue officielle :** Le français est la langue de fonctionnement, de travail et de communication interne.
5. **Sociocratie :** Prise de décision par consentement et pratique constructive des bilans critiques (*post-mortems*).

---

## Licence

* **Code source, structures et styles :** Distribués sous licence libre [MIT](LICENSE).
* **Contenus éditoriaux, chartes et règlements :** Distribués sous licence [Creative Commons Attribution - Partage dans les Mêmes Conditions 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).
