<script>
    // @ts-nocheck

    import "$lib/styles/form.css"
    import Card from "$lib/templates/card.svelte";
    import Input from "$lib/templates/input.svelte";
    import { user } from "$lib/api.svelte";
    import { makeHTTPRequest, getCurrentUser } from "$lib/api.svelte";

    const emailInput = {
        iconName: "text-outline",
        inputID: "code",
        labelText: "",
        inputType: "text",
        placeholderText: "ABCDEFG",
        required: false
    }

    let code = $state()

    async function onclick(){

    }
</script>

<Card title="Link Game" description="Enter the 7 character code displayed in game to link your account.">
    <form action="#">
        <Input {...emailInput} bind:value={code}/>
        <button {onclick} class="login-btn" type="submit" disabled={code === ""} >Link</button>
    </form>
</Card>