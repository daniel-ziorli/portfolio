<script lang="ts">
  export let text = 'hello world';
  export let margin = '1rem';
</script>


<section style="margin-top: {margin}; margin-bottom: {margin};">
  <div class="scroll">
    <h1>
      {text}{text}{text}{text}{text}{text}{text}{text}{text}{text}{text}{text}{text}{text}{text}{text}{text}
    </h1>
    
    <h1>
      {text}{text}{text}{text}{text}{text}{text}{text}{text}{text}{text}{text}{text}{text}{text}{text}{text}
    </h1>
  </div>
</section>

<style>
  h1 {
    padding-left: 2rem;
    padding-right: 2rem;

    color: var(--background-color);
    -webkit-text-stroke: 1px white;
    font-weight: normal !important;
    text-transform: uppercase;
    word-spacing: 2rem;
    font-size: 4rem;
  }

  @keyframes marquee {
    0% { transform: translateX(100%);}
    100% {transform: translateX(-100%);}
  }

  @keyframes marquee-loop {
    0% { transform: translateX(0);}
    100% {transform: translateX(-200%);}
  }

  section {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .scroll{
    width: 100%;
    display: flex;
  }

  .scroll h1 {
    white-space: nowrap;
    animation: marquee 200s linear infinite;
    animation-delay: -200s;
  }

  .scroll h1:nth-child(2){
    animation: marquee-loop 200s linear infinite;
    animation-delay: -100s;
  }
</style>
