<script>
	import Media from "./media.svelte";

	let {
		name = "Game Name",
		version = "1.0",
		date = "Recently Updated",
		description = "",
		notice = "",
		itchLink = "",
		githubLink = "",
		media = [],
		changelog = []
	} = $props();
</script>

<article class="blog-container">
	<header class="blog-header">
		<div class="meta-row">
			<span class="badge">Version {version}</span>
			<span class="date">{date}</span>
		</div>
		<h1>{name}</h1>
	</header>

	<Media {media} />

	<div class="action-bar">
		{#if itchLink}
			<a href={itchLink} target="_blank" rel="noreferrer" class="btn btn-primary">
				<ion-icon name="game-controller-outline"></ion-icon>
				Play on Itch.io
			</a>
		{/if}
		{#if githubLink}
			<a href={githubLink} target="_blank" rel="noreferrer" class="btn btn-secondary">
				<ion-icon name="logo-github"></ion-icon>
				Source Code
			</a>
		{/if}
	</div>

	{#if notice}
		<div class="notice-callout">
			<span class="notice-icon">!</span>
			<p>{@html notice}</p>
		</div>
	{/if}

	<div class="blog-content">
		{@html description}
	</div>

	<hr class="divider" />

	{#if changelog.length > 0}
		<section class="dev-log">
			<h2>Updates</h2>
			
			<div class="changelog-list">
				{#each changelog as log, index}
					<details class="version-entry" open={index === 0}>
						<summary class="version-summary">
							<div class="version-meta">
								<span class="version-number">{log.version}</span>
								{#if index === 0}
									<span class="version-badge">Latest</span>
								{/if}
							</div>
							<span class="toggle-icon">▼</span>
						</summary>

						<div class="version-details">
							<ul class="changes-list">
								{#each log.changes as change}
									<li>
										<span class="tag {change.tagClass}">{change.tag}</span>
										<span class="change-text">{@html change.text}</span>
									</li>
								{/each}
							</ul>
						</div>
					</details>
				{/each}
			</div>
		</section>
	{/if}
</article>

<style>
	.blog-container {
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}

	.blog-header {
		text-align: center;
		margin-bottom: 1rem;
	}

	.meta-row {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12px;
		margin-bottom: 1rem;
	}

	.badge {
		font-size: 0.8rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #f59e0b;
		background: rgba(245, 158, 11, 0.1);
		border: 1px solid rgba(245, 158, 11, 0.25);
		padding: 4px 10px;
		border-radius: 6px;
	}

	.date {
		font-size: 0.9rem;
		color: #71717a;
		font-weight: 500;
	}

	.blog-header h1 {
		font-size: 2.8rem;
		font-weight: 800;
		letter-spacing: -0.03em;
		color: #f4f4f5;
	}

	.action-bar {
		display: flex;
		gap: 1rem;
		justify-content: center;
		margin-bottom: 2.5rem;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 10px 24px;
		border-radius: 8px;
		font-size: 1rem;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.btn-primary { background: #f59e0b; color: #09090b; }
	.btn-primary:hover { background: #d97706; transform: translateY(-2px); }
	.btn-secondary { background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); color: #f4f4f5; }
	.btn-secondary:hover { background: rgba(255, 255, 255, 0.08); border-color: rgba(255, 255, 255, 0.25); transform: translateY(-2px); }

	.notice-callout {
		display: flex;
		align-items: center;
		gap: 14px;
		background: #111115;
		border-left: 4px solid #38bdf8;
		padding: 16px 20px;
		border-radius: 0 8px 8px 0;
		margin-bottom: 2rem;
		font-size: 0.95rem;
		color: #d4d4d8;
	}

	.notice-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 24px; height: 24px;
		border-radius: 50%;
		background: rgba(56, 189, 248, 0.15);
		color: #38bdf8;
		font-weight: 700;
		flex-shrink: 0;
	}

	:global(.blog-content) {
		font-size: 1.1rem;
		line-height: 1.75;
		color: #d4d4d8;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	:global(.blog-content p) { margin: 0; }
	:global(.blog-content h3) { color: #f4f4f5; font-size: 1.5rem; margin-top: 1rem; }

	.divider {
		border: 0;
		height: 1px;
		background: rgba(255, 255, 255, 0.1);
		margin: 4rem 0;
	}

	.dev-log h2 {
		font-size: 1.8rem;
		color: #f4f4f5;
		margin-bottom: 2rem;
	}

	.changelog-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.version-entry {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 12px;
		overflow: hidden;
	}

	.version-summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.25rem;
		cursor: pointer;
		user-select: none;
		list-style: none;
	}

	.version-summary::-webkit-details-marker {
		display: none;
	}

	.version-meta {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.version-number {
		font-size: 1.1rem;
		font-weight: 700;
		color: #f4f4f5;
	}

	.version-badge {
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: #10b981;
		background: rgba(16, 185, 129, 0.12);
		border: 1px solid rgba(16, 185, 129, 0.3);
		padding: 2px 7px;
		border-radius: 4px;
	}

	.toggle-icon {
		font-size: 0.75rem;
		color: #71717a;
		transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.version-entry[open] .toggle-icon {
		transform: rotate(180deg);
	}

	.version-details {
		padding: 0 1.25rem 1.25rem;
		border-top: 1px solid rgba(255, 255, 255, 0.04);
		padding-top: 1.25rem;
	}

	.version-entry[open] .version-details {
		animation: expandDetails 0.24s cubic-bezier(0.16, 1, 0.3, 1);
	}

	@keyframes expandDetails {
		from { opacity: 0; transform: translateY(-6px); }
		to { opacity: 1; transform: translateY(0); }
	}

	.changes-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}

	.changes-list li {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		font-size: 0.95rem;
		color: #a1a1aa;
		line-height: 1.5;
	}

	.tag {
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		padding: 3px 6px;
		border-radius: 4px;
		min-width: 65px;
		text-align: center;
		flex-shrink: 0;
		margin-top: 2px;
	}

	:global(.tag-feature) { color: #38bdf8; background: rgba(56, 189, 248, 0.1); }
	:global(.tag-fix) { color: #a78bfa; background: rgba(167, 139, 250, 0.1); }
	:global(.tag-balance) { color: #f472b6; background: rgba(244, 114, 182, 0.1); }
	:global(.tag-change) { color: #ffffff; background: rgba(244, 114, 182, 0.1); }
	:global(.tag-removal) { color: #ff0000; background: rgba(244, 114, 182, 0.1); }

	@media (max-width: 600px) {
		.action-bar { flex-direction: column; }
		.btn { width: 100%; justify-content: center; }
		.blog-header h1 { font-size: 2.2rem; }
	}
</style>