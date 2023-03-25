<script lang="ts">
  import imgComputer from '$lib/images/computer.png';
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
        <p class="mt-2 text-base leading-8 text-gray-600 dark:text-gray-300">Tout les vidéos présentes ici sont disponibles gratuitement sur YouTube. Cette plateforme est conçue comme un complément avec des quiz pour chaque valider vos connaissances, des fiches mémos, des exemples de code, etc.</p>
        <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
          <article class="relative isolate flex flex-col gap-8 lg:flex-row lg:hover:bg-gray-100 p-4 rounded-xl hover:cursor-pointer dark:lg:hover:bg-gray-800">
            <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
              <img src={imgComputer} alt="Vieil ordinateur IBM et du matos autour, ambiance rétro des années 80 avec néon, et une icône d'éclair blanc au centre." class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover">
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
            <div>
              <div class="group relative max-w-xl">
                <div class="lg:mt-3 flex items-center justify-between">
                    <h3 class="text-xl font-semibold leading-6 text-gray-900 dark:text-white">
                      <a href="/cours/comprendre-le-backend-en-60-jours">
                        <span class="absolute inset-0"></span>
                        Le back-end en 60 jours
                      </a>
                    </h3>
                    <span class="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:text-indigo-400 dark:bg-indigo-500/10 dark:ring-1 dark:ring-inset dark:ring-indigo-500/20">En construction</span>
                </div>
                <div class="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  Ce cours offre les connaissances nécessaires pour approcher la plupart des problèmes rencontrés en back-end. Il s'agit d'une formation complète, qui vous donnera des fondations solides.
                  A la fin de ce cours, vous saurez :                    
                    <ul class="mt-2 max-w-xl space-y-2">
                        <li class="flex gap-x-2 items-center">
                          <svg class="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                          </svg>
                          <span>Faire évoluer une application web de 0 à 10 millions d’utilisateurs</span>
                        </li>
                        <li class="flex gap-x-2 items-center">
                          <svg class="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                          </svg>
                          <span>Choisir les bases de données les plus adaptées à un projet</span>
                        </li>
                        <li class="flex gap-x-2 items-center">
                          <svg class="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                          </svg>
                          <span>Répondre correctement aux questions d'entretien les plus courantes</span>
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
  