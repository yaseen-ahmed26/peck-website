<script>
    // @ts-nocheck

    import Card from "$lib/templates/card.svelte";
    import Input from "$lib/templates/input.svelte";
    import { makeHTTPRequest } from "$lib/api.svelte";
    import { showToast } from "$lib/helpers";

    const codeInput = {
        iconName: "text-outline",
        inputID: "code",
        labelText: "",
        inputType: "text",
        placeholderText: "ABCDEFG",
        required: false
    }

    let code = $state("")

    async function onclick(e){
        e.preventDefault();

        try{
            const data = await makeHTTPRequest({
                requestType: "POST",
                requestBody: {login_code: code},
                requestHeaders: {"Content-Type": "application/json"},
                requestURL: "codes/verify"
            })

            showToast(`Connected your Peck account to ${data.game_id} on your ${data.os} in ${data.country}`);
        }catch (error){
            showToast(error.message)
        }
    }
</script>

<Card title="Link Game" description="Enter the 7 character code displayed in game to link your account.">
    <form action="#">
        <Input {...codeInput} bind:value={code}/>
        <button {onclick} class="login-btn" type="submit" disabled={!code} >Link</button>
    </form>
</Card>