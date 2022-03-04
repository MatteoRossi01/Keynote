<template>
    <!-- Box Info Jumbo -->
    <section class="box-info-prod">

        <div class="card-info">

        </div>

        <div class="card-info">

        </div>

        <div class="card-info">

        </div>
        
    </section> 
    <!-- Box Info Jumbo -->
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    /* Box info product */
    .box-info-prod {
        width: 100%;
        height: 220px;
        background-color: rgb(71, 62, 206);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .card-info {
            width: 250px;
            height: 140px;
            margin: 0px 15px;
            border: 1px solid #000;
        }
    }
    /* Box info product */
</style>