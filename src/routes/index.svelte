<!-- src/routes/index.svelte -->
<script context="module">
  import { images } from '$lib/images.js';

  export async function load() {
    const carouselImages = await images.getCarouselImages();
    return { props: { carouselImages } };
  }
</script>

<script>
  import Carousel from '$lib/components/Carousel.svelte';

  export let carouselImages = [];
</script>

<Carousel {carouselImages} />
