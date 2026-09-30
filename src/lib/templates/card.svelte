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

    .info{
		margin-bottom: 35px;
		text-align: center;
	}

	.info h2{
		margin-bottom: 16px;
		font-size: 2rem;
	}

	.info p{
		padding: 0 50px;
		font-size: 1rem;
	}
</style>