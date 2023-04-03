<script>
  export let data;
</script>

<div class="post">
  <h2>post</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ratione sint,
    quam quod eaque accusamus dolorem iusto error sapiente ducimus aliquam
    placeat illo hic. Suscipit laboriosam voluptatum impedit necessitatibus rem?
  </p>
  <ul>
    {#each data.posts as post}
      <li><a href="/post/{post.id}">{post.title}</a></li>
    {/each}
  </ul>
</div>

<style>
  .post {
    text-align: center;
    display: block;
    margin: 20px auto;
  }
</style>
