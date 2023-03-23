<script>
    export let data;
    export let columns;
    let columnWidth = 100 / columns;
    const image = data.photo.data.attributes.url;
    const alt = data.photo.data.attributes.alternativeText;
</script>

<div class="wrapper" style="--column-width: {columnWidth}%">
    <img src="{import.meta.env.VITE_URL}{image}" alt="{alt}"/>
    <div class="inner">
        <p class="name">- {data.name} | {data.company}</p>
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
</style>