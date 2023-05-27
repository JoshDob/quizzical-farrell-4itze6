<script>
  import { push } from 'svelte-spa-router';
  export let images = [];
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1em;
  }

  .grid img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
</style>

<div class="grid">
  {#each images as image (image.id)}
    <img src={image.url} alt={image.alt} on:click={() => push(`/gallery/${image.category}/${image.id}`)} />
  {/each}
</div>
