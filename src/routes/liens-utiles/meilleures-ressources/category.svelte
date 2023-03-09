<script lang="ts">
    export let name: string    
    export let ressources: Array<Ressource>;
    
    let isOpen = false;

</script>

<section class="text-left mt-8">
    <button on:click={() => (isOpen = !isOpen) } type="button" class="flex w-full items-center justify-between text-left text-gray-900" aria-controls="faq-0" aria-expanded="false">
      <span class="mt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">{name}</span>
      <span class="ml-6 flex h-7 items-center">
        {#if isOpen == true}
        <svg class="h-6 w-6 dark:text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
        </svg>
        {:else}
        <svg class="h-6 w-6 dark:text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
        </svg>
        {/if}
      </span>
    </button>
    {#if isOpen == true}
    <ul class="mt-8 mb-20 space-y-8 text-gray-600">
        {#each ressources as ressource}
            <li class="flex gap-x-3">
                <svg class="mt-0.5 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                    {#if ressource.type == "book"}
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    {:else if ressource.type == "video"}
                        <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    {:else if ressource.type == "website"}
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    {/if}
                </svg>           
                <span class="dark:text-gray-300">
                    <a href={ressource.link} target="_blank" rel="noreferrer" class="font-semibold text-gray-900 dark:text-white dark:font-medium underline underline-offset-2 hover:no-underline">{ressource.title}</a> 
                    {ressource.description}
                </span>
            </li>
        {/each}
    </ul>
    {/if}
  </section>