<!-- src/components/Header.svelte -->
<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  let currentPage = '';

  onMount(() => {
    $page.path.subscribe((value) => {
      currentPage = value;
    });
  });
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #f8f9fa;
  }
  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
  nav {
    display: flex;
    gap: 20px;
  }
  a {
    color: #333;
    text-decoration: none;
  }
  a.active {
    color: #007bff;
  }
</style>

<header>
  <div class="logo">Art Gallery</div>
  <nav>
    <a href="/" class:active={$page.path === '/'}>Home</a>
    <a href="/about" class:active={$page.path === '/about'}>About</a>
    <a href="/contact" class:active={$page.path === '/contact'}>Contact</a>
  </nav>
</header>
