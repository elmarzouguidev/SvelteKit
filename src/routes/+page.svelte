<script>

  let username = "abdelghafour";
  const updateUsername = () => {
    username = "newabdo";
  };
</script>

<div class="index">
  <h1>Welcome {username}</h1>
  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>
  <button on:click={updateUsername}>change username</button>
  <input type="text" bind:value={username} />
  <a href="/about"> About</a>
  <a href="/post"> Post</a>
</div>

<style>
  .index {
    text-align: center;
    display: block;
    margin: 20px auto;
  }
</style>
