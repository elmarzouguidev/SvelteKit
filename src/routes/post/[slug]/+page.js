export async function load({ fetch, params }) {
	const id = params.slug;
	const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
	const res = await fetch(url)
	const post = await res.json()

	return { post }
}