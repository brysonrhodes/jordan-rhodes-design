<script>
    export let data;
    import Button from './button.svelte';
    import TextIcon from '../models/textIcon.svelte';
</script>

<div class="wrapper {data.theme}" id={data.blockId}>
    <img class="background-image" src={data.backgroundImage} alt={data.backgroundImageAlt} />
    <div class="content">
        <div class="text">
            {#if data.theme == "primary"}
                <h1>{data.heading}</h1>
            {:else}
                <img src={data.logoImage} alt={data.logoImageAlt} />
            {/if}
            <p>{data.text}</p>
            {#if data.text2} 
                <p>{data.text2}</p>
            {/if}
            {#if data.ctaButton}
                <Button data={data.ctaButton.attributes}/>
            {/if}
        </div>
        <img class="feature-image" src={data.featureImage} alt={data.featureImageAlt} />
    </div>
    {#if data.icons}
        <div class="icon-wrapper">
        {#each data.icons as icon}
            <TextIcon data={icon}/>
        {/each}
        </div>
    {/if}
</div>

<style>
    .wrapper {
        margin-top: 32px;
        margin-left: 250px;
        margin-right: 250px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .background-image {
        z-index: -1;
        width: 835px;
        left: 0;
        position: absolute;
    }

    .caseStudy {
        padding-top: 128px;
    }

    .caseStudy .background-image {
        top: -100px;
        right: 0;
    }

    .icon-wrapper {
        margin-top: 80px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 128px;
    }

    .content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .text {
        width: 50%;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
    }

    h1 {
        font-family: 'Oleo Script';
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
    }

    p {
        font-size: 36px;
    }
</style>