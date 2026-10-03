<script>
    // @ts-nocheck

    import { goto } from "$app/navigation";
    import Card from "$lib/templates/card.svelte";
    import Input from "$lib/templates/input.svelte";
    import { getCurrentUser, makeHTTPRequest } from "$lib/api.svelte";
    import { showToast } from "$lib/helpers";

    const loginInput = {
        iconName: "mail",
        inputID: "login-email",
        labelText: "Email",
        inputType: "email",
        required: true
    }

    const passwordInput = {
        iconName: "eye-off",
        inputID: "login-password",
        labelText: "Password",
        inputType: "password",
        required: true
    }

    let email = $state("");
    let password = $state("");
    let disableBtn = $derived(!email || !password)

    let count = 0;

    async function onclick(event){
        event.preventDefault()

        const params = new URLSearchParams()

        params.append("username", email)
        params.append("password", password)

        try{
            const data = await makeHTTPRequest({
                requestType: "POST",
                requestBody: params,
                requestHeaders: {"Content-Type": "application/x-www-form-urlencoded"},
                requestURL: "auth/login"
            })

            await getCurrentUser()

            goto("/details")
        }catch(error){
            showToast(error.message)
        }

    }
</script>

<Card title={"Login"} description={"Sign into your account."}>
    <form action="#">
        <Input {...loginInput} bind:value={email}/>
        <Input {...passwordInput} bind:value={password}/>
        <button {onclick} class="login-btn" type="submit" disabled={disableBtn} >Log in</button>
        <p>Don't have an account? <a class="link" href="/register">Sign up here.</a></p>
    </form>
</Card>