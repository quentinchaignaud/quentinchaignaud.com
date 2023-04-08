# quentinchaignaud.com 

Ce projet sert à la fois de site personnel et de plateforme de streaming. 
Il est basé sur le framework javascript sveltekit et la base de donnée Pocketbase.

## Prérequis

Votre pc doit-être équipé de [node.js](https://nodejs.org/en) en version 16.x à minima. La base de donnée [pocketbase](https://pocketbase.io/docs/) requiert la version 14.3.

## Fonctionnement

Le front-end est entièrement gérer par sveltekit. J'utilise également tailwindcss pour gérer le css, et la librairie tailwind.ui pour les composants css.


Sveltekit récupère les données dont il a besoin depuis la base de donnée pocketbase, qui prend aussi en charge l'authentification (c'est un équivalent de Firebase ou Supabase). J'ai choisi pocketbase pour sa simplicité : elle tient en un seul fichier executable et est self-hostable. 

Les vidéos sont stockées dans la plateforme Bunnystream, qui va stream directement à une balise <iframe> dans sveltekit. Le lien est récupéré depuis pocketbase, en même temps que le reste du contenu.

La stack technique :

Le schéma relationnel de la base pocketbase : 


## Installation

### Frontend

Pour démarrer, clonez le repository :
```bash
git clone https://github.com/quentinchaignaud/quentinchaignaud.git
```

Puis installez les dépendances requises :
```bash
npm install
```

Enfin, allez à la racine du projet et lancez le :
```bash
npm run dev
``` 

### Backend

Pour le backend, il faut également cloner le repository :
```bash
git clone <pocketbase>
```

Et le démarrer depuis le dossier où il a été déposé :
```bash
./pocketbase serve
```

## Utilisation

Pour la mise en ligne, je recommande un déploiement sur (Vercel)[https://vercel.com/solutions/svelte] car le projet est déjà configuré pour.

Pour hoster la base de donnée, je recommande la mise en place d'une machine virtuelle Linode à 5 euros par mois (+ 2€ pour la réplication). Pour déployer la base de donnée, suivre ce [tuto](https://pocketbase.io/docs/going-to-production/).

Il faut également créer un compte [bunnystream](https://bunny.net/) (ou autre plateforme de streaming) pour host les vidéos.

## Licence

Ce projet est sous licence MIT, vous pouvez donc l'utiliser à des fins personnelles ou commerciales. J'utilise la librairie [tailwind.ui](https://tailwindui.com/license) pour le css, merci d'en prendre compte avant des utilisations commerciales.
