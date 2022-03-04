<template>
    <!-- Jumbotron -->
    <section class="box-jumbo">
        <!-- Box Img  -->
        <BoxImg :Conferences="Conferences"/>
        <!-- Box Img  -->

        <!-- Box Info  -->
        <BoxInfo :InfoArray="InfoArray"/>
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

    data() {
        return {
            /* Array gestione conference Jumbotron */
            Conferences: [
                {
                    title: 'SOCIAL NETWORKS',
                    date: '23 - 26 MAY 2019',
                    city: 'SAN FRANCISCO',
                    speackers: '8 SPEACKERS',
                    back: '',
                }
            ],
            /* Array gestione conference Jumbotron */

            /* Array gestione info Prod */
            InfoArray: [
                {
                    title: 'WHO WE ARE',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem id dignissimos, voluptatum voluptas.',
                    icon: 'fa-solid fa-trophy',
                },
                {
                    title: 'WHAT WE DO',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam numquam veritatis nobis ducimus ipsa neque dolore,',
                    icon: 'fa-solid fa-bolt',
                },
                {
                    title: 'WHY US?',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam numquam veritatis nobis ducimus ipsa neque dolore,',
                    icon: 'fa-solid fa-question',
                },
            ],
            /* Array gestione info Prod */
        }
    }

}
</script>

<style lang="scss">
    .box-jumbo {
        width: 100%;
        padding-top: 70px;
    }
</style>