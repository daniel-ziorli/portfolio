<script lang="ts">
  export let size = 48;
  export let padding = "10px";
  export let src;
  export let alt = 'button';
  export let href;
  export let newTab = false;
</script>

<div style="padding: {padding}; width={size}; height={size};">
  <a {href} title={href} target={newTab === true ? 'target=_blank' : ''} rel="noopener noreferrer">
    <img {src} {alt} width={size} height={size} />
  </a>
</div>


<style>
  a {
    width: 100%;
    height: 100%;

  }
  div {
    transition: .1s;
  }
  div:hover {
    transform: translateY(-5px);
  }

</style>
