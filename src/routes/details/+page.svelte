<script>
    // @ts-nocheck

    import Card from "$lib/templates/card.svelte";
    import Input from "$lib/templates/input.svelte";
    import { user } from "$lib/api.svelte";
    import { makeHTTPRequest, getCurrentUser } from "$lib/api.svelte";

    const emailInput = {
        iconName: "mail",
        inputID: "update-email",
        inputType: "email",
        required: false
    }

    const usernameInput = {
        iconName: "person-outline",
        inputID: "update-username",
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

    let newEmail = $state("");
    let newUsername = $state("");
    let newPassword = $state("");
    let currentPassword = $state("")

    async function onclick(){
        const updateData = {
            username: newUsername || null,
            email: newEmail || null,
            password: newPassword || null,
            current_password: currentPassword
        }

        try{            
            const data = await makeHTTPRequest({
                requestType: "PATCH",
                requestBody: updateData,
                requestHeaders: {"Content-Type": "application/json"},
                requestURL: `users/${user.account.id}`
            })
        }catch (error){
           console.log(error.message)
        }
    }
</script>

<Card title="Account" description="Update your account details here.">
    <form action="#">
        <Input {...emailInput} labelText={user.account.email} bind:value={newEmail}/>
        <Input {...usernameInput} labelText={user.account.username} bind:value={newUsername}/>
        <Input {...passwordInput} bind:value={newPassword}/>
        <Input {...confirmPasswordInput} bind:value={currentPassword}/>
        <button {onclick} class="login-btn" type="submit" disabled={!currentPassword} >Update</button>
    </form>
</Card>