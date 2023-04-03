<script>
  import Logo from "$lib/logo.svelte";
  import "../style/global.css";
</script>

<header>
  <Logo Title="FACTURIS" />
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/post">Post</a>
  </nav>
</header>
<main>
  <slot />
</main>
<footer>2023 facturis svelte</footer>

<style>
  header {
    display: flex;
    justify-content: center;
  }
  main {
    max-width: 960px;
    margin: 20px auto;
  }
  footer {
    text-align: center;
  }
</style>
