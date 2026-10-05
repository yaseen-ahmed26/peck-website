<script>
	import landingImage from '$lib/images/landing_image.png';
</script>

<div class="landing-container">
	<section class="hero-grid">
		<div class="hero-copy">
			<span class="badge">Peck • v3.0</span>
			<h1>Welcome to Peck</h1>
			<p class="lead">
				A hobby project with games that have cloud saves and cross progression. Try out one of the games on our Itch.io and save your data.
			</p>

			<div class="notice-callout">
				<span class="notice-icon">i</span>
				<p>
					A real email is <strong>not required</strong> for accounts. Any email address (e.g. <code>test@test.com</code>) will work so long as it has an @.
				</p>
			</div>

			<div class="btn-group">
				<a href="https://corporalchicken.itch.io" target="_blank" rel="noreferrer" class="btn btn-primary">
					Download on Itch.io
				</a>
				<a href="https://github.com/yaseen-ahmed26" target="_blank" rel="noreferrer" class="btn btn-secondary">
					Source on GitHub
				</a>
			</div>
		</div>

		<div class="hero-preview">
			<div class="preview-card">
				<img src={landingImage} alt="Preview of Biscuit Game" class="preview-img" />
				<div class="preview-overlay">
					<span class="game-tag">Biscuit</span>
					<span class="game-status"></span>
				</div>
			</div>
		</div>
	</section>

	<section class="updates-section">
		<div class="section-header">
			<h2>Changelog</h2>
			<p>Recent updates to our games, server and website.</p>
		</div>

		<div class="changelog-list">
			<details class="version-entry">
				<summary class="version-summary">
					<div class="version-meta">
						<span class="version-number">Version 3.0</span>
						<span class="version-badge">Latest</span>
					</div>
					<span class="toggle-icon">▼</span>
				</summary>

				<div class="version-details">
					<div class="log-group">
						<span class="tag tag-game">Game</span>
						<p>Added support for a second title on the platform: <em>Rock Paper Revamped (RPR)</em>.</p>
					</div>

					<div class="log-group">
						<span class="tag tag-server">Server</span>
						<p>Refactored the server to support multiple game saves rather than just 1.</p>
					</div>

					<div class="log-group">
						<span class="tag tag-web">Website</span>
						<p>Remade the website using SvelteKit and also redesigned it completely.</p>
					</div>
				</div>
			</details>
		</div>
	</section>
</div>

<style>
	.landing-container {
		width: 100%;
		max-width: 1100px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 3.5rem;
	}

	.hero-grid {
		display: grid;
		grid-template-columns: 1.35fr 0.8fr;
		gap: 2.5rem;
		align-items: center;
		background: #111115;
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 20px;
		padding: 3rem;
		box-shadow: 0 16px 36px -12px rgba(0, 0, 0, 0.6);
	}

	.hero-copy {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.badge {
		align-self: flex-start;
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #60a5fa;
		background: rgba(59, 130, 246, 0.12);
		border: 1px solid rgba(59, 130, 246, 0.25);
		padding: 4px 10px;
		border-radius: 6px;
	}

	h1 {
        font-size: 1.85rem;
        line-height: 1.25;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: #f4f4f5;
        white-space: nowrap;
    }

	.lead {
		font-size: 1.05rem;
		line-height: 1.6;
		color: #a1a1aa;
	}

	.notice-callout {
        display: flex;
        align-items: center;
        gap: 14px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px dashed rgba(255, 255, 255, 0.14);
        border-radius: 10px;
        padding: 12px 16px;
        font-size: 0.9rem;
        line-height: 1.5;
        color: #d4d4d8;
    }

    .notice-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(56, 189, 248, 0.15);
        border: 1px solid rgba(56, 189, 248, 0.3);
        color: #38bdf8;
        font-size: 0.75rem;
        font-weight: 700;
        font-family: monospace;
        flex-shrink: 0;
    }

	.notice-callout code {
		background: rgba(255, 255, 255, 0.08);
		padding: 2px 6px;
		border-radius: 4px;
		font-size: 0.85em;
	}

	.btn-group {
		display: flex;
		gap: 0.85rem;
		margin-top: 0.5rem;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 10px 20px;
		border-radius: 8px;
		font-size: 0.95rem;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.18s ease;
	}

	.btn-primary {
		background: #f59e0b;
		color: #09090b;
	}

	.btn-primary:hover {
		background: #d97706;
		transform: translateY(-1px);
	}

	.btn-secondary {
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.12);
		color: #f4f4f5;
	}

	.btn-secondary:hover {
		background: rgba(255, 255, 255, 0.08);
		border-color: rgba(255, 255, 255, 0.25);
		transform: translateY(-1px);
	}

	.hero-preview {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.preview-card {
		position: relative;
		width: 100%;
		max-width: 320px;
		aspect-ratio: 3/4;
		border-radius: 14px;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: 0 12px 28px rgba(0, 0, 0, 0.5);
	}

	.preview-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.preview-overlay {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 12px 14px;
		background: linear-gradient(180deg, transparent 0%, rgba(9, 9, 11, 0.9) 100%);
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.8rem;
	}

	.game-tag {
		font-weight: 700;
		color: #f4f4f5;
	}

	.game-status {
		color: #a1a1aa;
	}

	.updates-section {
		background: #111115;
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 20px;
		padding: 2.5rem 3rem;
	}

	.section-header {
		margin-bottom: 1.75rem;
	}

	.section-header h2 {
		font-size: 1.5rem;
		font-weight: 700;
		letter-spacing: -0.01em;
		color: #f4f4f5;
		margin-bottom: 0.35rem;
	}

	.section-header p {
		color: #71717a;
		font-size: 0.95rem;
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
		padding: 1rem 1.25rem;
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
		font-size: 1rem;
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
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
		border-top: 1px solid rgba(255, 255, 255, 0.04);
		padding-top: 1rem;
	}

	.log-group {
		display: flex;
		align-items: baseline;
		gap: 12px;
		font-size: 0.92rem;
		line-height: 1.5;
		color: #d4d4d8;
	}

	.tag {
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		padding: 2px 6px;
		border-radius: 4px;
		min-width: 60px;
		text-align: center;
		flex-shrink: 0;
	}

	.tag-game {
		color: #38bdf8;
		background: rgba(56, 189, 248, 0.1);
		border: 1px solid rgba(56, 189, 248, 0.25);
	}

	.tag-server {
		color: #a78bfa;
		background: rgba(167, 139, 250, 0.1);
		border: 1px solid rgba(167, 139, 250, 0.25);
	}

	.tag-web {
		color: #f472b6;
		background: rgba(244, 114, 182, 0.1);
		border: 1px solid rgba(244, 114, 182, 0.25);
	}

	@media (max-width: 860px) {
		.hero-grid {
			grid-template-columns: 1fr;
			padding: 2rem;
		}

		.hero-preview {
			order: -1;
		}

		.preview-card {
			max-width: 240px;
		}

		.updates-section {
			padding: 1.75rem;
		}

		.log-group {
			flex-direction: column;
			gap: 4px;
		}
	}

    .version-entry[open] .version-details {
        animation: expandDetails 0.24s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes expandDetails {
        from {
            opacity: 0;
            transform: translateY(-6px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>