# quentinchaignaud.com

Ce projet me sert de site personnel. Il est basé sur le framework JavaScript [SvelteKit](https://kit.svelte.dev/) et la base de données [Pocketbase](https://pocketbase.io/docs/) .

## Prérequis

Votre PC doit être équipé de [Node.js](https://nodejs.org/en) en version 16.x minimum. La base de données Pocketbase requiert la version 14.3.

## Fonctionnement

Le front-end est entièrement géré par SvelteKit. J'utilise également TailwindCSS pour gérer le CSS et la bibliothèque Tailwind UI pour les composants CSS.

SvelteKit récupère les données dont il a besoin depuis la base de données Pocketbase (c'est un équivalent de Firebase ou Supabase). Pocketbase sert également les sous-domaines

J'ai choisi Pocketbase pour sa simplicité : elle tient en un seul fichier exécutable et est auto-hébergeable.

La stack technique :
<img src="https://github.com/quentinchaignaud/quentinchaignaud/blob/main/docs/schema-stack.png" width="700">

Le schéma relationnel de la base Pocketbase :
<img src="https://github.com/quentinchaignaud/quentinchaignaud/blob/main/docs/sql-schema-table.png" width="700">

## Installation

### Frontend

Pour commencer, clonez le dépôt :

```bash
git clone https://github.com/quentinchaignaud/quentinchaignaud.git
```

Ensuite, installez les dépendances requises :

```bash
npm install
```

Enfin, allez à la racine du projet et lancez-le :

```bash
npm run dev
```

### Backend

Le backend sera bientôt disponnible, en attendant il suffit de créer une table respectant le schéma indiqué plus haut.

<!-- Pour le backend, il faut également cloner ce dépôt :

```bash
git clone <pocketbase>
```

Et le démarrer depuis le dossier où il a été déposé :

```bash
./pocketbase serve
``` -->

## Utilisation

Pour la mise en ligne, je recommande un déploiement sur [Vercel](https://vercel.com/solutions/svelte) car le projet est déjà configuré pour cela.

Pour héberger la base de données, je recommande la mise en place d'une machine virtuelle Linode à 5 euros par mois (+ 2€ pour la réplication). Pour déployer la base de données, suivez ce [tutoriel](https://pocketbase.io/docs/going-to-production/).

## Licence

Ce projet est sous licence MIT, vous pouvez donc l'utiliser à des fins personnelles ou commerciales. J'utilise la bibliothèque [Tailwind UI](https://tailwindui.com/license) pour le CSS, veuillez en tenir compte avant toute utilisation commerciale.
