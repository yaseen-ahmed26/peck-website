<script>
	let { media = [] } = $props();
	let currentIndex = $state(0);

	function next() {
		currentIndex = (currentIndex + 1) % media.length;
	}

	function prev() {
		currentIndex = (currentIndex - 1 + media.length) % media.length;
	}
</script>

<div class="carousel-container">
	{#if media.length > 0}
		<div class="media-display">
			{#if media[currentIndex].type === 'video'}
				<!-- svelte-ignore a11y_media_has_caption -->
				<video src={media[currentIndex].src} controls autoplay muted loop></video>
			{:else}
				<img src={media[currentIndex].src} alt={media[currentIndex].caption || 'Game media'} />
			{/if}
			
			<div class="carousel-overlay">
				{#if media[currentIndex].caption}
					<span class="caption">{media[currentIndex].caption}</span>
				{/if}
			</div>
		</div>

		{#if media.length > 1}
			<button class="nav-btn prev" onclick={prev}>❮</button>
			<button class="nav-btn next" onclick={next}>❯</button>
			
			<div class="indicators">
				{#each media as _, i}
					<button 
						class="dot" 
						class:active={currentIndex === i} 
						onclick={() => currentIndex = i}
						aria-label="Go to slide {i + 1}"
					></button>
				{/each}
			</div>
		{/if}
	{:else}
		<div class="placeholder">No media available</div>
	{/if}
</div>

<style>
	.carousel-container {
		position: relative;
		width: 100%;
		aspect-ratio: 16/9;
		background: #09090b;
		border-radius: 12px;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.08);
		margin: 2rem 0;
	}

	.media-display { width: 100%; height: 100%; }
	.media-display img, .media-display video { width: 100%; height: 100%; object-fit: cover; }

	.carousel-overlay {
		position: absolute;
		bottom: 0; left: 0; right: 0;
		padding: 30px 20px 16px;
		background: linear-gradient(180deg, transparent 0%, rgba(9, 9, 11, 0.9) 100%);
		pointer-events: none;
	}

	.caption { font-size: 0.95rem; font-weight: 500; color: #f4f4f5; }

	.nav-btn {
		position: absolute; top: 50%; transform: translateY(-50%);
		background: rgba(9, 9, 11, 0.5); color: white;
		border: 1px solid rgba(255, 255, 255, 0.1);
		width: 36px; height: 36px; border-radius: 50%;
		cursor: pointer; display: flex; justify-content: center; align-items: center;
		backdrop-filter: blur(4px); transition: all 0.2s ease; z-index: 2;
	}

	.nav-btn:hover { background: rgba(255, 255, 255, 0.15); transform: translateY(-50%) scale(1.05); }
	.prev { left: 12px; } .next { right: 12px; }

	.indicators {
		position: absolute; bottom: 16px; left: 50%;
		transform: translateX(-50%); display: flex; gap: 6px; z-index: 2;
	}

	.dot {
		width: 8px; height: 8px; border-radius: 50%; border: none;
		background: rgba(255, 255, 255, 0.2); cursor: pointer; padding: 0; transition: background 0.2s ease;
	}

	.dot.active { background: #f59e0b; }
	.placeholder { display: flex; height: 100%; align-items: center; justify-content: center; color: #71717a; }
</style>