<script lang="ts">
    export let size = 32;
    export let src;
    export let alt = "button";
    export let href;
    export let newTab = false;
</script>

<a href={href} target="{newTab === true ? "target=_blank" : ""}" rel="noopener noreferrer">
    <img src={src} alt={alt} width={size} height={size}>
</a>


<style>

    a {
        width: 100%;
        height: 100%;

    }
</style>
