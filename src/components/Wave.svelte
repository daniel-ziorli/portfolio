
<script lang="ts">
    export let svg;
    export let flip = false;
</script>

{#if flip}
    <div style="background-image: url({svg});" class="flip" ></div> 
{:else}
    <div style="background-image: url({svg});" ></div> 
{/if}

<style>
    div {
        padding: 0;
        margin: 0;
        aspect-ratio: 930/300;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .flip {
        transform: rotate(180deg);
    }

</style>