<script>
    import Header from '../../components/header.svelte';
    import Footer from '../../components/footer.svelte';
</script>

<div class="app-wrapper">
    <Header />
    <h1>Page not Found</h1>
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
        width: 15px;
        background-color: #00FF9F;
    }
</style>