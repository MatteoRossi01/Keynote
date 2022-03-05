<template>
    <!-- Box program -->
    <section class="box-program">

        <!-- Title program -->
        <div class="title-box">
            <div class="program">
                <span class="title">PROGRAM</span>
                <span class="info-program">This conference run through all 4 days from 23 - 26 May 2016. we also provide free lunch and coffee break in each day.</span>
            </div>
            <span class="text-orange">View Full Program</span>
        </div>
        <!-- Title program -->

        <!-- Card program -->
        <div class="card-program-box">

            <div class="days-row">
                <div v-for="(obj, index) in Days" :key="index" class="day-box">
                    <span class="day">{{obj.day}}</span>
                    <span class="date">{{obj.date}}</span>
                </div>
            </div>

            <div v-for="(obj, index) in ProgramSpeacker" :key="index" class="info-row">
                <div class="box-hours">
                    <span class="text-hour">
                        <font-awesome-icon class="icon-hour" icon="fa-solid fa-clock" />
                        {{obj.hour}}
                    </span>
                    <span class="text-hour">
                        <font-awesome-icon class="icon-hour" icon="fa-solid fa-location-arrow" />
                        {{obj.room}}
                    </span>
                    <span class="text-hour">
                        <font-awesome-icon class="icon-hour" icon="fa-solid fa-user" />
                        {{obj.speacker}}
                    </span>
                </div>
                <div class="box-info">
                    <h4 class="title-info">{{obj.title}}</h4>
                    <span class="text-info-program">{{obj.text}}</span>
                    <img class="img-info-speacker" :src="obj.src" alt="">
                </div>
            </div>
        </div>
        <!-- Card program -->
        
    </section>
    <!-- Box program -->
</template>

<script>
export default {
    props: ['Days', 'ProgramSpeacker']
}
</script>

<style lang="scss">
    .box-program {
        height: 530px;
        width: 100%;
        margin-bottom: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title-box {
            height: 50px;
            width: 850px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .program {
                width: 450px;
                display: flex;
                flex-direction: row;
                align-items: center;

                .title {
                    color: #424242;
                    font-size: 19px;
                    font-weight: bold;
                }

                .info-program {
                    color: #979997;
                    font-size: 11px;
                    margin-left: 40px;
                }
            }

            .text-orange {
                color: #F62B0A;
                font-size: 14px;
                text-decoration: none;
                font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
            }
        }

        .card-program-box {
            height: 280px;
            width: 850px;

            .days-row {
                width: 100%;
                height: 55px;
                display: flex;
                flex-direction: row;
                

                .day-box {
                    height: 100%;
                    width: 17%;
                    display: flex;
                    flex-direction: column;
                    background-color: #F62B0A;
                    border-left: 1px solid rgba($color: #424242, $alpha: 0.4);

                    .day {
                        color: #fff;
                        font-weight: bold;
                        margin-left: 15px;
                        margin-top: 5px;
                    }

                    .date {
                        margin-left: 15px;
                        margin-top: -2px;
                        font-size: 12px;
                        color: #fff;
                    }

                    .active-info {
                        color: #C72B11;
                    }
                }
            }

            .info-row {
                width: 100%;
                height: 270px;
                display: flex;
                background-color: #F7F7F7;
                flex-direction: row;

                .box-hours {
                    height: 100%;
                    width: 35%;
                    display: flex;
                    flex-direction: column;
                    line-height: 10px;
                    margin-top: 20px;
                    

                    .text-hour {
                        margin-top: 30px;
                        margin-left: 35px;
                        font-size: 15px;
                        color: #979797;

                        .icon-hour {
                            margin-right: 20px;
                            color: #424242;
                            font-size: 18px;
                        }
                    }
                }

                .box-info {
                    height: 100%;
                    width: 65%;
                    display: flex;
                    flex-direction: column;

                    .title-info {
                        color: #424242;
                        margin-top: 25px;
                        margin-left: 25px;
                    }

                    .text-info-program {
                        color: #979797;
                        font-size: 12px;
                        margin-top: 10px;
                        margin-left: 25px;
                        margin-right: 20px;
                    }

                    .img-info-speacker {
                        width: 80px;
                        height: 80px;
                        margin-top: 20px;
                        margin-left: 25px;
                    }
                }
            }
        }
    }
</style>