<template>
    <!-- Jumbotron -->
    <section class="box-jumbo">

        <!-- Box Img  -->
        <BoxImg/>
        <!-- Box Img  -->

        <!-- Box Info  -->
        <BoxInfo/>
        <!-- Box Info  -->
        
    </section> 
    <!-- Jumbotron -->
</template>

<script>
import BoxInfo from './Partials/Jumbo-Part/InfoJumbo.vue';
import BoxImg from './Partials/Jumbo-Part/ImgJumbo.vue';

export default {
    components: {
        BoxInfo,
        BoxImg
    },

}
</script>

<style lang="scss">
    .box-jumbo {
        width: 100%;
        padding-top: 70px;
    }
</style>