<template>
    <!-- Box footer -->
    <section class="box-footer">

        <!-- Container info footer -->
        <div class="footer-info-container">

            <div v-for="(info, index) in FooterInfo" :key="index" class="box-info">
                <h6 class="title">{{info.title}}</h6>
                <p class="text-1">{{info.text}}</p>
                <div v-for="(icons, index) in info.social" :key="index" class="social-box">
                    <font-awesome-icon class="social" :icon="icons.icon1" />
                    <font-awesome-icon class="social" :icon="icons.icon2" />
                    <font-awesome-icon class="social" :icon="icons.icon3" />
                    <font-awesome-icon class="social" :icon="icons.icon4" />
                    <font-awesome-icon class="social" :icon="icons.icon5" />
                    <font-awesome-icon class="social" :icon="icons.icon6" />
                </div>
            </div>

            <div v-for="(obj, index) in FooterNews" :key="index" class="box-info">
                <h6 class="title">{{obj.title}}</h6>

                <div v-for="(text, index) in obj.news" :key="index">
                    <div class="news">
                        <font-awesome-icon class="arrow-right" icon="fa-solid fa-angle-right" />
                        <span>{{text.textNews1}}</span>
                    </div>
                    <div class="news">
                        <font-awesome-icon class="arrow-right" icon="fa-solid fa-angle-right" />
                        <span>{{text.textNews2}}</span>
                    </div>
                    <div class="news">
                        <font-awesome-icon class="arrow-right" icon="fa-solid fa-angle-right" />
                        <span>{{text.textNews3}}</span>
                    </div>
                    <div class="news">
                        <font-awesome-icon class="arrow-right" icon="fa-solid fa-angle-right" />
                        <span>{{text.textNews4}}</span>
                    </div>
                    <div class="news">
                        <font-awesome-icon class="arrow-right" icon="fa-solid fa-angle-right" />
                        <span>{{text.textNews5}}</span>
                    </div>
                </div>

            </div>

            <div v-for="(obj, index) in FooterSeat" :key="index" class="box-info">
                <h6 class="title">{{obj.title}}</h6>
                <p class="text-1">{{obj.text}}</p>
                <a class="btn-sub" href="#">CHECK OUT TICKETS!</a>
            </div>

            <div v-for="(obj, index) in FooterImg" :key="index" class="box-info">
                <h6 class="title">{{obj.title}}</h6>
                <div v-for="(img, index) in obj.images" :key="index" class="img-mini">
                    <img class="img-footer" :src="img.img1">
                    <img class="img-footer" :src="img.img2">
                    <img class="img-footer" :src="img.img3">
                    <img class="img-footer" :src="img.img4">
                    <img class="img-footer" :src="img.img5">
                    <img class="img-footer" :src="img.img6">
                    <img class="img-footer" :src="img.img7">
                    <img class="img-footer" :src="img.img8">
                    <img class="img-footer" :src="img.img9">
                    <img class="img-footer" :src="img.img10">
                    <img class="img-footer" :src="img.img11">
                    <img class="img-footer" :src="img.img12">
                </div>
            </div>

        </div>
        <!-- Container info footer -->

        <!-- Footer bottom -->
        <div class="footer-bottom">
            <div class="box-footer-bottom">
                <span>© Copyright GoodLayers, All Right Reserved</span>
                <div>
                    <a href="">About Us</a>
                    <a href="">Accommodation</a>
                    <a href="">Call For Paper</a>
                    <a href="">Contact Us</a>
                </div>
            </div>
        </div>
        <!-- Footer bottom -->
        
    </section> 
    <!-- Box footer -->
</template>

<script>
export default {
    props: {
        'FooterInfo': Array,
        'FooterNews': Array,
        'FooterSeat': Array,
        'FooterImg': Array,
    },
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss">
    .box-footer {
        height: 400px;
        width: 100%;
        background-color: #403d3b;

        .footer-info-container {
            height: 340px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            .box-info {
                height: 250px;
                width: 230px;
                margin: 0px 20px;

                .title {
                    color: #BAB8B5;
                    font-weight: 600;
                    font-size: 16px;
                    margin-bottom: 20px;
                }

                .text-1 {
                    color: #BAB8B5;
                    font-size: 12px;
                    line-height: 19px;
                    margin-top: 24px;
                    margin-bottom: 30px;
                }

                .social-box {

                    .social {
                        font-size: 27px;
                        color: #fff;
                        margin-right: 14px;
                        cursor: pointer;
                    }
                }

                .news {
                    margin-top: 8px;
                    .arrow-right {
                        color: #BAB8B5;
                        font-size: 10px;
                        padding: 0px 6px;
                    }
                    
                    span {
                        font-size: 12px;       
                        color: #6A6A6A;
                        cursor: pointer;
                    }
                }

                .btn-sub {
                    color: #fff;
                    text-decoration: none;
                    padding: 12.4px 14px;
                    border-bottom: 3px solid #A72510;
                    background-color: #F62B0A;
                    font-size: 12px;
                    font-weight: bold;
                    letter-spacing: 1px;
                }

                .img-mini {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;

                    .img-footer {
                        width: 45px;
                        margin: 5px 5px;
                        cursor: pointer;
                    }
                }
            }
        }

        .footer-bottom {
            position: relative;
            bottom: 0px;
            width: 100%;
            height: 60px;
            background-color: #040404;
            display: flex;
            justify-content: center;
            align-items: center;

            .box-footer-bottom {
                width: 1050px;
                display: flex;
                justify-content: space-between;

                span {
                    font-size: 13px;
                    color: #757375;
                }

                div {
                    a {
                        font-size: 13px;
                        color: #757375;
                        text-decoration: none;
                        padding: 0px 8px;
                        border-right: 1px solid #757375;
                    }
                }
            }
        }
    }
</style>