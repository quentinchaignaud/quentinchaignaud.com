<script lang="ts">
	import flutter from '$lib/logos/flutter.svg';
	import flutterDark from '$lib/logos/flutter-dark.svg';
	import sql from '$lib/logos/sql.svg';
	import sqlDark from '$lib/logos/sql-dark.svg';
	import python from '$lib/logos/python.svg';
	import pythonDark from '$lib/logos/python-dark.svg';
	import typescript from '$lib/logos/typescript.svg';
	import typescriptDark from '$lib/logos/typescript-dark.svg';
	import rust from '$lib/logos/rust.svg';
	import rustDark from '$lib/logos/rust-dark.svg';
	import duckdb from '$lib/logos/duckdb.svg';
	import duckdbDark from '$lib/logos/duckdb-dark.svg';
	import docker from '$lib/logos/docker.svg';
	import dockerDark from '$lib/logos/docker-dark.svg';
	import { getContext } from 'svelte';

	const theme = getContext('theme');
</script>

<svelte:head>
	<title>Quentin Chaignaud | Développeur Full Stack</title>
	<link rel="canonical" href="https://quentinchaignaud.com/" />
	<meta
		name="description"
		content="Software engineer travaillant principalement avec Python et SQL."
	/>
	<meta property="og:title" content="Quentin Chaignaud | Software Engineer" />
	<meta
		property="og:description"
		content="Software engineer travaillant principalement avec Python et SQL."
	/>
	<meta property="og:image" content="https://quentinchaignaud.com/og-images/og-image.png" />
	<meta property="og:url" content="https://quentinchaignaud.com/" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@quentin__js" />
	<meta name="twitter:title" content="https://quentinchaignaud.com/" />
	<meta
		name="twitter:description"
		content="Software engineer travaillant principalement avec Python et SQL."
	/>
	<meta name="twitter:image" content="https://quentinchaignaud.com/og-images/og-image.png" />
</svelte:head>

<section>
	<div class="relative px-6 lg:px-8 min-h-screen">
		<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
			<div class="text-center">
				<p class="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
					Salut, je m'appelle
				</p>
				<h1
					class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mt-4"
				>
					Quentin Chaignaud
				</h1>
				<p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
					Je suis un développeur fullstack spécialisé en Python et SQL. Je m'intéresse aussi au
					développement Web et Mobile, ainsi qu'aux systèmes distribués.
				</p>
				<div class="mt-10 flex flex-col gap-y-4 md:flex-row items-center justify-center gap-x-6">
					<a
						href="/projets"
						class="rounded-md bg-indigo-600 dark:bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-400"
						>Voir mes projets</a
					>
					<a href="/blog" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
						>Lire mon blog <span aria-hidden="true">→</span></a
					>
				</div>
				<div class="py-24 sm:py-24">
					<div class="mx-auto max-w-7xl px-6 lg:px-8">
						<h2 class="text-center font-semibold leading-8 text-gray-900 dark:text-white">
							J'aime beaucoup ces technos en ce moment :
						</h2>
						<div
							class="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
						>
							<img
								class="hidden dark:block col-span-1 max-h-12 w-full object-contain lg:col-span-1"
								src={flutterDark}
								alt="Transistor"
								width="158"
								height="48"
							/>
							<img
								class="dark:hidden col-span-1 max-h-12 w-full object-contain lg:col-span-1"
								src={flutter}
								alt="Transistor"
								width="158"
								height="48"
							/>
							<img
								class="hidden dark:block col-span-1 max-h-12 w-full object-contain lg:col-span-1"
								src={sqlDark}
								alt="Reform"
								width="158"
								height="48"
							/>
							<img
								class="dark:hidden col-span-1 max-h-12 w-full object-contain lg:col-span-1"
								src={sql}
								alt="Reform"
								width="158"
								height="48"
							/>
							<img
								class="hidden dark:block col-span-1 max-h-12 w-full object-contain lg:col-span-1"
								src={pythonDark}
								alt="Tuple"
								width="158"
								height="48"
							/>
							<img
								class="dark:hidden col-span-1 max-h-12 w-full object-contain lg:col-span-1"
								src={python}
								alt="Tuple"
								width="158"
								height="48"
							/>
							<img
								class="hidden dark:block col-span-1 max-h-12 w-full object-contain lg:col-span-1"
								src={typescriptDark}
								alt="Tuple"
								width="158"
								height="48"
							/>
							<img
								class="dark:hidden col-span-1 max-h-12 w-full object-contain lg:col-span-1"
								src={typescript}
								alt="Tuple"
								width="158"
								height="48"
							/>
							<img
								class="hidden dark:block col-span-1 max-h-12 w-full object-contain lg:col-span-1"
								src={rustDark}
								alt="Tuple"
								width="158"
								height="48"
							/>
							<img
								class="dark:hidden col-span-1 max-h-12 w-full object-contain lg:col-span-1"
								src={rust}
								alt="Tuple"
								width="158"
								height="48"
							/>
							<img
								class="hidden dark:block col-span-1 max-h-12 w-full object-contain lg:col-span-1"
								src={duckdbDark}
								alt="Tuple"
								width="158"
								height="48"
							/>
							<img
								class="dark:hidden col-span-1 max-h-12 w-full object-contain lg:col-span-1"
								src={duckdb}
								alt="Tuple"
								width="158"
								height="48"
							/>
							<img
								class="hidden dark:block col-span-1 max-h-12 w-full object-contain lg:col-span-1"
								src={dockerDark}
								alt="Tuple"
								width="158"
								height="48"
							/>
							<img
								class="dark:hidden col-span-1 max-h-12 w-full object-contain lg:col-span-1"
								src={docker}
								alt="Tuple"
								width="158"
								height="48"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
