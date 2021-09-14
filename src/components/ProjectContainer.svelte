<script lang="ts">
  import ProjectCard from './ProjectCard.svelte';
  export let tiles = [];
  let currentlyClicked = -1;

  function select(i) {
    currentlyClicked = i;
  }
</script>

<section class="container">
  {#each tiles as tile, i}
      <ProjectCard {...tile} />
  {/each}
</section>

<style>
  .container {
    width:1200px;
    display: flex;
    flex-direction: column;
  }

</style>
