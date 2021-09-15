

<script lang="ts">
  import Navbar from '../components/NavBar.svelte';
  import { fly } from 'svelte/transition';
  import { onMount, afterUpdate } from 'svelte';

  let show = false;
  onMount(() => {
    show = true;
  });
</script>

<svelte:head>
  <title>Daniel Ziorli | Software Engineer</title>
</svelte:head>


<Navbar  />
<slot />

<style>
  :root {
    --background-color: #0e0e0e;
    --text-color: #fff;
    --purple: #7952b3;
    --yellow: #ffc107;
  }
</style>
