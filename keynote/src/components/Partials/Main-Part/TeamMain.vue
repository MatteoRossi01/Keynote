<template>
    <!-- Box team -->
    <section class="box-team">

        <!-- Title team -->
        <div class="title-box">
            <span class="title">SPEAKERS</span>
            <div>
                <a href="#"><font-awesome-icon class="arrow-team" icon="fa-solid fa-angle-left" /></a>
                <a href="#"><font-awesome-icon class="arrow-team" icon="fa-solid fa-angle-right" /></a>
            </div>
        </div>
        <!-- Title team -->

        <!-- Cards team -->
        <div class="card-team-box">
            <div v-for="(speaker, index) in Teams" :key="index" class="card-team">
                <img width="100%" height="100%" :src="speaker.src" alt="">
                <span class="name-team">{{speaker.name}}</span>
                <span class="work">{{speaker.work}}</span>
            </div>
        </div>
        <!-- Cards team -->

    </section>
    <!-- Box team -->
</template>

<script>
export default {
    props: ['Teams']
}
</script>

<style lang="scss">
    .box-team {
        height: 325px;
        width: 100%;
        background-color: #F3F3F3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title-box {
            height: 20px;
            width: 700px;
            margin-bottom: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .title {
                color: #424242;
                font-size: 19px;
                font-weight: bold;
            }

            .arrow-team {
                padding: 8px 10px;
                margin: 0px 3px;
                border-radius: 5px;
                font-size: 12px;
                color: #fff;
                background-color: #F62B0A;
            }
        }

        .card-team-box {
            display: flex;
            flex-direction: row;
            margin-bottom: 40px;

            .card-team {
                height: 120px;
                width: 160px;
                margin: 0px 10px;
                display: flex;
                flex-direction: column;
                align-items: center;

                .name-team {
                    font-size: 13px;
                    color: #424242;
                    font-weight: bold;
                    margin-top: 12px;
                    letter-spacing: 1px;
                }

                .work {
                    color: #808080;
                    letter-spacing: 1px;
                    font-size: 11px;
                    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                }
            }
        }
    }
</style>