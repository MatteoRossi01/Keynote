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
                <div class="day-box">
                    <span class="day">DAY 1</span>
                    <span class="date">23 may 2016</span>
                </div>
                <div class="day-box">
                    <span class="day">DAY 1</span>
                    <span class="date">24 may 2016</span>
                </div>
                <div class="day-box">
                    <span class="day">DAY 1</span>
                    <span class="date">25 may 2016</span>
                </div>
                <div class="day-box">
                    <span class="day">DAY 1</span>
                    <span class="date">26 may 2016</span>
                </div>
                <div class="day-box">
                    <span class="day">DAY 1</span>
                    <span class="date">27 may 2016</span>
                </div>
                <div class="day-box">
                    
                </div>
            </div>
        </div>
        <!-- Card program -->
        
    </section>
    <!-- Box program -->
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style lang="scss">
    .box-program {
        height: 480px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title-box {
            height: 50px;
            width: 700px;
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
            height: 250px;
            width: 700px;

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
                }
            }
        }
    }
</style>