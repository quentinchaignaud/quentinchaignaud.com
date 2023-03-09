// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		
	}

	interface Ressource {
		title: string;
		link: string;
		description: string;
		type: string
	}
}

export {};
