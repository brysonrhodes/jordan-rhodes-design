<script>
    import api from "../lib/api";
    export let data;
    export let columns;
    let columnWidth = 100 / columns;
    const url = data.icon.data.attributes.url;
    const alt = data.icon.data.attributes.alternativeText;
</script>

<div class="wrapper" style="--column-width: {columnWidth}%">
    <img src='{import.meta.env.VITE_URL}{url}' alt="{alt}"/>
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