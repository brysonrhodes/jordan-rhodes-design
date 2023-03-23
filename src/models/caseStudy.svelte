<script>
    import Button from "../components/button.svelte";
    export let data;
    let image = data.logo.data.attributes.url;
    let alt = data.logo.data.attributes.alternativeText;
</script>

<div class="wrapper">
    <div class="image-wrapper">
        <img src="{import.meta.env.VITE_URL}{image}" alt="{alt}" />
    </div>
    <div class="text">
        <h4>{data.company}</h4>
        <p>{data.year} | {data.length}</p>
        {#each data.workCompleted as work}
            <p>{work}</p>
        {/each}
    </div>
    {#if data.button[0] }
        <Button data={data.button[0]} />
    {/if}
</div>

<style>
    .wrapper {
        min-width: 260px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .image-wrapper {
        display: flex;
        align-items: center;
        height: 214px;
    }

    .text {
        align-self: flex-start;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
    }

    h4 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
    }
</style>
