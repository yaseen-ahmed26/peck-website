<script>
    import Card from "$lib/templates/card.svelte";

</script>

<Card title={"Temporary"} description={"Hello there"}>
    <a href="/login" aria-label="Login">Login</a>
    <a href="/register" aria-label="Login">Register</a>
</Card>

<style>
    a{
        margin-top: 3rem;
        color: blue;
        font-size: 1.5rem;
        text-decoration: underline;
    }
</style>
