<script>
     import Logo from '../assets/images/jordan-rhodes-logo.svg';
     import Nav from './nav.svelte';
     export let visible;
     export let links;
     export let currentPage;
</script>

<header>
    <div class="gutter">
        <div class="wrapper">
            <div class="left" style="--visible:{visible}">
                <a href="/"><img class="logo" src={Logo} alt="JR"/></a>
            </div>
            <div class="right">
                <Nav links={links} currentPage={currentPage} headerNav/>
            </div>
        </div>
    </div>
</header>

<style>
    a {
        cursor: pointer;
    }

    header {
        padding-top: 30px;
        padding-bottom: 30px;
        position: sticky;
        top: 0;
        z-index: 2;
        background-color: #393939;
    }

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .left {
        visibility: var(--visible);
    }
</style>