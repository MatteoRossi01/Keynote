<template>
    <!-- Box presentation -->
    <section class="box-pres">

        <!-- Card presentation -->
        <div class="card-pres">
            <span class="title">PRESENTATION</span>
            <img src="./img/461365506.jpeg" alt="">
            <div class="play-bar">
                <font-awesome-icon class="play" icon="fa-solid fa-play" />
                <div class="time-bar">
                    <span>1:01:26</span>
                    <font-awesome-icon class="icon-bar" icon="fa-solid fa-sort-down" />
                </div>
                <font-awesome-icon class="volume" icon="fa-solid fa-volume-high" />
                <font-awesome-icon class="volume" icon="fa-solid fa-gear" />
                <img class="vimeo" src="./img/kisspng-logo-vimeo-computer-icons-download-vimeo-logo-5b469c8290e1f8.8266574415313542425935.png" alt="">
            </div>
        </div>
        <!-- Card presentation -->

        <!-- Card presentation -->
        <div class="card-pres">
            <span class="title">TWITTER FEED</span>
            <div v-for="(comment, index) in Comments" :key="index" class="box-comment">
                <font-awesome-icon class="logo-twitter" icon="fa-brands fa-twitter" />
                <p>
                    {{comment.text}} 
                    <a class="link-red" href="#">{{comment.link}}</a>
                </p>
                <span>{{comment.day}}</span>
            </div>
        </div>
        <!-- Card presentation -->
        
    </section>
    <!-- Box presentation -->
</template>

<script>
export default {
    props: ['Comments']
}
</script>

<style lang="scss">
    .box-pres {
        height: 400px;
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .card-pres {
            height: 270px;
            width: 380px;
            margin: 0px 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .title {
                color: #424242;
                font-size: 20px;
                font-weight: bold;
                letter-spacing: 1px;
            }

            img {
                width: 320px;
                margin-top: 13px;
                margin-left: 28px;
            }

            .play-bar {
                height: 33px;
                width: 365px;
                background-color: rgba($color: #000000, $alpha: 0.8);
                border-radius: 4px;
                position: absolute;
                display: flex;
                align-items: center;
                bottom: 88px;
                left: 287px;

                .play {
                    font-size: 19px;
                    color: #fff;
                    margin-left: 15px;
                    cursor: pointer;
                }

                .volume {
                    font-size: 17px;
                    color: #fff;
                    margin-left: 10px;
                    cursor: pointer;
                }

                .time-bar {
                    width: 220px;
                    height: 10px;
                    border: 1px solid #424242;
                    margin-left: 20px;
                    cursor: pointer;
                    position: relative;

                    span {
                        font-size: 10px;
                        padding: 1px 3px;
                        background-color: #fff;
                        position: absolute;
                        bottom: 13px;
                        left: -15px;
                    }

                    .icon-bar {
                        color: #fff;
                        font-size: 12px;
                        position: absolute;
                        bottom: 9px;
                    }
                }

                .vimeo {
                    width: 23px;
                    position: absolute;
                    right: 5px;
                    bottom: 5px;
                    cursor: pointer;
                }
            }

            .box-comment {
                width: 400px;
                margin-bottom: 50px;
                position: relative;

                .logo-twitter {
                    color: #47BDEE;
                    font-size: 18px;
                    position: absolute;
                }

                p {
                    font-size: 11px;
                    color: #979797;
                    position: absolute;
                    left: 30px;
                }
            
                .link-red {
                    color: #F64C49;
                    text-decoration: none;
                }

                span {
                    color: #979797;
                    font-size: 13px;
                    font-family: 'Courier New', Courier, monospace;
                    position: absolute;
                    left: 30px;
                    top: 40px;
                }
            }
        }
    }
</style>