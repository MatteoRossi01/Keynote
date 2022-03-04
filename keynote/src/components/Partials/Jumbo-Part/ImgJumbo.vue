<template>
    <!-- Box Img Jumbo -->
    <section class="box-img-jumbo">

        <div v-for="(conference, index) in Conferences" :key="index" class="text-jumbo">
            <span class="int-conf">CONFERENCE ON</span>
            <h1 class="title-conf">{{conference.title}}</h1>
            <div class="box-info-conf">
                <div class="info-conf">{{conference.date}}</div>
                <span>/</span>
                <div class="info-conf">{{conference.city}}</div>
                <span>/</span>
                <div class="info-conf">{{conference.speackers}}</div>
            </div>            
            <a class="btn-jumbo" href="">REGISTER ONLINE</a>
        </div>
        
    </section> 
    <!-- Box Img Jumbo -->
</template>

<script>
export default {
    props: ['Conferences']
}
</script>

<style lang="scss">
    /* Jumbo img */
        .box-img-jumbo {
            width: 100%;
            height: 450px;
            background-image: url("./img/slider-1-bg.jpg");
            background-position: center;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;

            .text-jumbo {
                width: 580px;
                height: 290px;
                margin-top: 25px;
                display: flex;
                flex-direction: column;
                align-items: center;

                .int-conf {
                    font-size: 34px;
                    margin-bottom: 15px;
                    color: #fff;
                }

                .title-conf {
                    font-size: 55px;
                    font-weight: bold;
                    color: #fff;
                }

                .box-info-conf {
                    display: flex;
                    flex-direction: row;
                    margin-top: 10px;
                    padding-top: 8px;
                    border-top: 3px solid #fff;
                    
                    .info-conf {
                        color: #fff;
                        font-family: 'Courier New', Courier, monospace;
                    }

                    span {
                        padding: 0px 20px;
                        color: #fff;
                    }
                }

                .btn-jumbo {
                    color: #fff;
                    text-decoration: none;
                    padding: 11px 16px;
                    border-radius: 3px;
                    background-color: #F62B0A;
                    font-size: 12px;
                    font-weight: bold;
                    letter-spacing: 1px;
                    margin-top: 25px;
                }
            }
        }
    /* Jumbo img */
</style>