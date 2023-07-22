<script>
  import imgOppa from '$lib/images/oppa.png';
  import imgSitePerso from '$lib/images/site-perso.png';
  import imgWonderWalkar from '$lib/images/wonderwalkar.png';
</script>

<svelte:head>
	<title>Projets</title>
	<link rel="canonical" href="https://quentinchaignaud.com/projets" />
	<meta name="description" content="Liste de tout mes projets personnels notables de ces dernières années." />
	<meta property="og:title" content="Projets personnels" />
	<meta property="og:description" content="Liste de tout mes projets personnels notables de ces dernières années." />
	<meta property="og:image" content="https://quentinchaignaud.com/og-images/og-image-projets-persos.png" />
	<meta property="og:url" content="https://quentinchaignaud.com/projets" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@quentin__js" />
	<meta name="twitter:title" content="https://quentinchaignaud.com/projets" />
	<meta name="twitter:description" content="Liste de tout mes projets personnels notables de ces dernières années." />
	<meta name="twitter:image" content="https://quentinchaignaud.com/og-images/og-image-projets-persos.png" />
</svelte:head>

<div class="py-24 sm:py-32 min-h-screen">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Projets</h2>
        <p class="mt-2 text-sm md:text-base leading-8 text-gray-600 dark:text-gray-300">Mes différents projets & réalisations personnelles.</p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <a target="_blank" rel="noreferrer"  href="https://wonderwalkar.com/">
            <article class="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-white shadow px-8 pb-8 pt-60 sm:pt-48 lg:pt-72 dark:bg-gray-800">
              <img src={imgWonderWalkar} alt="Tour eiffel blanche ressemblant à une figurine vue de côté, en 3D." class="group-hover:scale-105 transition absolute inset-0 -z-10 h-full w-full object-cover">
              <h3 class="mt-3 text-2xl font-semibold leading-6 text-gray-900 dark:text-white">
                  <span class="absolute inset-0"></span>
                  WonderWalkar
              </h3>
              <p class="text-gray-700 mt-4 dark:text-gray-300">
                Une application mobile pour découvrir Paris et collecter ses monuments.
              </p>
            </article>
        </a>
        <a target="_blank" rel="noreferrer"  href="https://github.com/quentinchaignaud/quentinchaignaud.com">
            <article class="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-white shadow px-8 pb-8 pt-60 sm:pt-48 lg:pt-72 dark:bg-gray-800">
              <img src={imgSitePerso} alt="Logo du site personnel, un petit robot en forme de boule ronde avec seulement deux yeux ovales." class="group-hover:scale-105 transition absolute inset-0 -z-10 h-full w-full object-cover">
              <h3 class="mt-3 text-2xl font-semibold leading-6 text-gray-900 dark:text-white">
                  <span class="absolute inset-0"></span>
                  quentinchaignaud.com
              </h3>
              <p class="text-gray-700 mt-4 dark:text-gray-300">
                Mon site personnel qui regroupe mes cours, mon blog et mes projets.
              </p>
            </article>
        </a>
        <a href="/projets/oppa">
            <article class="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-white shadow px-8 pb-8 pt-60 sm:pt-48 lg:pt-72 dark:bg-gray-800">
              <img src={imgOppa} alt="Petit monstre logo de l'application, qui s'interroge " class="group-hover:scale-105 transition absolute inset-0 -z-10 h-full w-full object-cover">
              <h3 class="mt-3 text-2xl font-semibold leading-6 text-gray-900 dark:text-white">
                  <span class="absolute inset-0"></span>
                  Oppa
              </h3>
              <p class="text-gray-700 mt-4 dark:text-gray-300">
                Une application mobile qui permet aux fans de Kpop d'apprendre le coréen.
              </p>
            </article>
        </a>
      </div>
    </div>
  </div>
  