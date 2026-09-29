<script>
    let {value = $bindable(), ...details} = $props()
</script>

<div class="input-box">
    <span class="icon"><ion-icon name={details.iconName}></ion-icon></span>
    <label for={details.inputID}>{details.labelText}</label>
    <input id={details.inputID} type={details.inputType} required={details.required}>
</div>

<style>
    .input-box{
        position: relative;
        width: 100%;
        height: 50px;
        border-bottom: 1px solid white;
        margin: 2rem 0 2rem 0;
    }
    .input-box label{
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
        font-size: 1em;
        pointer-events: none;
        transition: 0.5s ease;
    }

    .input-box:has(input:focus) label,
    .input-box:has(input:valid) label {
        top: -5px;
    }

    .input-box input{
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        font-size: 1em;
        font-weight: 500;
        padding: 0 35px 0 5px;
        color: white;
    }

    .input-box .icon{
        position: absolute;
        right: 8px;
        font-size: 1.2em;
        line-height: 57px;
        background: none;
        border: none;
        color: white;
    }
</style>