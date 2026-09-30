<script>
// @ts-nocheck

    import "$lib/styles/form.css"
    import Card from "$lib/templates/card.svelte";
    import Input from "$lib/templates/input.svelte";
    import { user } from "$lib/api.svelte";
    import { makeHTTPRequest, getCurrentUser } from "$lib/api.svelte";

    const emailInput = {
        iconName: "mail",
        inputID: "register-email",
        labelText: "Email",
        inputType: "email",
        required: true
    }

    const usernameInput = {
        iconName: "person-outline",
        inputID: "register-username",
        labelText: "Username",
        inputType: "text",
        required: true
    }

    const passwordInput = {
        iconName: "eye",
        inputID: "register-password",
        labelText: "Password",
        inputType: "password",
        required: true
    }

    const confirmPasswordInput = {
        iconName: "eye",
        inputID: "register-confirm-password",
        labelText: "Confirm Password",
        inputType: "password",
        required: true
    }

    let email = $state();
    let username = $state();
    let password = $state();
    let confirmPassword = $state()

    async function onclick(){
        try{
            const userData = {
                email: email,
                username: username,
                password: password
            };

            const data = await makeHTTPRequest({
                requestType: "POST",
                requestBody: userData,
                requestHeaders: {"Content-Type": "application/json"},
                requestURL: "users"
            })

            const params = new URLSearchParams()
            params.append("username", email)
            params.append("password", password)
            
            const loginData = await makeHTTPRequest({
                requestType: "POST",
                requestBody: params,
                requestHeaders: {"Content-Type": "application/x-www-form-urlencoded"},
                requestURL: "auth/login"
            })

            await getCurrentUser();
        }catch(error){
            console.log(`${error.message}`)
        }
    }
</script>

<Card title="Register" description="Create an account!">
    <form action="#">
        <Input {...emailInput} bind:value={email}/>
        <Input {...usernameInput} bind:value={username}/>
        <Input {...passwordInput} bind:value={password}/>
        <Input {...confirmPasswordInput} bind:value={confirmPassword}/>
        <button {onclick} class="login-btn" type="submit" >Log in</button>
        <p>Already have an account? <a class="link" href="/login">Log in here.</a></p>
    </form>
</Card>