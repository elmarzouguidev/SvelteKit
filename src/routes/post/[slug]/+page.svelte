<script>
  export let data;
</script>

<div class="post">
  <h1>{data.post.title}</h1>
  <p>
    {data.post.body}
  </p>

</div>

<style>
  .post {
    text-align: center;
    display: block;
    margin: 20px auto;
  }
</style>
