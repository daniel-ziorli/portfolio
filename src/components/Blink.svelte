<script lang="ts">
  import { onMount } from 'svelte';
  let element;
  let isVisibile;
  let running;
  export let interval = 500;

  onMount(async () => {
    if (running) return;
    start();
  });

  function start() {
    if (running == false) running = true;
    setTimeout(function () {
      isVisibile = !isVisibile;
      element.style.visibility = isVisibile ? 'visible' : 'hidden';
      start();
    }, interval);
  }
</script>

<span bind:this={element}>
  <slot />
</span>
