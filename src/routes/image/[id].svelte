<!-- src/routes/image/[id].svelte -->
<script context="module">
  import { images } from '$lib/images.js';

  export async function load({ params }) {
    const imageDetail = await images.getImageDetail(params.id);
    return { props: { imageDetail } };
  }
</script>

<script>
  export let imageDetail = null;
</script>

<style>
  .detail {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    padding: 20px;
    background-color: #f8f9fa;
  }
  .detail img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
</style>

<div class="detail">
  <img src={imageDetail?.url} alt={imageDetail?.title} />
</div>
