<script>
    export let data;
    export let columns;
    let columnWidth = 100 / columns;
</script>

<div class="wrapper" style="--column-width: {columnWidth}%">
    <img src={data.image} alt="{data.imageAlt}"/>
    <div class="inner">
        <p class="name">{data.name} | {data.company}</p>
        <p>{data.text}</p>
    </div>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: var(--column-width);
    }

    .inner {
        text-align: left;
    }

    .inner .name {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
    }

    .inner p {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
    }

    @media screen and (max-width: 600px) {
        .wrapper {
            width: 100%;
        }

        .inner {
            width: 350px;
        }
    }
</style>