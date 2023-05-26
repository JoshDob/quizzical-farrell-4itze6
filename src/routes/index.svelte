<script>
  import Navbar from '$lib/Navbar.svelte';
  import Carousel from '$lib/Carousel.svelte';

  let images = [
    { id: 1, url: '/static/images/image1.jpg', alt: 'Image 1' },
    { id: 2, url: '/static/images/image2.jpg', alt: 'Image 2' },
    // Add more images as needed...
  ];
</script>

<Navbar />

<Carousel {images} />
