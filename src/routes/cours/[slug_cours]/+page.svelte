<script lang="ts">
	import type { PageData } from './$types';
	
	export let data: PageData;
  </script>

<svelte:head>
	<title>Comprendre les bases de données</title>
	<link rel="canonical" href="https://quentinchaignaud.com/cours/comprendre-le-backend-en-60-jours" />
	<meta name="description" content="Apprenez les compétences essentielles pour créer des architectures solides et performantes." />
	<meta property="og:title" content="Comprendre les bases de données" />
	<meta property="og:description" content="Apprenez les compétences essentielles pour créer des architectures solides et performantes." />
	<meta property="og:image" content="https://quentinchaignaud.com/og-images/og-image-cours-backend.png" />
	<meta property="og:url" content="https://quentinchaignaud.com/cours/comprendre-le-backend-en-60-jours" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@quentin__js" />
	<meta name="twitter:title" content="https://quentinchaignaud.com/cours/comprendre-le-backend-en-60-jours" />
	<meta name="twitter:description" content="Apprenez les compétences essentielles pour créer des architectures solides et performantes." />
	<meta name="twitter:image" content="https://quentinchaignaud.com/og-images/og-image-cours-backend.png" />
</svelte:head>

<section>
    <div class="py-24 px-6 sm:py-32 lg:px-8 min-h-screen">
        <div class="mx-auto max-w-2xl text-center">
            <p class="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">{data.course.items[0].subtitle}</p>
            <h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">{data.course.items[0].title}</h2>
            <p class="mt-8 leading-8 text-gray-600 dark:text-gray-300 text-center">
				{@html data.course.items[0].content}
            </p>
			<!-- <a class="text-white" href="/cours/{data.course.items[0].slug}/{data.course.items[0].expand.lessons[0].slug}/">Introduction</a> -->
        </div>
      </div>
</section>