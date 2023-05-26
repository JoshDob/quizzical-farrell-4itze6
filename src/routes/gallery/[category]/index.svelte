<script context="module">
  import { fetchImagesForCategory } from '$lib/api.js';

  export async function load({ params }) {
    const { category } = params;

    // Fetch the images for this category...
    const images = await fetchImagesForCategory(category);

    return { props: { images } };
  }
</script>

<script>
  import Navbar from '$lib/Navbar.svelte';
  import ThumbnailGrid from '$lib/ThumbnailGrid.svelte';

  export let images = [];
</script>

<Navbar />

<ThumbnailGrid {images} />
