<script lang="ts">
  import "../app.css";
  import Header from '../components/navbar.svelte';
  import Footer from '../components/footer.svelte';
  import DarkMode from "svelte-dark-mode";
  import { afterUpdate } from "svelte";

  let theme : any;
  let switchTheme : string

  if (typeof window !== 'undefined') {
    theme = localStorage.getItem("custom-theme-key") 
  }

  afterUpdate(() => {
    document.body.className = theme;
    switchTheme = theme === "dark" ? "light" : "dark";
  });
</script>

<DarkMode bind:theme  key="custom-theme-key" />

<h1>This is {theme} mode.</h1>
<p>Change the theme and reload the page.</p>

<button on:click={() => (theme = switchTheme)}>
  Switch to {switchTheme} mode
</button>

<main>
  <Header />
  <slot />
  <Footer />
</main>