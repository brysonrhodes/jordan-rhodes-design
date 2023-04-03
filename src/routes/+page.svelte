<script>
    // Library imports
    import inView from '../utlis/helperFunctions';
    import { onMount } from 'svelte'

    // Components
    import Header from '../components/header.svelte';
    import Footer from '../components/footer.svelte';
    import Hero from '../components/hero.svelte';
    import Carousel from '../components/carousel.svelte';
    import ColumnSection from '../components/columnSection.svelte';

    //Import Component Data
    import { referralColumnData, landingHeroData, caseStudyCarousel, logoColumnsData } from '../lib/mainPage';
    import { mainNav } from '../lib/menus';

    let headerVisibility = "visible";
    let windowWidth;

    onMount(async () => {
        windowWidth = window.innerWidth;
    })
</script>

<div class="app-wrapper">
    <Header visible={headerVisibility} links={mainNav} currentPage="/"/>
    <Hero data={landingHeroData}/>
    
    {#if windowWidth > 500}
        <ColumnSection data={referralColumnData} />
    {:else}
        <Carousel data={referralColumnData} />
    {/if}
    {#if windowWidth > 500}
        <Carousel data={caseStudyCarousel} />
    {:else}
        <ColumnSection data={caseStudyCarousel} />
    {/if}
    
    <ColumnSection data={logoColumnsData} />
    <div use:inView on:enter={() => { headerVisibility = "hidden"; }} on:exit={() => headerVisibility = "visible"} class="pre-footer"><span></span></div>
    <Footer links={mainNav} />
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

    @media screen and (max-width: 600px) {
        :global(.gutter) {
            margin-left: 20px;
            margin-right: 20px;
        }

        :global(::-webkit-scrollbar) {
            display: none;
        }
    }
</style>
