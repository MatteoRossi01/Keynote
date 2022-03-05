<template>
    <section class="box-news">
        
        <!-- Title news -->
        <div class="title-box">
            <span class="title">RECENT NEWS</span>
            <span class="text-orange">Read All News</span>
        </div>
        <!-- Title news -->

        <!-- Card news -->
        <div class="card-news-box">

            <div v-for="(info, index) in News" :key="index" class="card-news">
                <img :src="info.src" alt="">
                <span class="date">{{info.date}}</span>
                <span class="title-news">{{info.title}}</span>
                <p class="text">{{info.text}}</p>
                <a href="#" class="learn">Read More</a>
            </div>
            
        </div>
        <!-- Card news -->

    </section>
</template>

<script>
export default {
    props: ['News']
}
</script>

<style lang="scss">
    .box-news {
        height: 520px;
        width: 100%;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title-box {
            height: 30px;
            width: 800px;
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .title {
                color: #424242;
                font-size: 19px;
                font-weight: bold;
                letter-spacing: 1px;
            }

            .text-orange {
                color: #F62B0A;
                font-size: 14px;
                text-decoration: none;
                font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
            }
        }

        .card-news-box {
            height: 300px;
            width: 800px;
            display: flex;
            justify-content: space-between;
            flex-direction: row;

            .card-news {
                height: 100%;
                width: 250px;
                display: flex;
                flex-direction: column;

                img {
                    width: 100%;
                    height: 60%;
                }

                .date {
                    font-size: 13px;
                    margin-top: 15px;
                    color: #979797;
                }

                .title-news {
                    color: #000;
                    font-size: 18px;
                    font-weight: 600;
                }

                .text {
                    font-size: 13px;
                    margin-top: 10px;
                    color: #979797;
                    line-height: 15px;
                }

                .learn {
                    color: #F62B0A;
                    font-size: 15px;
                    text-decoration: none;
                    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                }
            }
        }
    }
</style>