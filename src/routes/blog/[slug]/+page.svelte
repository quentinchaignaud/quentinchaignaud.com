<script lang="ts">
	import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="py-32 px-6 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300">
      <p class="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">{data.post.category}</p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">{data.post.title}</h1>
      <article class="mt-10 prose lg:prose-lg prose-img:rounded-xl max-w-none dark:prose-invert">
        {@html data.post.content}
      </article>  
    </div>
  </div>
  