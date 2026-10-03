<script>
    // @ts-nocheck

    import Card from "$lib/templates/card.svelte";
    import Input from "$lib/templates/input.svelte";
    import { makeHTTPRequest, logOut } from "$lib/api.svelte";
    import { showToast } from "$lib/helpers";

    const REQUIRED_PHRASE = "delete my account"

    const deleteInput = {
        iconName: "trash-bin-outline",
        inputID: "delete-account",
        labelText: "",
        inputType: "text",
        placeholderText: REQUIRED_PHRASE,
        required: true
    }

    let phrase = $state("")

    async function onclick(e){
        e.preventDefault();

        try{
            const data = await makeHTTPRequest({
                requestType: "DELETE",
                requestURL: `users/${user.account.id}`
            })

            logOut()
        }catch(error){
            showToast(error.message)
        }
    }
</script>

<Card title="Delete Account" description={`Enter the phrase '${REQUIRED_PHRASE}' to delete your account. This also deletes any game save data.`}>
    <form action="#">
        <Input {...deleteInput} bind:value={phrase}/>
        <button {onclick} class="login-btn" type="submit" disabled={phrase !== REQUIRED_PHRASE} >Delete Account</button>
    </form>
</Card>