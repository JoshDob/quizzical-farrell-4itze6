<!-- src/routes/category/[id].svelte -->
<script context="module">
  import { images } from '$lib/images.js';

  export async function load({ params }) {
    const categoryImages = await images.getCategoryImages(params.id);
    return { props: { categoryImages } };
  }
</script>

<script>
  export let categoryImages = [];
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  .grid img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
</style>

<div class="grid">
  {#each categoryImages as image}
    <img src={image} alt="Category image" />
  {/each}
</div>
