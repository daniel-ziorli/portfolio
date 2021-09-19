<script lang="ts">
  import Blob from './Blob.svelte';
</script>

<div class="hero-container">
  <h1>Hey, I'm </h1><h1>Daniel.👋</h1>

  <div class="hero-text">
    <p>
      A multidisciplinary developer with a passion for creating clean code and amazing experiences
    </p>
  </div>

  <div class="blob">
    <Blob color="#7952b3"/>
  </div>
</div>

<style>
  .hero-container {
    max-width: 1200px;
    width: 90%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    z-index: 1000;
  }
  .hero-text {
    justify-self: flex-start;
    text-align: center;
    max-width: 520px;
  }
  .blob {
    position: absolute;
    transform: translateX(50%) translateY(50%);
    display: block;
    z-index: -1000;
  }

  h1 {
    margin: 0;
    text-align: center;
    font-size: 3rem;
    font-weight: 600 !important;
  }
  p {
    text-align: center;
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 660px) {
    .hero-container {
      height: 95vh;
      margin-bottom: 5vh;
    }
  }
</style>
