<script>
    export let data;
    import Button from './button.svelte';
    import TextIcon from '../models/textIcon.svelte';
</script>

<div class="wrapper {data.theme} gutter" id={data.blockId}>
    <img class="background-image" src={data.backgroundImage} alt={data.backgroundImageAlt} />
    <div class="content">
        <div class="text">
            {#if data.theme == "primary"}
                <h1>{data.heading}</h1>
            {:else}
                <img id="logo-image" src={data.logoImage} alt={data.logoImageAlt} />
            {/if}
            <div class="text-inner">
                <p>{data.text}</p>
                {#if data.text2} 
                    <p>{data.text2}</p>
                {/if}
            </div>
            {#if data.ctaButton}
                <Button data={data.ctaButton.attributes}/>
            {/if}
        </div>
        <img class="feature-image" src={data.featureImage} alt={data.featureImageAlt} />
    </div>
    {#if data.icons}
        <div class="icon-wrapper">
        {#each data.icons as icon}
            <TextIcon data={icon}/>
        {/each}
        </div>
    {/if}
</div>

<style>
    .wrapper {
        padding-top: 32px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-x: hidden;
    }

    .background-image {
        z-index: -1;
        width: 835px;
        position: absolute;
    }

    .primary .background-image {
        left: 0;
    }

    .caseStudy {
        padding-top: 128px;
    }

    .caseStudy .background-image {
        top: -100px;
        right: 0px;
    }

    .icon-wrapper {
        margin-top: 80px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 128px;
    }

    .content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .text {
        width: 50%;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
    }

    h1 {
        font-family: 'Oleo Script';
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
    }

    p {
        font-size: 36px;
    }

    @media screen and (max-width: 600px)  {
        .content {
            position: relative;
            flex-direction: column;
        }

        .wrapper {
            padding-top: 30px;
        }

        .background-image {
            width:  550px;
            top: 410px;
            transform:  translateX(-5%);
        }

        #logo-image {
            width: 90%;
        }

        .text {
            width: 100%;
        }

        .text-inner {
            margin-bottom: 325px;
        }

        h1 {
            font-size: 32px;
            line-height: 44.26px;
            text-align: center;
        }

        .feature-image {
            position: absolute;
            top: 150px;
            z-index: -1;
            width: 300px;
        }

        p {
            font-weight: 300;
            font-size: 25px;
            line-height: 37.5px;
            margin-top: 335px;
            margin-bottom: 173px;
        }

        .caseStudy p {
            margin: 8px;
            margin-left: 0;
        }

        .caseStudy .background-image {
            display: none;
        }

        .caseStudy .feature-image {
            margin-top: 30px;
        }

        .icon-wrapper {
            flex-wrap: wrap;
            gap: 63px;
        }
    }
</style>