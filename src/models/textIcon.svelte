<script>
    export let data;
</script>

<div class="text-icon {data.theme}">
    <img src={data.icon} alt={data.text} />
    <p>{data.text}</p>
</div>

<style>
    .text-icon {
        display: flex;
        flex-direction: column;;
        align-items: center;
    }

    p {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        color: #00FF9F;
    }

    .project-complete {
        margin-top: 64px;
    }

    .project-complete p {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 31.25px;
    }

</style>