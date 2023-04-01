<script lang="ts">
  import imgData from '$lib/images/data.png';
</script>

<svelte:head>
	<title>Cours</title>
	<link rel="canonical" href="https://quentinchaignaud.com/cours/" />
	<meta name="description" content="Liste de cours gratuits sur backend et le system design." />
	<meta property="og:title" content="Cours" />
	<meta property="og:description" content="Liste de cours gratuits sur backend et le system design." />
	<meta property="og:image" content="https://quentinchaignaud.com/cours/og-images/og-image.png" />
	<meta property="og:url" content="https://quentinchaignaud.com/cours/" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@quentin__js" />
	<meta name="twitter:title" content="https://quentinchaignaud.com/cours/" />
	<meta name="twitter:description" content="Liste de cours gratuits sur backend et le system design." />
	<meta name="twitter:image" content="https://quentinchaignaud.com/og-images/og-image.png" />
</svelte:head>

<div class="py-24 sm:py-32 min-h-screen">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Cours</h2>
        <p class="mt-2 text-base leading-8 text-gray-600 dark:text-gray-300">Tout les cours présents ici sont 100% gratuits. Ils se concentrent sur des concepts plutôt que des langages, pour que les juniors puissent obtenir cette vision d'ensemble qui leur fait souvent défaut.</p>
        <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
          <article class="relative isolate flex flex-col gap-8 lg:flex-row lg:hover:bg-gray-100 rounded-xl hover:cursor-pointer dark:lg:hover:bg-gray-800">
            <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
              <img src={imgData} alt="Illustration d'un casier contenant des dossiers." class="absolute inset-0 h-full w-full rounded-2xl bg-white dark:bg-gray-700 object-contain lg:object-cover">
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
            <div>
              <div class="group relative max-w-xl">
                <div class="lg:mt-3 flex flex-col-reverse md:flex-row md:items-center md:justify-between">
                    <h3 class="mt-3 text-xl font-semibold leading-6 text-gray-900 dark:text-white">
                      <a href="/cours/comprendre-les-bases-de-donnees">
                        <span class="absolute inset-0"></span>
                        Comprendre les bases de données
                      </a>
                    </h3>
                    <span class="w-24 inline-flex items-center justify-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:text-indigo-400 dark:bg-indigo-500/10 dark:ring-1 dark:ring-inset dark:ring-indigo-500/20">En chantier</span>
                </div>
                <div class="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  Ce cours est le seul dont vous aurez besoin pour comprendre en profondeur comment marchent les bases de données. Conçu pour les débutants qui souhaitent passer à un niveau avancé.
                  A la fin, vous saurez :
                    <ul class="mt-2 max-w-xl space-y-2">
                        <li class="flex gap-x-2 justify-start">
                          <svg class="mt-0.5 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                          </svg>
                          <span>Faire évoluer une application de 0 à 10 millions d’utilisateurs</span>
                        </li>
                        <li class="flex gap-x-2 justify-start">
                          <svg class="mt-0.5 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                          </svg>
                          <span>Répondre correctement aux questions techniques en entretien</span>
                        </li>
                        <li class="flex gap-x-2 justify-start">
                          <svg class="mt-0.5 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                          </svg>
                          <span>Comprendre et parler le langage technique des données (avec des mots complexes comme : consistence, partitionnement, scalabilité, et plus...)</span>
                        </li>
                    </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
  