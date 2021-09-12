<script lang="ts">
  export let title;
  export let description;
  export let src;
  export let href;
  export let pills;
  export let wide = false;
  export let tall = false;

</script>

<div 
  class="tile"
  style="background-image: url({src});">
  <div class="content">
    {title}
  </div>
</div>

<style>
  .tile {
    border-radius: 16px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
  }

  .content {
    padding: 1rem;
  }
</style>
