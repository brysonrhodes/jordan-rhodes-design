<script>
    export let data;
</script>

<a href={data.href}><button class={data.theme}>{data.text}</button></a>

<style>
    button {
        cursor: pointer;
        padding: 16px 32px;
        background-color: #00FF9F;
        color: #393939;
        font-size: 24px;
        font-weight: 600;
        border: solid;
        border-color: #00FF9F;
        border-radius: 45px;
    }

    button:hover {
        color: #00FF9F;
        background-color: #393939;
    }

    .small {
        width: 100%;
        margin-top: 57px;
        font-size: 18px;
    }
</style>