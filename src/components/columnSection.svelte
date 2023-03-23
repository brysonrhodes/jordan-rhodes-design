<script>
    import {onMount} from 'svelte';
    import api from '../lib/api';
    import Referral from '../models/referral.svelte';
    import ClientIcon from '../models/clientIcon.svelte';
    import Button from './button.svelte';
    export let data;

    const models = {Referral, ClientIcon}

    let collectionData;
    onMount(async () => {
        try {
            const resp = await api(data.collectionType, 'populate=deep&pagination[limit]=' + data.numColumns);
            collectionData = resp.data.data;
        } catch (e) {
            console.log("Error");
        }
    });
</script>

<div class="wrapper gutter {data.theme}">
    {#if data.heading}
        <h2>{data.heading}</h2>
    {/if}
    <div class="inner">
        {#if collectionData}
            {#each collectionData as item}
                <svelte:component this={models[item.attributes.collectionType]} data={item.attributes} columns={data.numColumns}/>
            {/each}
        {/if}
    </div>
    {#if data.button[0]}
        <Button data={data.button[0]} />
    {/if}
</div>

<style>
    .wrapper {
        font-size: 24px;
        text-align: center;
    }

    .secondary {
        margin-top: 128px;
    }

    h2 {
        margin-bottom: 64px;
        text-align: left;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 39.06px;
    }

    .inner {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 64px;
        text-align: left;
        margin-bottom: 64px;
    }
</style>