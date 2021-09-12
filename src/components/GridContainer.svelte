<script lang="ts">
  import GridTile from './GridTile.svelte';
  export let tiles = [];
  let currentlyClicked = -1;

  function select(i) {
    currentlyClicked = i;
  }
</script>

<section class="grid-container">
  {#each tiles as tile, i}
    <div
      
      on:click={() => select(i)}
    >
      <GridTile {...tile} />
    </div>
  {/each}
</section>

<style>
  .grid-container {
    width:1200px;
    margin: 20px;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-auto-rows: 500px;
  }

  @media screen and (max-width: 1200px) {
    .grid-container {
      width: 800px;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-auto-rows: 300px;
    }
  }
</style>
