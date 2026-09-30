<script>
	import '$lib/styles/form.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

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
		justify-content: center;
		align-items: center;   
		min-height: 100vh;
		background-color: black;
	}
</style>

{@render children()}
