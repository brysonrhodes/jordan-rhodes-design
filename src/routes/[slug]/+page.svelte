<script>
    // Components
    import Header from '../../components/header.svelte';
    import Footer from '../../components/footer.svelte';
    import Hero from '../../components/hero.svelte';
    import Carousel from '../../components/carousel.svelte';
    import ColumnSection from '../../components/columnSection.svelte';
    import FullSection from '../../components/fullSection.svelte';
    import FullMedia from '../../components/fullMedia.svelte';
    import { mainNav } from '../../lib/menus';


    // Helper Functions
    import inView from '../../utlis/helperFunctions';

    // Page Data
    import { hollandAmerica } from '../../lib/pages';

    /** @type {import('./$types').PageData} */
    export let data;

    let headerVisibility = "visible";
    const components = {Header, Hero, Carousel, ColumnSection, FullSection, FullMedia}
    const pages = {hollandAmerica}

    let pageData = pages[data.page];
</script>

<div class="app-wrapper">
    <Header visible={headerVisibility} links={mainNav}/>
    {#if pageData}
        {#each pageData.blocks as block}
            <svelte:component this={components[block.blockType]} data={block}/>
        {/each}
    {/if}
    <div use:inView on:enter={() => { headerVisibility = "hidden"; }} on:exit={() => headerVisibility = "visible"} class="pre-footer"><span></span></div>
    <Footer links={mainNav}/>
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