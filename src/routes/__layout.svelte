

<script lang="ts">
  import Navbar from '../components/NavBar.svelte';
  import Footer from '../components/Footer.svelte';
  import { fly } from 'svelte/transition';
  import { onMount, afterUpdate } from 'svelte';

  let show = false;
  onMount(() => {
    show = true;
  });
</script>

<svelte:head>
  <title>Daniel Ziorli - Software Engineer</title>
  <meta name="description" content="Hi I'm Daniel Ziorli; Full stack developer, software engineer and game developer. I create clean and scalable code and absolutely love it." />
  <meta name="keywords" content="Daniel, Ziorli, Daniel Ziorli, programmer, software engineer, software developer, coder" />
  <meta name="author" content="Daniel Ziorli" />
  <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
  <link rel="manifest" href="favicon/site.webmanifest">
</svelte:head>


<Navbar  />
<slot />

<Footer />

<style>
  :root {
    --background-color: #0e0e0e;
    --text-color: #fff;
    --purple: #7952b3;
    --yellow: #ffc107;
  }
</style>
