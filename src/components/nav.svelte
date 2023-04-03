<script>
    import menu from '../assets/images/menu.svg';
    import close from '../assets/images/close.svg';
    import { onMount } from 'svelte';
    export let links;
    export let currentPage;
    export let headerNav;

    links.forEach(link => {
        if(currentPage === link.href) {
            link.theme += " active";
        }
    });

    let navClass;
    if(headerNav) {
        navClass = 'header';
    }

    let navVisible = 'none';
    let menuVisible = 'visible';
    let closeVisible = 'hidden';
    const toggleMenu = () => {
        console.log('Toggle')
        if(menuVisible === 'visible') {
            closeVisible = 'visible';
            menuVisible = 'hidden';
            navVisible = 'block';
        } else {
            closeVisible = 'hidden';
            menuVisible = 'visible';
            navVisible = 'none';
        }
    }

    let windowHeight;

    onMount(async () => {
        windowHeight = window.innerHeight;
    })
</script>

{#if navClass ===  'header'}
    <div class="mobile-buttons">
        <img class="menu" src={menu} alt="menu"  on:keyup={toggleMenu} on:click={toggleMenu} style="--menu-visible:{menuVisible}"/>    
    </div>
{/if}
<nav class={navClass} style="--nav-visible:{navVisible}">
    <img class="close" src={close} alt="close" on:keyup={toggleMenu} on:click={toggleMenu} style="--close-visible:{closeVisible}"/>
    <ul>
        {#if links}
            {#each links as link}
            <span>
                <a href={link.href} class={link.theme}><li>{link.text}</li></a>
                {#if link.href === currentPage && headerNav}
                    <div class="dot"><span></span></div>
                {/if}
            </span>
            {/each}
        {/if}
    </ul>
</nav>

<style>
    .close {
        visibility: hidden;
    }

    .menu {
        visibility: hidden;
    }

    nav ul {
        display: flex;
        justify-content: space-evenly;
        gap: 64px;
    }

    nav ul li {
        list-style: none;
    }

    nav ul a {
        color: white;
        text-decoration: none;
    }

    .primary {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
    }

    nav ul a:hover {
        color: #00FF9F;
    }

    .header .active {
        color: #00FF9F;
    }

    .dot {
        width: 10px;
        height: 10px;
        background-color: #00FF9F;
        border-radius: 50%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 5px;
    }

    @media screen and (max-width: 600px) {
        .mobile-buttons {
            display: flex;
        }

        .menu {
            visibility: var(--menu-visible);
            margin-left: auto;
        }

        .close {
            visibility: var(--close-visible);
        }

        .header {
            padding-top: 30px;
            position: absolute;
            right: 0;
            top: 0;
            display: var(--nav-visible);
            z-index: 2;
            width: 338px;
            height: var(windowHeight);
            background-color: #393939;
        }

        nav ul {
            padding: 0;
            flex-direction: column;
            text-align: center;
            justify-content: space-around;
        }

        .dot {
            display: none;
        }
    }
</style>