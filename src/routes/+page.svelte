<script></script>

<main>
    <section>
        <div class="text-card">
            <div class="text-container">
                <h2>Hello there</h2>
                <p>Get a quick overview, read update logs here and sign up for an account! Download the game using the link below and connect your game data.</p>
                <p>If you do sign up for an account, note that a real email is <b>NOT</b> required. As long as it has an @ symbol, anything is valid.</p>
            </div>
        </div>
    </section>

    <section>
        <div class="text-card">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="src/lib/images/landing_image.png" alt="Image of the Biscuit Game">
    
            <div class="text-container">
                <h2>Welcome to Peck!</h2>
                <p>This is a hobby project that I'm working on purely for fun. All the code is available on GitHub and the game is downloadable on Itch.io. Thank you for visiting, I hope you enjoy looking around!</p>
                <div class="btn-group">
                    <a href="https://corporalchicken.itch.io/biscuit" class="itch-btn">Itch.io</a>
                    <a href="https://github.com/yaseen-ahmed26" class="github-btn">GitHub</a>
                </div>
            </div>
        </div>
    </section>

    <section>
        <h2>Update Logs</h2>
        <div class="update-container">
            <details class="version-card">
                <summary>Version 3.0</summary>

                <strong>Major Changes & Fixes</strong>
                <ul>
                    <li>(Game) Added a second game to the platform called RPR.</li>
                    <br>
                    <li>(Server) Backend now supports multiple games and is no longer hardcoded to just 1.</li>
                    <br>
                    <li>(Website) Remade the entire website moving from vanilla JavaScript to SvelteKit.</li>
                </ul>
                
            </details>
        </div>
    </section>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
        padding: 2rem; 
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
    }

    section{
        background: transparent;
        border: 2px solid white;
        border-radius: 24px;
        box-shadow: 0 0 20px white;
        color: #ffffff;
        padding: 3rem;
        width: 100%;
    }

    section h2{
        font-size: 2rem;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    section p{
        font-size: 1.15rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }

    .text-card{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 3rem;
    }

    .text-container{
        flex: 1 1 400px;
    }

    img{
        height: 400px;
        width: 300px;
        border-radius: 1em;
        object-fit: cover;
    }

    .btn-group{
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .itch-btn{
        display: inline-block;
        text-decoration: none;
        color: #070708;
        background-color: #ffc06e;
        padding: 0.75em 1.25em;
        border-radius: 0.5em;
        font-weight: 600;
        transition: opacity 0.2s;
    }

    .github-btn{
        display: inline-block;
        text-decoration: none;
        background-color: #8D8DFF;
        color: white;
        padding: 0.75em 1.25em;
        border-radius: 0.5em;
        font-weight: 600;
        transition: opacity 0.2s;
    }

    .github-btn:hover,
    .itch-btn:hover{
        opacity: 0.8;
    }

    details{
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 1em;
        border: 1px solid rgba(255,255,255,0.2);
    }

    details summary{
        padding: 1.25em;
        font-size: 1.3rem;
        font-weight: 500;
        cursor: pointer;
        list-style: none;
    }

    details summary::-webkit-details-marker{
        display: none;
    }

    @media(max-width: 800px){
        .btn-group{
            flex-direction: column;
            width: 100%;
        }

        .github-btn,
        .itch-btn{
            text-align: center;
            width: 100%;
        }
    }

    .version-card{
        padding: 1rem 2rem;
    }

    ul{
        margin: 0.5rem 0 1rem 1.8rem;
        padding: 0;
        line-height: 1.5;
    }
</style>