<script>
    // @ts-nocheck

    import "$lib/styles/form.css"
    import Card from "$lib/templates/card.svelte";
    import Input from "$lib/templates/input.svelte";
    import { user } from "$lib/api.svelte";
    import { makeHTTPRequest, getCurrentUser } from "$lib/api.svelte";

    const REQUIRED_PHRASE = "delete my account"

    const deleteInput = {
        iconName: "trash-bin-outline",
        inputID: "delete-account",
        labelText: "",
        inputType: "text",
        placeholderText: REQUIRED_PHRASE,
        required: true
    }

    let phrase = $state()

    async function onclick(){

    }
</script>

<Card title="Delete Account" description={`Enter the phrase '${REQUIRED_PHRASE}' to delete your account. This also deletes any game save data.`}>
    <form action="#">
        <Input {...deleteInput} bind:value={phrase}/>
        <button {onclick} class="login-btn" type="submit" disabled={phrase !== REQUIRED_PHRASE} >Delete Account</button>
    </form>
</Card>