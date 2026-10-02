<script>
	import '$lib/styles/form.css';
	import Navigation from '$lib/templates/navigation.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
	<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
</svelte:head>

<Navigation/>

<main class="page">
	{@render children()}
</main>

<footer>
	<p>© 2026 Project Hatchlings</p>
</footer>

<style>
	:global(*){
		color: white;
		font-family: "Comic Sans MS";
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	:global(body){
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: black;
	}

	.page{
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 100px 20px 40px;
	}

	footer{
		text-align: center;
		font-size: 1.1rem;
		padding: 32px;
	}

	footer p{
		color: rgba(255, 255, 255, 0.369);
	}
</style>
