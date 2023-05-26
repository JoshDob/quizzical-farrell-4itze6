<!-- src/routes/contact.svelte -->
<script>
  let name = '';
  let email = '';
  let message = '';

  function handleSubmit() {
    // Replace this with the actual form submission logic
    console.log({ name, email, message });
    name = '';
    email = '';
    message = '';
  }
</script>

<style>
  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  .contact form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
  }
  .contact form input,
  .contact form textarea {
    margin-bottom: 20px;
    padding: 10px;
    width: 100%;
  }
  .contact form button {
    padding: 10px;
  }
</style>

<div class="contact">
  <form on:submit|preventDefault={handleSubmit}>
    <input bind:value={name} type="text" placeholder="Name" required />
    <input bind:value={email} type="email" placeholder="Email" required />
    <textarea bind:value={message} placeholder="Message" required></textarea>
    <button type="submit">Submit</button>
  </form>
</div>
