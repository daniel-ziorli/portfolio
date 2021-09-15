<script context="module">
  export const load = ({error, status}) => {
    return {
      props: {
        error,
        status
      }
    }
  }
</script>

<script lang="ts">
  export let error;
  export let status;
</script>

<div>
  <h1>{error.name} {status}</h1>
  <h1>{error.message}</h1>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    width: 100%;
    height: 100vh;
  }
</style>
