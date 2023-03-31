<script>
    export let data;

    let pageTarget;
    if(data.isExternal === true) {
        pageTarget = "blank";
    } else {
        pageTarget = "_self";
    }

</script>

{#if data.theme !== 'comingSoon'}
    <a href={data.href} target={pageTarget}><button class={data.theme}>{data.text}</button></a>
{:else}
    <button class={data.theme}>{data.text}</button>
{/if}


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

    .comingSoon {
        color: #00FF9F;
        background-color: #393939;
        border-color: #393939;
    }

    .small, .comingSoon {
        width: 100%;
        margin-top: 57px;
        font-size: 18px;
    }
</style>