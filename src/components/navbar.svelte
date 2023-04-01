<script lang="ts">
    import { onMount } from 'svelte';
    import { scale } from 'svelte/transition';
    import logo from '$lib/images/logo.svg';

    export let currentTheme : any;
  
    let showUsefulLinks = false;
    let showCourses = false;

    let showMenuMobile = false;
    let showUsefulLinksMobile = false;
    let showCoursesMobile = false;

    let menuCoursesDOM: HTMLElement | null = null;
    let menuUsefulLinksDOM: HTMLElement | null = null;
    
    onMount(() => {
      const handleOutsideClick = (event: any) => {
        if (showCourses && menuCoursesDOM && !menuCoursesDOM.contains(event.target as Node)) {
          showCourses = false;
        }
        if (showUsefulLinks && menuUsefulLinksDOM && !menuUsefulLinksDOM.contains(event.target as Node)) {
          showUsefulLinks = false;
        }
      };
  
      const handleEscape = (event : KeyboardEvent) => {
        if (showCourses && event.key === 'Escape') {
          showCourses = false;
        }
        if (showUsefulLinks && event.key === 'Escape') {
          showUsefulLinks = false;
        }
      };
  
      document.addEventListener('click', handleOutsideClick, false);
      document.addEventListener('keyup', handleEscape, false);
  
      return () => {
        document.removeEventListener('click', handleOutsideClick, false);
        document.removeEventListener('keyup', handleEscape, false);
      };
    });
  </script>

<header>
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Quentin Chaignaud</span>
          <img class="h-8 w-auto" src={logo} alt="Logo">
        </a>
      </div>
      <div class="flex lg:hidden">
        <button on:click={() => (showMenuMobile = !showMenuMobile) } type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <div bind:this={menuCoursesDOM} class="relative">
          <button on:click={() => (showCourses = !showCourses) } type="button" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white" aria-expanded="false">
            Cours
            <svg class="{showCourses ? 'rotate-180' : ''} transition h-5 w-5 flex-none text-gray-400 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
          {#if showCourses}
          <div class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-800">
            <div class="p-4">
              <div class="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-gray-700">
                <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-700 dark:group-hover:bg-indigo-500">
                  <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>                  
                </div>
                <div class="flex-auto">
                    <div class="flex justify-between">
                        <a on:click={() => (showCourses = !showCourses) } href="/cours/comprendre-les-bases-de-donnees" class="block font-semibold text-gray-900 dark:text-white">
                            Comprendre les bases de données
                            <span class="absolute inset-0"></span>
                          </a>
                    </div>
                  <p class="mt-1 text-gray-600 dark:text-gray-300">Toutes les connaissances nécessaires pour comprendre les bases de données.</p>
                </div>
              </div>
            </div>
          </div>
          {/if}
        </div>
  
        <a href="/projets" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Projets</a>
        <a href="/blog" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Blog</a>
  
        <div class="relative" bind:this={menuUsefulLinksDOM}>
          <button on:click={() => (showUsefulLinks = !showUsefulLinks) } type="button" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white" aria-expanded="false">
            Liens utiles
            <svg class="{showUsefulLinks ? 'rotate-180' : ''} transition h-5 w-5 flex-none text-gray-400 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
          {#if showUsefulLinks}
            <div 
              in:scale={{ duration: 100, start: 0.95 }}
              out:scale={{ duration: 75, start: 0.95 }}
              class="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-800">
                <div class="relative rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <a on:click={() => (showUsefulLinks = !showUsefulLinks) } href="/liens-utiles/par-ou-commencer-en-informatique" class="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                      Par où commencer
                      <span class="absolute inset-0"></span>
                  </a>
                  <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">Guide introductif à l'informatique pour les débutants.</p>
                </div>
                <div class="relative rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <a on:click={() => (showUsefulLinks = !showUsefulLinks) } href="/liens-utiles/meilleures-ressources" class="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                      Meilleures ressources
                      <span class="absolute inset-0"></span>
                  </a>
                  <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">Liste des meilleures ressources que j'ai trouvé, en ligne ou sur papier.</p>
                </div>
                <div class="relative rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <a on:click={() => (showUsefulLinks = !showUsefulLinks) } href="/liens-utiles/projets-pour-developpeurs" class="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    Projets pour développeurs
                    <span class="absolute inset-0"></span>
                    </a>
                    <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">Regroupement de différents projets pour mettre en pratique ses connaissances.</p>
                </div>
            </div>
          {/if}
        </div>
      </div>
      <div class="hidden gap-x-2 lg:flex lg:flex-1 lg:justify-end">
        <a href=mailto:“quentinchaignaud@gmail.com” type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-200 dark:bg-gray-900 dark:border-gray-600 dark:hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>              
        </a>
        <a href="https://www.youtube.com/channel/UCvWM1Rni_whpQy-uVq2rmqg" type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-200 dark:bg-gray-900 dark:border-gray-600 dark:hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
          </svg>
        </a>
        <button on:click type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-200 dark:bg-gray-900 dark:border-gray-600 dark:hover:bg-gray-800">
          {#if currentTheme == "dark"}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          {/if}
        </button>
      </div>
    </nav>
    {#if showMenuMobile}
    <div class="lg:hidden" role="dialog" aria-modal="true">
      <div class="fixed inset-0 z-10"></div>
      <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900">
        <div class="flex items-center justify-between">
          <a on:click={() => (showMenuMobile = !showMenuMobile) } href="/" class="-m-1.5 p-1.5 dark:text-gray-300">
            <span class="sr-only">Quentin Chaignaud</span>
            <img class="h-8 w-auto" src={logo} alt="Logo">
          </a>
          <button on:click={() => (showMenuMobile = !showMenuMobile) } type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300">
            <span class="sr-only">Fermer le menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <div class="-mx-3">
                <button on:click={() => (showCoursesMobile = !showCoursesMobile) } type="button" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800" aria-controls="disclosure-1" aria-expanded="false">
                  Cours
                  <svg class="{showCoursesMobile ? 'rotate-180' : ''} transition h-5 w-5 flex-none dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>
                {#if showCoursesMobile}
                <div class="mt-2 space-y-2" id="disclosure-1">
                  <a on:click={() => (showMenuMobile = !showMenuMobile) } href="/cours/comprendre-les-bases-de-donnees" class="flex justify-between items-center rounded-lg hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
                    <p class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 dark:text-gray-200">Comprendre les bases de données</p>
                    <span class="inline-flex items-center rounded-full bg-purple-100 mr-4 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:text-indigo-400 dark:bg-indigo-500/10 dark:ring-1 dark:ring-inset dark:ring-indigo-500/20">En chantier</span>
                  </a>
                </div>
                {/if}
              </div>

              <a on:click={() => (showMenuMobile = !showMenuMobile) } href="/projets" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white  dark:hover:bg-gray-800">Projets</a>
              <a on:click={() => (showMenuMobile = !showMenuMobile) } href="/blog" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white  dark:hover:bg-gray-800">Blog</a>

              <div class="-mx-3">
                <button on:click={() => (showUsefulLinksMobile = !showUsefulLinksMobile) } type="button" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 dark:text-white  dark:hover:bg-gray-800" aria-controls="disclosure-2" aria-expanded="false">
                  Liens utiles
                  <svg class="{showUsefulLinksMobile ? 'rotate-180' : ''} transition h-5 w-5 flex-none dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>
                {#if showUsefulLinksMobile}
                <div class="mt-2 space-y-2" id="disclosure-2">
                  <a on:click={() => (showMenuMobile = !showMenuMobile) } href="/liens-utiles/par-ou-commencer-en-informatique" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800">Par où commencer l'informatique</a>
                  
                  <a on:click={() => (showMenuMobile = !showMenuMobile) } href="/liens-utiles/meilleures-ressources" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800">Meilleures ressources</a>
                  
                  <a on:click={() => (showMenuMobile = !showMenuMobile) } href="/liens-utiles/projets-pour-developpeurs" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800">Projets pour développeurs</a>
                </div>
                {/if}
              </div>
            </div>
            <div class="py-6">
              <a href=mailto:“quentinchaignaud@gmail.com” type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-200 dark:bg-gray-900 dark:border-gray-600 dark:hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>              
              </a>
              <a href="https://www.youtube.com/channel/UCvWM1Rni_whpQy-uVq2rmqg" type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-200 dark:bg-gray-900 dark:border-gray-600 dark:hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </a>
              <button on:click type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-200 dark:bg-gray-900 dark:border-gray-600 dark:hover:bg-gray-800">
                {#if currentTheme == "dark"}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                {:else}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                {/if}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/if}
  </header>
  