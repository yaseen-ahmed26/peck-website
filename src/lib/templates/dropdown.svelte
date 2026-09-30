<script>
    let { 
        title = "Menu", 
        items = [] 
    } = $props();
</script>

<div class="dropdown">
    <button class="dropbtn" type="button">{title}</button>
    <div class="dropdown-content">
        {#each items as item}
            <a href={item.href}>{item.label}</a>
        {/each}
    </div>
</div>

<style>
    .dropdown{
        display: inline-block;
        position: relative;
    }

    .dropbtn{
        background: none;
        border: none;
        color: white;
        font-size: 1.1rem;
        font-weight: 500;
        margin-left: 40px;
        cursor: pointer;
        transition: 0.4s ease;
    }

    .dropbtn:hover{
        color: lime;
    }

    .dropdown-content{
        display: none;
        position: absolute;
        background-color: #000000;
        border: 1px solid #5f5f5f;
        border-radius: 8px;
        padding: 20px 0;
        margin-left: 2.15rem;
    }

    .dropdown-content a{
        padding: 0.4rem 1rem;
        display: block;
        text-decoration: none;
        color: white;
        transition: 0.4s ease;
    }

    .dropdown-content a:hover{
        color: lime;
    }

    .dropdown:hover .dropdown-content{
        display: block;
    }
</style>