<script>
  import Navbar from '$lib/Navbar.svelte';
  import ThumbnailGrid from '$lib/ThumbnailGrid.svelte';

  let categories = [
    { id: 1, name: 'Botany', images: ['/static/images/botany1.jpg', '/static/images/botany2.jpg'] },
    { id: 2, name: 'Animals', images: ['/static/images/animals1.jpg', '/static/images/animals2.jpg'] },
    // Add more categories as needed...
  ];
</script>

<Navbar />

{#each categories as category}
  <h2>{category.name}</h2>
  <ThumbnailGrid {images} />
{/each}
