<script lang="ts">
  import moment from 'moment';
	import Link from '../../components/link.svelte';
  moment.locale('fr')
</script>

<div class="py-24 sm:py-32 min-h-screen">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Essais</h2>
          <p class="mt-2 text-sm md:text-base leading-8 text-gray-600 dark:text-gray-300">La partie technique à visée d'aprentissage est principalement concentrée dans <Link external={false} link="cours" text="mes cours"/> et sur <Link external={true} link="https://www.youtube.com/results?search_query=rick+astley" text="ma chaîne YouTube"/>. Cet endroit est plus dédié à mes reflexions sur la société et la technologie.</p>
        </div>
        <div class="mt-10 space-y-16 border-t border-gray-200 dark:border-gray-600 pt-10 sm:mt-16 sm:pt-16">
          <article class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
              <time datetime="2020-03-16" class="text-gray-500 dark:text-gray-300">Mar 16, 2020</time>
              <div class="relative rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">Technologie</div>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
                <a href="/blog/dsfsdf">
                  <span class="absolute inset-0"></span>
                  La théorie du miniscule internet
                </a>
              </h3>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
  