<script>
    import Header from '../components/header.svelte';
    import Footer from '../components/footer.svelte';
    import Hero from '../components/hero.svelte';
    import Carousel from '../components/carousel.svelte';
    import ColumnSection from '../components/columnSection.svelte';
    import inView from '../utlis/helperFunctions';
    import api from '../lib/api';
    import {onMount} from 'svelte';

    const components = {Header, Hero, Carousel, ColumnSection}

    let error = null;
    let headerVisibility = "visible";
    let pageData;
    onMount(async () => {
        try {
            const resp = await api("pages", "populate=deep&filters[slug][$null]=true");
            pageData = resp.data.data[0].attributes;
        } catch (e) {
            error = e;
        }
    });
</script>

<div class="app-wrapper">
    <Header visible={headerVisibility}/>
    {#if pageData}
        {#each pageData.blocks as block}
            <svelte:component this={components[block.blockType]} data={block}/>
        {/each}
    {/if}
    <div use:inView on:enter={() => { headerVisibility = "hidden"; }} on:exit={() => headerVisibility = "visible"} class="pre-footer"><span></span></div>
    <Footer />
</div>

<style>
    :global(body) {
        padding: 0;
        margin: 0;
        background-color: #393939;
        color: white;
        font-family: 'Montserrat', sans-serif;
    }

    :global(.gutter) {
        margin-left: 256px;
        margin-right: 256px;
    }

    :global(::-webkit-scrollbar) {
        width: 10px;
    }

    :global(::-webkit-scrollbar-track) {
        background-color: #727272;
    }

    :global(::-webkit-scrollbar-thumb) {
        border-radius: 10px;
        width: 15px;
        background-color: #00FF9F;
    }

    .pre-footer {
        width: 100%;
        height: 1px;
        transform: translateY(1px);
    }
</style>
