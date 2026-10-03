<script>
// @ts-nocheck

    import { user, logOut } from "$lib/api.svelte";
    import { goto } from "$app/navigation";
    import Dropdown from "./dropdown.svelte";

    const navMenus = [
        {title: "Game", items: [{label: "Link", href: "/code"}]},
        {title: "Account", items: [{label: "Details", href: "/details"}, {label: "Delete", href: "/delete"}]}
    ];

    async function handleLogout() {
        await logOut();
        goto("/");
    }
</script>

<header>
    <a href="/" class="logo">Peck</a>

    {#if !user.loading}
        {#if user.account?.id}
            <nav class="navigation">
                <a href="/" class="navigation-link">Home</a>

                {#each navMenus as menu}
                    <Dropdown title={menu.title} items={menu.items} />
                {/each}

                <button class="logout-btn" onclick={handleLogout}>Log out</button>
            </nav>
        {:else}
            <nav class="navigation">
                <a href="/" class="navigation-link">Home</a>
                <a href="/register" class="navigation-link">Register</a>
                <a href="/login" class="navigation-link">Login</a>
            </nav>
        {/if}
    {/if}
</header>

<style>
    header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 38px 150px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        z-index: 99;
    }

    .logo{
        font-size: 2rem;
        font-weight: bold;
        text-decoration: none;
    }

    .navigation{
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .navigation-link{
        font-size: 1.1rem;
        font-weight: 500;
        text-decoration: none;
        transition: 0.4s ease;
        color: white;
    }

    .navigation-link:hover{
        color: lime;
    }

    .logout-btn{
        width: 130px;
        height: 50px;
        background: transparent;
        border: 2px solid #ffffff;
        outline: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 1.1rem;
        color: #ffffff;
        font-weight: 500;
        margin-left: 40px;
        transition: 0.2s ease;
    }

    .logout-btn:hover{
        background: white;
        color: black;
    }
</style>