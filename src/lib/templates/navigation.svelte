<script>
// @ts-nocheck

    import { user, logOut } from "$lib/api.svelte";
    import { goto } from "$app/navigation";
    import Dropdown from "./dropdown.svelte";

    const loggedInNav = [
        {title: "Games", items: [{label: "Biscuit", href: "/games/biscuit"}, {label: "RPR", href: "/games/rpr"}]},
        {title: "Account", items: [{label: "Details", href: "/details"}, {label: "Delete", href: "/delete"}]}
    ];
    const loggedOutNav = [
        {title: "Games", items: [{label: "Biscuit", href: "/games/biscuit"}, {label: "RPR", href: "/games/rpr"}]},
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
        background: rgba(2, 6, 23, 0.8);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        z-index: 99;
    }

    .logo {
        font-size: 1.9rem;
        font-weight: 800;
        letter-spacing: -0.03em;
        text-decoration: none;
        color: #f8fafc;
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
        color: #cbd5e1;
        padding: 6px 10px;
        border-radius: 6px;
        transition: color 0.18s ease;
    }

    .navigation-link:hover {
        color: #00ffff;
    }

    .login-btn {
        font-size: 0.92rem;
        font-weight: 600;
        text-decoration: none;
        color: #06b6d4;
        background: rgba(6, 182, 212, 0.1);
        border: 1px solid rgba(6, 182, 212, 0.3);
        padding: 8px 18px;
        border-radius: 8px;
        transition: all 0.18s ease;
    }

    .login-btn:hover {
        background: #06b6d4;
        color: #0f172a;
        border-color: #06b6d4;
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
        color: #cbd5e1;
        padding: 8px 18px;
        transition: all 0.18s ease;
    }

    .logout-btn:hover {
        background: rgba(148, 163, 184, 0.1);
        border-color: rgba(148, 163, 184, 0.3);
        color: #e2e8f0;
    }
</style>