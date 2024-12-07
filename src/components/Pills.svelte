<script lang="ts">
  export let pills = [];
</script>

<div class="pills">
  {#each pills as pill}
    <p>{pill}</p>
  {/each}
</div>

<style>
  .pills {
    align-self: flex-start;
    justify-self: center;
    align-items: center;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    padding-right: 0.1rem;
    width: 100%;
  }
  p {
    font-size: 0.8rem;
    border: 2px solid;
    padding: 5px;
    margin: 5px;
    border-radius: 10px;
  }
</style>
