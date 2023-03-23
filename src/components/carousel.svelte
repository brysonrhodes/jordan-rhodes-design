<script>
    import {onMount} from 'svelte';
    import api from '../lib/api';
    import Referral from '../models/referral.svelte';
    import ClientIcon from '../models/clientIcon.svelte';
    import CaseStudy from '../models/caseStudy.svelte';
    import Button from './button.svelte';
    export let data;

    const models = {Referral, ClientIcon, CaseStudy, Button}
    let collectionData;
    onMount(async () => {
        try {
            const resp = await api(data.collectionType, "populate=deep");
            collectionData = resp.data.data;
        } catch (e) {
            console.log("Error");
        }
    });
</script>

<div class="outer gutter {data.theme}">
    {#if data.background}
        <img class="background" src="{import.meta.env.VITE_URL}{data.background.data.attributes.formats.medium.url}" alt="Background"/>
    {/if}
    <h2>{data.heading}</h2>
    <div class="wrapper">
        <div class="inner">
            {#if collectionData}
                {#each collectionData as item}
                    <svelte:component this={models[item.attributes.collectionType]} data={item.attributes} />
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
        font-style: normal;
        font-weight: 400;
        font-size: 39.06;
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