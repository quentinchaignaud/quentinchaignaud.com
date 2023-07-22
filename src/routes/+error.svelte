<script lang="ts">
  import { page } from '$app/stores';
</script>

<section class="dark:text-white grid min-h-full place-items-center py-12 px-6 lg:px-8">
  <div class="mx-auto max-w-2xl text-center">
    <p class="text-base font-semibold leading-8 text-indigo-600 dark:text-indigo-400">{$page.error?.message}</p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">OH-OH.</h1>
    <p class="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300 sm:mt-6 sm:text-lg sm:leading-8">
      Il semblerait qu'il y ait eu un problème avec l'affichage de cette page.
    </p>
  </div>
  <div class="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
    <h2 class="sr-only">Popular pages</h2>
    <ul class="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5">
      

      <li class="relative flex gap-x-6 py-6">
        <div class="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
          <svg class="h-6 w-6 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M5.625 3.75a2.625 2.625 0 100 5.25h12.75a2.625 2.625 0 000-5.25H5.625zM3.75 11.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3 15.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3.75 18.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" />
          </svg>
        </div>
        <div class="flex-auto">
          <h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
            <a href="/liens-utiles/meilleures-ressources">
              <span class="absolute inset-0" aria-hidden="true"></span>
              Meilleures ressources
            </a>
          </h3>
          <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">Les ressources qui m'ont le plus aidé.</p>
        </div>
        <div class="flex-none self-center">
          <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
          </svg>
        </div>
      </li>

      <li class="relative flex gap-x-6 py-6">
        <div class="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
          <svg class="h-6 w-6 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M3.75 4.5a.75.75 0 01.75-.75h.75c8.284 0 15 6.716 15 15v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75C18 11.708 12.292 6 5.25 6H4.5a.75.75 0 01-.75-.75V4.5zm0 6.75a.75.75 0 01.75-.75h.75a8.25 8.25 0 018.25 8.25v.75a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75v-.75a6 6 0 00-6-6H4.5a.75.75 0 01-.75-.75v-.75zm0 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="flex-auto">
          <h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
            <a href="/blog">
              <span class="absolute inset-0" aria-hidden="true"></span>
              Blog
            </a>
          </h3>
          <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">Mes derniers articles sur différents sujets, pas forcément liés à l'informatique.</p>
        </div>
        <div class="flex-none self-center">
          <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
          </svg>
        </div>
      </li>
    </ul>
    <div class="mt-10 flex justify-center">
      <a href="/" class="text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400">
        <span aria-hidden="true">&larr;</span>
        Retour à l'accueil
      </a>
    </div>
  </div>
</section>