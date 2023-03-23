<script>
    export let data;
</script>

<div class="full-rect gutter {data.theme}">
    {#if data.heading}
        <h2>{data.heading}</h2>
    {/if}
    {#if data.media.data}
        <video width={"100%"} autoplay loop muted>
            <source src='{import.meta.env.VITE_URL}{data.media.data.attributes.url}' type={data.media.data.attributes.mime}>
            <track kind="captions">
        </video>
    {/if}
    {#if data.iframe}
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" class="iframe" title={data.iframe.title} src="https://www.figma.com/embed?embed_host=share&url={data.iframe.url}" allowfullscreen></iframe>
    {/if}
    {#if data.images.data }
        <div class="images">
            {#each data.images.data as image}
                {#if image.attributes.caption}
                    <p>{image.attributes.caption}</p>
                {/if}
                {#if image.attributes.formats.medium }
                    <img src='{import.meta.env.VITE_URL}{image.attributes.formats.medium.url}' alt={image.attributes.alternativeText} />
                {:else if image.attributes.formats.small }
                    <img src='{import.meta.env.VITE_URL}{image.attributes.formats.small.url}' alt={image.attributes.alternativeText} />
                {:else if image.attributes.formats.thumbnail }
                    <img src='{import.meta.env.VITE_URL}{image.attributes.formats.thumbnail.url}' alt={image.attributes.alternativeText} />
                {/if}
            {/each}
        </div>
    {/if}
</div>

<style>
    .full-rect {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        margin-top: 128px;
        align-self: flex-start;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 39.06px;
        margin-bottom: 16px;
    }

    p {
        text-align: center;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
    }

    .iframe {
        width: 100%;
        height: 800px;
    }

    .secondary .iframe {
        width: 33%;
    }

    .images {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
</style>