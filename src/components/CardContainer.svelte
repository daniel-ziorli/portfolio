<script lang="ts">
  import Card from './Card.svelte';
  export let cards = [];

  let currentlyClicked = -1;

  let container;
  let mouseDown = false;
  let startX;
  let scrollLeft;

  function handleMouseDown(e) {
    mouseDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    e.target.scrollIntoView({behavior: "smooth",inline: "center", block: "center"})
    setTimeout(function () {
      e.target.scrollIntoView({behavior: "smooth",inline: "center", block: "center"})
    }, 110);

  }

  function handleMouseUp(e) {
    mouseDown = false;
  }

  function handleMouseMove(e) {
    if (!mouseDown) return;
    const x = e.pageX - container.offsetLeft;
    const walk = x - startX;
    container.scrollLeft = scrollLeft - walk;
  }

  function select(e, i) {
    console.log(container);
    
    currentlyClicked = i;
  }

</script>

<section class="card-container" bind:this={container}>
  {#each cards as c, i}
    <div
      on:mousedown={handleMouseDown}
      on:mouseup={handleMouseUp}
      on:mousemove={handleMouseMove}
      on:click={(e) => select(e, i)}
      on:mouseover={(e) => select(e, i)}
      on:focus={(e) => select(e, i)}
      class="card 
      {i == currentlyClicked ? 'selected' : ''}
      {i > currentlyClicked && currentlyClicked != -1 ? 'shift-right' : ''}
      {i == cards.length - 1 && currentlyClicked != -1 ? 'last' : ''}
      {i == 0 && currentlyClicked != -1 ? 'first' : ''}"
    >
      <Card {...c}/>
    </div>
  {/each}
</section>

<div>

</div>

<style>
  .card-container {
    display: flex;
    overflow-x: scroll;

    padding: 30px;
    z-index: 1000;

    -ms-overflow-style: none;
    scrollbar-width: none;
  }


  .card {
    overflow-y: visible;
    transition: 0.1s;
  }

  .selected {
    transform: translatey(-1rem);
  }

  .shift-right {
    transform: translateX(130px);
  }

  .card:not(:first-child) {
    margin-left: -130px;
  }

  .last {
    padding-right: 100px;
  }

  .first {
    padding-left: 100px;
  }

  .card-container::-webkit-scrollbar {
    display: none;
  }
</style>
