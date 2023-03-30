<script>
    import Logo from '../assets/images/jordan-rhodes-logo.svg';
    import RedSands from '../assets/images/red-sands.svg';
    import Nav from '../components/nav.svelte';
    import socials from '../lib/socials';
    export let links;
</script>

<footer class="gutter">
    <div class="nav-wrapper">
        <div class="socials">
            <img id="logo" src={Logo} alt="Jordan Rhodes" />
            {#if socials}
                {#each socials as item}
                    <a href={item.href} target="_blank"><img class="icon" src={item.image} alt={item.imageAlt}/></a>
                {/each}
            {/if}
        </div>
        <Nav links={links} />
    </div>
    <div class="bottom-wrapper">
        <p>Developed by Bryson Rhodes</p>
        <img class="small-logo" src={RedSands} alt="Red Sands Creative"/>
        <p>|</p>
        <img class="small-logo" src={Logo} alt="Jordan Rhodes"/>
        <p>Designed by Jordan Rhodes</p>
    </div>
</footer>

<style>
    footer {
        margin-top: 128px;
    }
    
    #logo {
        width: 72;
        margin-right: 32px;
    }

    .nav-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .socials {
        display: flex;
        align-items: center;
        gap: 32px;
    }

    .icon {
        width: 16px;
    }

    .bottom-wrapper {
        margin-top: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
    }

    .small-logo {
        width: 32px;
    }
</style>