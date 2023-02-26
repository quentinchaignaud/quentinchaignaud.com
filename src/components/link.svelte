<script lang="ts">
    export let link: string;
    export let text: string;
    export let external: boolean;
</script>

{#if external}
<a href="{link}" target="_blank" rel="noreferrer" class="text-indigo-600 underline underline-offset-4 hover:no-underline">{text}</a>
{:else}
<a href="{link}" class="text-indigo-600 underline underline-offset-4 hover:no-underline">{text}</a>
{/if}