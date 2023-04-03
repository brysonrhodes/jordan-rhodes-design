<script>
    import Button from "../components/button.svelte";
    export let data;
</script>

<div class="wrapper gutter">
    <div class="image-wrapper">
        <img src={data.image} alt={data.imageAlt} />
    </div>
    <div class="text">
        <h4>{data.company}</h4>
        <p>{data.year} | {data.length}</p>
        {#each data.workCompleted as work}
            <p>{work}</p>
        {/each}
    </div>
    {#if data.button }
        <Button data={data.button.attributes} />
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

    @media screen and (max-width: 600px) {

        
        h4 {
            margin-top: 0;
            margin-bottom: 0;
        }

        img {
            margin-top: 0;
            margin-bottom: 0;
        }
    }
</style>
