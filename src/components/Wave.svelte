<script lang="ts">
  export let svg;
  export let flip = false;
</script>

{#if flip}
  <div style="background-image: url({svg});" class="flip" />
{:else}
  <div style="background-image: url({svg});" />
{/if}

<style>
  div {
    padding: 0;
    margin: 0;
    aspect-ratio: 930/300;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    
  }
  @supports not (aspect-ratio: auto) {
    div {
      object-fit: cover;
      height: 320px;
    }
  }
  .flip {
    transform: rotate(180deg);
  }
</style>
