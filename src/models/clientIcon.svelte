<script>
    export let data;
    export let columns;
    let columnWidth = 100 / columns;
</script>

<div class="wrapper" style="--column-width: {columnWidth}%">
    <img src={data.image} alt={data.imageAlt}/>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: var(--column-width);
    }
    
    img {
        margin-top: 64px;
    }
</style>