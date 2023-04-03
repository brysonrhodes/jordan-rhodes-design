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
            <a href='/' id="logo-anchor"><img id="logo" src={Logo} alt="Jordan Rhodes" /></a>
            <div class="inner-socials">
                {#if socials}
                    {#each socials as item}
                        <a href={item.href} target="_blank"><img class="icon" src={item.image} alt={item.imageAlt}/></a>
                    {/each}
                {/if}
            </div>
        </div>
        <Nav links={links} headerNav={false}/>
    </div>
    <div class="bottom-wrapper">
        <img class="small-logo" src={RedSands} alt="Red Sands Creative"/>
        <p>Developed by Bryson Rhodes</p>
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

    .socials,  .inner-socials {
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

    @media screen and (max-width: 600px) {
        .nav-wrapper {
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
        }

        .socials {
            margin-top: 64px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        #logo {
            margin-right: 0;
        }

        .icon {
            width: 32px;
        }
    }
</style>