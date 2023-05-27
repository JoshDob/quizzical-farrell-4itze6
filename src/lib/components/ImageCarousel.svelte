<!-- src/components/ImageCarousel.svelte -->
<script>
  import { onMount, reactive } from 'svelte';
  export let carouselImages = [];

  let state = reactive({
    currentIndex: 0,
  });

  onMount(() => {
    const interval = setInterval(() => {
      state.currentIndex = (state.currentIndex + 1) % carouselImages.length;
    }, 3000);
    return () => clearInterval(interval);
  });
</script>

<style>
  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    background-color: #f8f9fa;
  }
  .carousel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

<div class="carousel">
  <img src={carouselImages[state.currentIndex]} alt="Carousel image" />
</div>
