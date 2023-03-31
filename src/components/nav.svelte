<script>
    import Header from "./header.svelte";


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
</script>

<nav class={navClass}>
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
</style>