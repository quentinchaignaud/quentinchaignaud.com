<script>
	import Link from "../../components/link.svelte";
</script>

<div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Projets</h2>
        <p class="mt-2 text-sm md:text-base leading-8 text-gray-600 dark:text-gray-300">Cette page regroupe mes différents projets & réalisations personnelles.Elle est distincte de la page <Link external={false} link="/liens-utiles/projets-pour-developpeurs" text="projets pour développeurs" />, qui est une liste de projets pour que les développeurs puissent progresser.</p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <a href="/projets/oppa">
            <article class="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-white shadow px-8 pb-8 pt-60 sm:pt-48 lg:pt-72 dark:bg-gray-800">
              <img src="site-perso.png" alt="" class="group-hover:scale-105 transition absolute inset-0 -z-10 h-full w-full object-cover">
              <h3 class="mt-3 text-2xl font-semibold leading-6 text-gray-900 dark:text-white">
                  <span class="absolute inset-0"></span>
                  Site personnel
              </h3>
              <p class="text-gray-700 mt-4 dark:text-gray-300">
                Un site personnel qui regroupe mes cours, essais et guides pour développeurs.
              </p>
            </article>
        </a>
        <a href="/projets/oppa">
            <article class="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-white shadow px-8 pb-8 pt-60 sm:pt-48 lg:pt-72 dark:bg-gray-800">
              <img src="site-perso.png" alt="" class="group-hover:scale-105 transition absolute inset-0 -z-10 h-full w-full object-cover">
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
  