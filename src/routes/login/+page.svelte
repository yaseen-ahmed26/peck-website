<script>
    import "$lib/styles/form.css"
    import Card from "$lib/templates/card.svelte";
    import Input from "$lib/templates/input.svelte";

    const loginInput = {
        iconName: "mail",
        inputID: "login-email",
        labelText: "Email",
        inputType: "email",
        required: true
    }

    const passwordInput = {
        iconName: "mail",
        inputID: "login-password",
        labelText: "Password",
        inputType: "password",
        required: true
    }

    let email = $state();
    let password = $state();
</script>

<Card title={"Login"} description={"Sign into your account."}>
    <form action="#">
        <Input {...loginInput} bind:value={email}/>
        <Input {...passwordInput} bind:value={password}/>
        <button class="login-btn" type="submit" >Log in</button>
        <p>Don't have an account? <a class="link" href="/register">Click here to sign up.</a></p>
    </form>
</Card>