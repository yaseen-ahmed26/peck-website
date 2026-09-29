<script>
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
        <p>Don't have an account? Click here to sign up</p>
    </form>
</Card>

<style>
    form{
        width: 100%;
        padding: 60px;
        text-align: center;
    }

    .login-btn{
        width: 100%;
        height: 45px;
        background: #0000004c;
        border: 1px solid white;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1.3em;
        color: white;
        margin-bottom: 20px;
        transition: 0.2s ease;
    }

    .login-btn:hover{
        background: white;
        color: black
    }
</style>
