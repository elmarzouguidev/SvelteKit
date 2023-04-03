export async function load({ fetch, params }) {
	const id = params.id;
	const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
	const res = await fetch(url)
	const post = await res.json()

	console.log(post)
	return { post }
}