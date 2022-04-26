<script lang="ts">
    import IconButton from './IconButton.svelte'
</script>
<a href="https://drive.google.com/file/d/1esxQ-IxxpMlBT3s8pQ57vXqUhrypaMUV/view?usp=sharing" target="target=_blank" rel="noopener noreferrer">
    <div>
        <h1>Resume</h1>
        <img src="icons/arrow-orange.png" alt="arrow" width="16px" height="16px" />
    </div>
</a>



<style>
    div {
        display: flex;
        align-items: center;
    }
    h1 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: normal;
    text-decoration: none;
    color: var(--yellow, white);
    margin: 0;
    padding-top: 0;
    padding-right: 10px;

  }
  a {
    width: 100px;
    justify-self: flex-start;
    text-decoration: none;
    transition: .1s;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  a:hover {
      transform: translateX(5px);
  }
</style>