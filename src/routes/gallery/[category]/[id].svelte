<script context="module">
  import { fetchImage } from '$lib/api.js';

  export async function load({ params }) {
    const { category, id } = params;

    // Fetch the image...
    const image = await fetchImage(category, id);

    return { props: { image } };
  }
</script>

<script>
  import Navbar from '$lib/Navbar.svelte';

  export let image;
</script>

<Navbar />

<main>
  <img src={image.url} alt={image.alt} />
  <h1>{image.title}</h1>
  <p>{image.description}</p>
</main>
