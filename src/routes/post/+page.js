export async function load({ fetch, params }) {

	const url = 'https://jsonplaceholder.typicode.com/posts';
	const res = await fetch(url)
	const posts = await res.json()

	console.log(posts)
	return { posts }
}