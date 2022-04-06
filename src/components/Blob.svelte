<script lang="ts">
  import { onMount } from 'svelte';
  export let color;

  let paths = [
    'M317.4 -442.1C370.4 -398.5 344 -250.8 367.9 -130.6C391.8 -10.3 466 82.6 437.9 133.9C409.7 185.3 279.3 195 189.2 215.9C99.2 236.9 49.6 268.9 -28 307.5C-105.6 346 -211.2 391 -276.4 362C-341.5 333 -366.2 230 -404.2 127.8C-442.2 25.6 -493.6 -75.7 -458 -137.6C-422.5 -199.5 -300 -221.9 -209.2 -253.2C-118.3 -284.5 -59.2 -324.8 36.5 -375.1C132.3 -425.4 264.5 -485.7 317.4 -442.1',
    'M189.1 -221.7C278.9 -194.9 409.1 -185.1 491.3 -116.2C573.5 -47.3 607.7 80.7 544.5 146.5C481.3 212.4 320.6 216.2 213.6 229.5C106.6 242.7 53.3 265.4 -31.3 308.4C-115.8 351.4 -231.6 414.8 -301.2 389.4C-370.8 364 -394.1 249.8 -437.2 137.3C-480.3 24.8 -543.1 -86 -532.9 -190.5C-522.8 -294.9 -439.8 -393 -338.8 -416.2C-237.9 -439.4 -118.9 -387.7 -34.7 -340C49.6 -292.3 99.2 -248.5 189.1 -221.7'
  ];

  let currentPaths = [
    'M186.7 -246.5C271.9 -235.6 391.8 -234.7 442 -184.4C492.2 -134.1 472.8 -34.4 423.3 35.5C373.8 105.4 294.2 145.7 238.4 202.2C182.6 258.6 150.6 331.3 95.2 367.3C39.7 403.3 -39.2 402.7 -114.5 383.5C-189.8 364.3 -261.5 326.5 -296 267.3C-330.4 208.1 -327.5 127.4 -327.6 53.8C-327.7 -19.7 -330.8 -86.1 -316 -155C-301.1 -223.9 -268.4 -295.3 -212.8 -319.8C-157.1 -344.2 -78.6 -321.6 -13.9 -299.9C50.7 -278.2 101.4 -257.4 186.7 -246.5',
    'M276.3 -406.7C349.8 -382.6 395.5 -292.1 391.2 -206.5C386.9 -121 332.7 -40.5 314.2 40.8C295.7 122.1 313 204.1 282.2 250.5C251.4 297 172.4 307.8 103.1 308.8C33.7 309.9 -26.1 301.3 -98.4 297.3C-170.6 293.3 -255.4 294 -329.3 257.9C-403.2 221.8 -466.4 149 -458.5 77.6C-450.7 6.2 -371.8 -63.8 -317 -128.6C-262.3 -193.5 -231.7 -253.2 -182.9 -288.6C-134.1 -324 -67 -335 17.2 -361.7C101.4 -388.4 202.7 -430.8 276.3 -406.7'
  ];

  let duration = 2000;
  let tween;
  let hasMounted = false;

  onMount(async () => {
    if (hasMounted) return;

    hasMounted = true;
    const obj = await import('kute.js');
    tween = obj.default;

    updateBlob();
  });

  function updateBlob() {
    tween
      .fromTo(
        '#frame0',
        { path: '#frame0' },
        { path: '#frame1' },
        {
          duration: duration,
          easing: 'easingCubicInOut',
          onComplete: () => {
            let rand = Math.floor(Math.random() * paths.length);
            currentPaths.push(paths[rand]);
            paths.splice(rand, 1);

            paths.push(currentPaths[0]);
            currentPaths = [...currentPaths.slice(0, 0), ...currentPaths.slice(0 + 1)];
            setTimeout(function () {
              updateBlob();
            }, 10);
          }
        }
      )
      .start();
  }
</script>

<svg
  id="visual"
  viewBox="0 0 12 12"
  width="11"
  height="11"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  version="1.1"
>
  {#each currentPaths as p, i}
    {#if i == 0}
      <g transform="translate(0 0)">
        <path id="frame{i}" d={p} fill={color} />
      </g>
    {:else}
      <g transform="translate(0 0)" style="visibility: hidden;">
        <path id="frame{i}" d={p} fill={color} />
      </g>
    {/if}
  {/each}
</svg>

<style>
  svg {
    overflow: visible;
  }

  @media only screen and (max-width: 800px) {
    svg {
      transform: scale(0.6);
    }
  }
  @media only screen and (max-width: 500px) {
    svg {
      transform: scale(0.4);
    }
  }
</style>
