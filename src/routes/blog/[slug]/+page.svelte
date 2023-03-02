<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="py-32 px-6 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300">
      <p class="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">{data.posts.data[0].attributes.category.data.attributes.name}</p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">{data.posts.data[0].attributes.title}</h1>
      <div class="mt-10 max-w-2xl">
        {@html data.posts.data[0].attributes.content}
      </div>
    </div>
  </div>
  