<!--JavaScript -->
<script>
    let {
        title = "Title",
        description = "Description",
        children
    } = $props()
</script>

<!--HTML -->
<div class="wrapper">
    <h2>{title}</h2>
    <p>{description}</p>

    {@render children?.()}
</div>

<!--CSS -->
<style>
    .wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        border: 2px solid white;
        border-radius: 24px;
        box-shadow: 0 0 20px white;
        width: 32.5rem;
        height: 38.2rem;
    }

    .wrapper h2{
        font-size: 2rem;
        margin-bottom: 12px;
    }

    .wrapper p{
        font-size: 1.2rem;
    }
</style>