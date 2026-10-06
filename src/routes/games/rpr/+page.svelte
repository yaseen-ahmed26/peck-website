<script>
	import GamePage from '$lib/templates/game-page.svelte';
	import RPR1 from '$lib/images/rpr_1.png'
    import RPR2 from '$lib/images/rpr_2.png'

	const gameData = {
		name: "Rock Paper Revamped",
		version: "1.0",
		date: "October 5th, 2026",
		description: `			
			<h3>Premise, Why Revamped?</h3>
			<p>This is a remake of an old project I had. That game was terribly made, it had 400 line hardcoded match statements, everything lived in 1 file and it was a nightmare to add new features. So the goal of this remake was
                to use Godot's resource system to make a game that is entirely data driven. Add new content would mean adding no, or very minimal, lines of new code. And I'd say I achieved that goal pretty well.</p>

			<h3>Resources</h3>
			<p>The old game suffered from too much hardcoded content. To remove 1, I had to hunt it down from 3 different 300 line scripts and it was a pain to maintain. This remake used a Trigger/Effect systems. When it was time to apply modifiers, we simply checked an
                array of Triggers. If all were met, then we'd apply all the effects. Each Trigger was it's own script, extending resource, and only did 1 thing. For example, it did a random percentage check, checked to see if a certain move (i.e. Paper) was used etc.
                Effects were similar, they only did 1 thing, like edit the player or AI's score. So all modifiers ended up being made like Lego. You would combine some Triggers and Effects to make a modifier, and you would never need to touch a line of code.</p>

            <h3>Data Saving</h3>
            <p>So the old game didn't have any data saving, which is why I wanted it in this game. And I had done Biscuit before so I didn't think it would be that difficult. Until I ran into the issue of what I wanted to save. I thought it would be cool to
                track how many times you used each modifier, played each gamemode etc. That introduced a problem: additive data. With Biscuit, it was simple, we just overwrote what was there already. If you had 30 biscuits and 30 seconds later you had 100, it overwrote the 30.
                No adding or calculating, but that's what I had to do for RPR. If you used Modifier A 3 times, and in this session you used it once, we couldn't overwrite that, we had to add it. So there had to be a check to see what data were saving, and where we were saving it.
                If it was a string or bool, we replaced it. An int or float, we added it. A dictionary, we added a new k:v pair. And if it was an array, we appended. This was one of the benefits of sticking with Godot's config files over JSON. If this was JSON, we wouldn't be able to
                check the type so easily, we'd have to parse it to Godot types first, then check, then add and then parse back to JSON.</p>
            
            <h3>New Content & Cut Content</h3>
            <p>Both games have roughly the same amount of modifiers. The difference between them is that the old was much more gimmicky and/or troll-like. Manipulating the UI, punishing you for winning etc. The new cut all that and attempted to add some that required some thinking.
                There are several new features in the remake, including preset challenges, different opponent types, customisable gamemodes and saving. These are all things I wanted to do in the old but couldn't because of how tangled and messy the code was.</p>
			
			<p>View the old project's source code <a href="https://github.com/corporal1chicken/rock-paper-scissors-plus">here</a>.</p>
		`,
		notice: "",
		itchLink: "https://corporalchicken.itch.io/rpr",
		githubLink: "https://github.com/yaseen-ahmed26/rock-paper-revamp",
		media: [{type: "image", src: RPR1, caption: "Selection Screen"}, {type: "image", src: RPR2, caption: "Results"}],
		changelog: [
			{
				version: "v1.0 (Release)",
				changes: [
					{tag: "Feature", tagClass: "tag-feature", text: "26 Modifiers, 5 Gamemodes"},
					{tag: "Feature", tagClass: "tag-feature", text: "Challenges, preset modifiers, a gamemode and opponent."},
					{tag: "Feature", tagClass: "tag-feature", text: "Tasks, gamemode specific short tasks to do during matches"},
					{tag: "Feature", tagClass: "tag-feature", text: "Opponent types, different AI personalities"},
				]
			}
		]
	};
</script>

<GamePage {...gameData} />