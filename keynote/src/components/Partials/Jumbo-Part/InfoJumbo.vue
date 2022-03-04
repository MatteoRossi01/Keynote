<template>
    <!-- Box Info Jumbo -->
    <section class="box-info-prod">

        <div v-for="(info, index) in InfoArray" :key="index"  class="card-info">
            <div class="title-info">
                <font-awesome-icon class="info-icon" :icon="info.icon" />
                <span class="title">{{info.title}}</span>
            </div>
            <p class="text">{{info.text}}</p>
            <a href="#" class="learn">Learn More</a>
        </div>
        
    </section> 
    <!-- Box Info Jumbo -->
</template>

<script>
export default {
    props: ['InfoArray']
}
</script>

<style lang="scss">
    /* Box info product */
    .box-info-prod {
        width: 100%;
        height: 220px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .card-info {
            width: 290px;
            height: 140px;
            margin: 0px 15px;

            .title-info {
                display: flex;
                align-items: center;
                
                .info-icon {
                    font-size: 25px;
                    margin-right: 25px;
                    color: #BABABA;
                }

                .title {
                    color: #333333;
                    font-size: 15px;
                    font-weight: bold;
                }
            }

            .text {
                color: #979997;
                font-size: 12px;
                margin-left: 40px;
                margin-top: 10px;
            }

            .learn {
                color: #F62B0A;
                margin-left: 40px;
                margin-top: 8px;
                font-size: 15px;
                text-decoration: none;
                font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            }
        }
    }
    /* Box info product */
</style>