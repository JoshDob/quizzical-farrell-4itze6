<script>
  // Define the navigation links
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    // Add more links as needed...
  ];
</script>

<style>
  nav {
    display: flex;
    justify-content: space-around;
    padding: 1em;
    background-color: #f8f8f8;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  a:hover {
    color: #666;
  }
</style>

<nav>
  <ul>
    {#each links as link}
      <li><a href={link.href}>{link.name}</a></li>
    {/each}
  </ul>
</nav>
