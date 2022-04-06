<script lang="ts">
  export let title;
  export let description;
  export let src;
  export let href;
  export let pills;
  export let alignment = 'center';
  export let newtab = false;
</script>

<a {href} title={href} target={newtab === true ? 'target=_blank' : ''} rel="noopener noreferrer">
  <section>
    <div class="image" style="background-image: url({src}); background-position: {alignment};" />
    <div class="tile">
      <div class="content">
        <h1>
          {title}
        </h1>
        <h2>
          {description}
        </h2>
      </div>
      <footer>
        <p class="skill-header">skills</p>
        <div class="pills">
          {#each pills as pill}
            <p>{pill}</p>
          {/each}
        </div>
      </footer>
    </div>
  </section>
</a>

<style>
  section {
    width: 95vw;
    max-width: 1200px;
    min-height: 500px;
    border-radius: 16px;
    display: flex;
    margin: 1rem;
    margin-left: auto;
    margin-right: auto;
    transition: .2s;
  }
  section:hover {
    transform: translateX(10px) translateY(-10px);
  }
  .image {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 16px 0 0 16px;
    width: 50%;
  }
  .tile {
    margin: 0;
    width: 50%;
    background-color: #17141d;
    border-radius: 0 16px 16px 0;
    display: flex;
    flex-direction: column;
  }
  .content {
    padding: 2rem;
    padding-bottom: 0;
    flex: 1;
  }
  a {
    text-decoration: none;
    color: white;
  }
  h1 {
    margin: 0;
    font-size: 2rem;
    color: var(--yellow);
  }
  h2 {
    font-size: 1.4rem;
    margin-bottom: 0;
    font-weight: normal;
  }
  footer {
    justify-self: flex-end;
    padding-bottom: 3rem;
  }
  .pills {
    padding-inline: 2rem;
    display: flex;
    flex-wrap: wrap;
  }
  p {
    font-size: 0.8rem;
    border: 2px solid grey;
    padding: 5px;
    margin: 5px;
    border-radius: 10px;
    text-align: center;
  }
  .skill-header {
    border: transparent;
    text-align: left;
    padding-left: 2rem;
    margin-left: 5px;
  }

  @media only screen and (max-width: 900px) {
    section {
      width: 95vw;
      flex-direction: column;
      height: auto;
      margin: 0.5rem;
      margin-left: auto;
      margin-right: auto;
    }
    .tile {
      width: 100%;
      border-radius: 0 0 16px 16px;
    }
    .image {
      width: 100%;
      height: 400px;
      border-radius: 16px 16px 0 0;
    }
    .content {
      padding: 1rem;
    }
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1rem;
    }
    footer {
      padding: 1rem;
    }
    .pills {
      padding: 0;
    }
    .skill-header {
      border: transparent;
      text-align: left;
      padding-left: 0;
      margin-left: 5px;
    }
  }

  @media only screen and (max-width: 700px) {
    .image {
      height: 300px;
    }
  }

  @media only screen and (max-width: 600px) {
    .image {
      height: 200px;
    }
  }
</style>
