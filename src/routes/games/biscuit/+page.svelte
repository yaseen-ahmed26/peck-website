<script>
	import GamePage from '$lib/templates/game-page.svelte';
	import LandingPage from '$lib/images/landing_image.png'

	const gameData = {
		name: "Biscuit",
		version: "2.0",
		date: "October 5th, 2026",
		description: `
			<p>Biscuit was the first game made for the Peck platform. It had 1 simple goal: testing out cloud saves and cross progression. Funnily enough, the original platform was also called Biscuit.. so the game and the platform shared the same name.</p>
			
			<h3>Premise</h3>
			<p>It is a simple cookie clicker, except without all the passive generation. You click a button, get biscuits and buy upgrades. That's really it, not many features but it was focused on being a test for the backend.</p>

			<h3>Data Saving</h3>
			<p>This was also my real first attempt at making a save system in Godot, there's a few things I had to consider. First was JSON or Godot config files? Well I picked Godot's config files, they're native to the platform and can hold a much greater range of
				information. For example, if I wanted to store a Vector2, I could and when it was loaded from the config file, it remained as a Vector2. No additional conversions were needed unlike JSON.</p>
			<p>The next issue was spamming the server. It saves to a local file first before sending it to the server. However before it used to send it to the server every 30s, and as it was a clicker gamne, saving happened frequently. So the server would recieve 120 requests per hour, just from a single player. To fix this, instead of doing it every local autosave, it did it every 3 minutes.
				This cut down requests by 100, down to 20 per hour. It also autosaves when you quit the game but does not do it if you leave exactly 3 minutes after the last. This was to prevent double autosave.</p>
			<p>The final issue was what exactly do we save. It's a cookie clicker game, there are lot of stats used for different things, I believe there was 20 different stats stored. This was when the server only assumed 1 game, so the database had hardcoded columns for each stat. I didn't want to have 20 different columns for the stats, on top of the actual
				save information (such as user ID, save ID etc). So the solution was to only store the lifetime stats and what the player had unlocked/bought using their UIDs. Then when the game starts up, it will look at all the bought upgrades and their saved levels and just apply them incrementally then and there. When we go to save, we just filter out all those stats from the upgrades. So we cut
				down how many columns we need to only around 8.</p>
		`,
		notice: "This game is no longer being updated.",
		itchLink: "https://corporalchicken.itch.io/biscuit",
		githubLink: "https://github.com/yaseen-ahmed26/biscuit-game",
		media: [{type: "image", src: LandingPage, caption: "Biscuit"}],
		changelog: [
			{
				version: "v2.0",
				changes: [
					{tag: "Feature", tagClass: "tag-feature", text: "Added boosts, currently only 1 that gives you more per click."},
					{tag: "Feature", tagClass: "tag-feature", text: "Update log that displays all the latest changes." },
					{tag: "Change", tagClass: "tag-change", text: "Moved from Save IDs to access and refresh tokens for online saves." },
					{tag: "Change", tagClass: "tag-change", text: "Moved from a JSON file to Godot Resources for upgrades." },
					{tag: "Fix", tagClass: "tag-fix", text: "Fixed a bug where tabbing out caused account linking to fail."},
					{tag: "Fix", tagClass: "tag-fix", text: "Fixed the welcome bonus popup showing every time you connected your account."}
				]
			}
		]
	};
</script>

<GamePage {...gameData} />