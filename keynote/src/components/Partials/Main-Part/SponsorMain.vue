<template>
    <!-- Box sponsor -->
    <section class="box-sponsor">

        <!-- Box title sponsor -->
        <div class="box-title">
            <h4>SPONSORS</h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis neque deserunt</span>
        </div>
        <!-- Box title sponsor -->

        <!-- Cards sponsor -->
        <div class="box-card-sponsor">

            <div v-for="(sponsor, index) in Sponsors" :key="index" class="card-sponsor">
                <img :src="sponsor.src" alt="">
            </div>
            
        </div>
        <!-- Cards sponsor -->
        
    </section>
    <!-- Box sponsor -->
</template>

<script>
export default {
    props: ['Sponsors']
}
</script>

<style lang="scss">
    .box-sponsor {
        height: 400px;
        width: 100%;
        background-color: #F6F6F6;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .box-title {
            width: 290px;
            height: 80px;
            margin-bottom: 80px;
            text-align: center;
            
            h4 {
                font-weight: bold;
                font-size: 32px;
                letter-spacing: 1px;
            }

            span {
                font-size: 12px;
                color: #979797;
                
            }
        }

        .box-card-sponsor {
            width: 740px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .card-sponsor {
                height: 105px;
                width: 105px;
                display: flex;
                flex-direction: column;
            }
        }
    }
</style>