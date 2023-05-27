<!-- src/lib/components/Navbar.svelte -->
<script>
  import { Link } from 'svelte-routing';
</script>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #f8f9fa;
  }
  .navbar a {
    margin-right: 20px;
    color: #333;
    text-decoration: none;
  }
  .navbar a:last-child {
    margin-right: 0;
  }
</style>

<div class="navbar">
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
</div>
