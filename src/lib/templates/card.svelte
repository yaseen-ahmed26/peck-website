<script>
    let {
        title = "Title",
        description = "Description",
        children
    } = $props()
</script>

<div class="wrapper">
    <div class="info">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>

    {@render children?.()}
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        width: 32.5rem;
        height: 38.2rem;
        max-width: 100%;

        background: #111115;
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 20px;
        box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
        padding: 40px 32px;
        box-sizing: border-box;
    }

    .info {
        margin-bottom: 35px;
        text-align: center;
        width: 100%;
    }

    .info h2 {
        margin-bottom: 12px;
        font-size: 1.85rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: #f4f4f5;
    }

    .info p {
        padding: 0 30px;
        font-size: 0.95rem;
        line-height: 1.5;
        color: #a1a1aa;
    }

    @media (max-width: 560px) {
        .wrapper {
            width: 100%;
            height: auto;
            min-height: 32rem;
            padding: 32px 20px;
        }

        .info p {
            padding: 0 10px;
        }
    }
</style>