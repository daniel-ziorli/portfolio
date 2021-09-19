<script lang="ts">
  import IconButton from './IconButton.svelte';

  export let title;
  export let description;
  export let href;
  export let date;
  export let pills;
</script>

<article class="card no-select">
  <header>
    <p>{date}</p>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </header>

  <footer >
      <p style="border: transparent; justify-self: flex-start">skills</p>
      <div style="display: flex; flex: 1; width: 100%;">
        <div class="pills">
          {#each pills as pill}
            <p>{pill}</p>
          {/each}
        </div>
        <div class="arrow"><IconButton href={href} size={32} src="icons/arrow.png"/></div>
      </div>
  </footer>
  
</article>

<style>
  .card {
    display: flex;
    position: relative;
    flex-direction: column;
    height: 350px;
    width: 250px;
    min-width: 250px;
    padding: 1.5rem;
    
    border-radius: 16px;
    background: #17141d;
    box-shadow: -1rem 0 3rem #0e0e0e;
    word-wrap: break-word;
  }

  h1 {
    font-size: 1.5rem;
    color: var(--yellow);
    margin: 0;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 0.8rem;
    color: grey;
  }

  header {
    flex: 1;
  }

  h2 {
    font-size: 1rem;
    font-weight: normal;
  }

  footer {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    margin-bottom: 0.5rem;
  }

  footer p {
    font-size: .8rem;
    border: 2px solid grey;
    padding: 5px;
    margin: 5px;
    border-radius: 10px;
  }

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

  .arrow {
    align-self: flex-end;
    justify-self: flex-end;
  }

  .no-select {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
