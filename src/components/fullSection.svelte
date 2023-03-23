<script>
    import TextIcon from "../models/textIcon.svelte";
    export let data;
</script>

<div class="full-rect gutter">
    <svelte:element this={data.headingType} class="heading">{data.heading}</svelte:element>
    {#if data.subHeading}
        <p class="sub-heading">{data.subHeading}</p>
    {/if}
    {#if data.text}
        <p>{data.text}</p>
    {/if}
    {#if data.icons}
        <div class="icon-wrapper">
        {#each data.icons as icon}
            <TextIcon data={icon}/>
        {/each}
        </div>
    {/if}
    {#if data.sectionDivider}
        <div class="section-divider"><span/></div>
    {/if}
</div>

<style>
    .heading {
        margin-top: 128px;
        align-self: flex-start;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 39.06px;
        margin-bottom: 0px;
    }

    .full-rect {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .icon-wrapper {
        margin-top: 16px;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        gap: 64px;
    }

    .sub-heading {
        color: #00FF9F;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 31.25px;
        margin-bottom: 0;
        margin-top: 80px;
    }

    p {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
    }

    .section-divider {
        margin-top: 16px;
        width: 2px;
        height: 98px;
        background-color: #00FF9F;
    }
</style>