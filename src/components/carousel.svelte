<script>
    import Referral from '../models/referral.svelte';
    import ClientIcon from '../models/clientIcon.svelte';
    import CaseStudy from '../models/caseStudy.svelte';
    import Button from './button.svelte';
    export let data;

    const models = {Referral, ClientIcon, CaseStudy, Button}
    const collectionData = data.collectionData;
</script>

<div class="outer gutter {data.theme}">
    {#if data.backgroundImage}
        <img class="background" src={data.backgroundImage} alt=""/>
    {/if}
    <h2>{data.heading}</h2>
    <div class="wrapper">
        <div class="inner">
            {#if collectionData}
                {#each collectionData as item}
                    <svelte:component this={models[item.type]} data={item.attributes} />
                {/each}
            {/if}
        </div>
    </div>
</div>

<style>
    .outer {
        position: relative;
        margin-top: 128px;
        margin-bottom: 64px;
    }

    .background {
        position: absolute;
        z-index: -1;
        left: 25%;
        top: -500px;
    }

    .wrapper {
        font-size: 24px;
        text-align: center;
        overflow-x: scroll;
    }

    h2 {
        margin-bottom: 64px;
        text-align: left;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 39.06px;
    }

    .secondary h2 {
        font-size: 24px;
    }

    .inner {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 64px;
        text-align: left;
        margin-bottom: 64px;
        gap: 70px;

    }

    ::-webkit-scrollbar-track {
        border-radius: 20px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 20px;
    }
</style>