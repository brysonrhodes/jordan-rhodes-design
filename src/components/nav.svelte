<script>
    export let links;
</script>

<nav>
    <ul>
        {#if links}
            {#each links as link}
                <a href={link.href} class={link.theme}><li>{link.text}</li></a>
            {/each}
        {/if}
    </ul>
</nav>

<style>
    nav ul {
        display: flex;
    }

    nav ul li {
        list-style: none;
        padding-right: 0;
        padding-left: 64px;
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
</style>