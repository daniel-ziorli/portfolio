<script lang="ts">
  import Socials from './Socials.svelte';
  import Resume from './Resume.svelte';
</script>

<div>
  <h2>
    contact me at <a href="mailto:daniel.ziorli@gmail.com?subject=Hi!">daniel.ziorli@gmail.com</a>
  </h2>
  <Socials />
  <Resume />
</div>

<style>
  h1 {
    text-align: center;
    margin: 0;
  }
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  a {
    text-decoration: underline;
    color: var(--yellow, yellow);
  }
  div {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
