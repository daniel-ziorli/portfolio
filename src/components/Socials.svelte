<script lang="ts">
  import IconButton from './IconButton.svelte'
</script>


<div>
  <IconButton href="https://github.com/daniel-ziorli" src="icons/github.png" newTab={true} />
  <IconButton
    href="https://www.youtube.com/channel/UC9MyKPOkIZkxSiRsxwJbj8Q"
    src="icons/youtube.png"
    newTab={true}
  />
  <IconButton
    href="https://www.linkedin.com/in/daniel-ziorli-2443bb164"
    src="icons/linkedin.png"
    newTab={true}
  />
</div>


<style>
  div {
    display: flex;
  }
</style>