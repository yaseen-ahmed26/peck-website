<script>
    let { 
        title = "Menu", 
        items = [] 
    } = $props();
</script>

<div class="dropdown">
    <button class="dropbtn" type="button">
        {title}
        <span class="chevron">▾</span>
    </button>
    <div class="dropdown-content">
        {#each items as item}
            <a href={item.href}>{item.label}</a>
        {/each}
    </div>
</div>

<style>
    .dropdown {
        position: relative;
        display: inline-flex;
        align-items: center;
    }

    .dropbtn {
        background: none;
        border: none;
        color: #a1a1aa;
        font-size: 0.95rem;
        font-weight: 500;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 6px 10px;
        border-radius: 6px;
        transition: color 0.18s ease;
    }

    .dropbtn:hover {
        color: #f4f4f5;
    }

    .chevron {
        font-size: 0.75rem;
        color: #71717a;
        transition: transform 0.2s ease;
    }

    .dropdown:hover .chevron {
        transform: rotate(180deg);
    }

    .dropdown-content {
        display: none;
        position: absolute;
        top: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
        background: #141418;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        padding: 6px;
        min-width: 140px;
        box-shadow: 0 12px 28px -6px rgba(0, 0, 0, 0.7);
        z-index: 100;
    }

    .dropdown-content::before {
        content: '';
        position: absolute;
        top: -10px;
        left: 0;
        right: 0;
        height: 10px;
    }

    .dropdown:hover .dropdown-content {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .dropdown-content a {
        padding: 8px 12px;
        text-decoration: none;
        color: #d4d4d8;
        font-size: 0.9rem;
        font-weight: 500;
        border-radius: 6px;
        transition: all 0.15s ease;
    }

    .dropdown-content a:hover {
        background: rgba(255, 255, 255, 0.07);
        color: #f4f4f5;
    }
</style>