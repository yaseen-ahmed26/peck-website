<script>
    // @ts-nocheck

    import "$lib/styles/form.css"
    import Card from "$lib/templates/card.svelte";
    import Input from "$lib/templates/input.svelte";
    import { user } from "$lib/api.svelte";
    import { makeHTTPRequest, getCurrentUser } from "$lib/api.svelte";

    const emailInput = {
        iconName: "mail",
        inputID: "update-email",
        labelText: user.account.email,
        inputType: "email",
        required: false
    }

    const usernameInput = {
        iconName: "person-outline",
        inputID: "update-username",
        labelText: user.account.username,
        inputType: "text",
        required: false
    }

    const passwordInput = {
        iconName: "eye",
        inputID: "update-password",
        labelText: "Update Password",
        inputType: "password",
        required: false
    }

    const confirmPasswordInput = {
        iconName: "eye",
        inputID: "current-password",
        labelText: "Enter your password",
        inputType: "password",
        required: true
    }

    let email = $state();
    let username = $state();
    let password = $state();
    let confirmPassword = $state()

    async function onclick(){

    }
</script>

<Card title="Account" description="Update your account details here.">
    <form action="#">
        <Input {...emailInput} bind:value={email}/>
        <Input {...usernameInput} bind:value={username}/>
        <Input {...passwordInput} bind:value={password}/>
        <Input {...confirmPasswordInput} bind:value={confirmPassword}/>
        <button {onclick} class="login-btn" type="submit" disabled={confirmPassword === ""} >Update</button>
    </form>
</Card>