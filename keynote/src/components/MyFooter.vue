<template>
    <!-- Box footer -->
    <section class="box-footer">

        <!-- Container info footer -->
        <div class="footer-info-container">

            <div class="box-info">

            </div>

            <div class="box-info">

            </div>

            <div class="box-info">

            </div>

            <div class="box-info">

            </div>

        </div>
        <!-- Container info footer -->

        <!-- Footer bottom -->
        <div class="footer-bottom">
            <div class="box-footer-bottom">
                <span>Lorem</span>
                <span>Lorem</span>
            </div>
        </div>
        <!-- Footer bottom -->
        
    </section> 
    <!-- Box footer -->
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .box-footer {
        height: 370px;
        width: 100%;
        background-color: #403d3b;

        .footer-info-container {
            height: 310px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            .box-info {
                height: 230px;
                width: 220px;
                margin: 0px 10px;
                border: 1px solid #000;
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
                width: 940px;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>