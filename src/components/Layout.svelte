<!-- src/lib/components/Layout.svelte -->
<script>
  import Navbar from './Navbar.svelte';
  import Footer from './Footer.svelte';
</script>

<style>
  .layout {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
</style>

<Navbar />

<div class="layout">
  <slot />
</div>

<Footer />
