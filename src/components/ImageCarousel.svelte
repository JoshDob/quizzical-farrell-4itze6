<script>
  import { onMount } from 'svelte';

  export let images = [];

  let currentIndex = 0;

  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
    }, 3000);

    return () => clearInterval(interval);
  });
</script>

<style>
  #carousel {
    width: 100%;
    height: 50vh;
    overflow: hidden;
    position: relative;
  }

  #carousel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    transition: opacity 1s;
  }
</style>

<div id="carousel">
  {#each images as image, i (image.id)}
    <img src={image.url} alt={image.alt} style="opacity: {i === currentIndex ? 1 : 0}">
  {/each}
</div>
