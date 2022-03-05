<template>
    <section class="box-ticket">

        <!-- Title ticket -->
        <div class="title-box">
            <span>TICKETS</span>
        </div>
        <!-- Title ticket -->

        <!-- Cards ticket -->
        <div class="card-ticket-box">

            <div v-for="(ticket, index) in Tickets" :key="index" class="card-ticket">
                <div class="type-ticket">
                    <h5>{{ticket.type}}</h5>
                    <span>{{ticket.cost}}</span>
                </div>
                <div v-for="(text, index) in ticket.service" :key="index" class="service-ticket">
                    <span>{{text.one}}</span>
                    <span>{{text.two}}</span>
                    <span>{{text.three}}</span>
                    <span>{{text.four}}</span>
                    <span>{{text.five}}</span>
                </div>
                <div class="buy">
                    <span>BOOK NOW</span>
                </div>
            </div>
            
        </div>
        <!-- Cards ticket -->
        
    </section>
</template>

<script>
export default {
    props: ['Tickets']
}
</script>

<style lang="scss">
    .box-ticket {
        height: 550px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url('./img/ticket-bg.jpg');
        background-position: center;
        background-size: cover;

        .title-box {
            height: 30px;
            width: max-content;
            margin-bottom: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            span {
                font-size: 32px;
                font-weight: bold;
                letter-spacing: 1px;
                color: #fff;
            }
        }

        .card-ticket-box {
            height: 315px;
            width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: row;

            .card-ticket {
                height: 100%;
                width: 285px;
                margin: 10px 10px;

                .type-ticket {
                    background-color: #E9E9E9;
                    width: 100%;
                    height: 25%;
                    display: flex;
                    align-items: center;
                    flex-direction: column;

                    h5 {
                        margin-top: 16px;
                        font-size: 21px;
                        font-weight: bold;
                    }

                    span {
                        color: #F62B0A;
                        font-size: 17px;
                        font-weight: bold;
                        margin-top: -8px;
                    }
                }

                .service-ticket {
                    width: 100%;
                    height: 60%;
                    display: flex;
                    background-color: #fff;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    
                    span {
                        font-size: 14px;
                        color: #979797;
                        font-family: 'Courier New', Courier, monospace;
                        line-height: 28px;
                    }
                }

                .buy {
                    background-color: #F62B0A;
                    width: 100%;
                    height: 15%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;

                    span {
                        color: #fff;
                        font-size: 16px;
                        font-weight: bold;
                    }
                }
            }
        }
    }
</style>