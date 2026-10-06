<script>
// @ts-nocheck

    import { user, logOut } from "$lib/api.svelte";
    import { goto } from "$app/navigation";
    import Dropdown from "./dropdown.svelte";

    const loggedInNav = [
        {title: "Games", items: [{label: "Biscuit", href: "/games/biscuit"}]},
        {title: "Account", items: [{label: "Details", href: "/details"}, {label: "Delete", href: "/delete"}]}
    ];
    const loggedOutNav = [
        {title: "Games", items: [{label: "Biscuit", href: "/games/biscuit"}]},
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
                <a href="/code" class="navigation-link">Link</a>

                {#each loggedInNav as menu}
                    <Dropdown title={menu.title} items={menu.items} />
                {/each}

                <button class="logout-btn" onclick={handleLogout}>Log out</button>
            </nav>
        {:else}
            <nav class="navigation">
                <a href="/" class="navigation-link">Home</a>
                {#each loggedOutNav as menu}
                    <Dropdown title={menu.title} items={menu.items} />
                {/each}
                <a href="/register" class="navigation-link">Register</a>
                <a href="/login" class="login-btn">Login</a>
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
        padding: 16px clamp(20px, 8vw, 80px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        background: rgba(9, 9, 11, 0.8);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        z-index: 99;
    }

    .logo {
        font-size: 1.9rem;
        font-weight: 800;
        letter-spacing: -0.03em;
        text-decoration: none;
        color: #f4f4f5;
    }

    .navigation {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .navigation-link {
        font-size: 0.95rem;
        font-weight: 500;
        text-decoration: none;
        color: #a1a1aa;
        padding: 6px 10px;
        border-radius: 6px;
        transition: color 0.18s ease;
    }

    .navigation-link:hover {
        color: #f4f4f5;
    }

    .login-btn {
        font-size: 0.92rem;
        font-weight: 600;
        text-decoration: none;
        color: #f59e0b;
        background: rgba(245, 158, 11, 0.1);
        border: 1px solid rgba(245, 158, 11, 0.28);
        padding: 8px 18px;
        border-radius: 8px;
        transition: all 0.18s ease;
    }

    .login-btn:hover {
        background: #f59e0b;
        color: #09090b;
        border-color: #f59e0b;
        transform: translateY(-1px);
    }

    .logout-btn {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.12);
        outline: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 0.92rem;
        font-weight: 600;
        color: #d4d4d8;
        padding: 8px 18px;
        transition: all 0.18s ease;
    }

    .logout-btn:hover {
        background: rgba(239, 68, 68, 0.1);
        border-color: rgba(239, 68, 68, 0.3);
        color: #fca5a5;
    }
</style>