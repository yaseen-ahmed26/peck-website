<script>
// @ts-nocheck

	import '$lib/styles/form.css';
	import Navigation from '$lib/templates/navigation.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import { automaticLogin } from '$lib/api.svelte';
	import { onMount } from 'svelte';
	import 'toastify-js/src/toastify.css';
	import { page } from '$app/state';

	let { children } = $props();

	const titles = {
    	"/": "Home - Peck",
        "/login": "Login - Peck",
        "/register": "Register - Peck",
        "/details": "Account Details - Peck",
        "/code": "Link Game - Peck",
        "/details": "Delete Account - Peck"
    };

    let pageTitle = $derived(titles[page.url.pathname]);

	onMount(() => {
		automaticLogin();
	});
</script>

<svelte:head>
	<!-- <link rel="icon" href={favicon} /> -->
	<title>{pageTitle}</title>
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
		color: #f4f4f5;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
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
		padding: 28px 16px;
		border-top: 1px solid rgba(255, 255, 255, 0.06);
	}

	footer p{
		font-size: 0.85rem;
		color: #52525b;
		letter-spacing: 0.02em;
	}
</style>
