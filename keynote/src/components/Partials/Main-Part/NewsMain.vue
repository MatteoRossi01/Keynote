<template>
    <section class="box-news">
        
        <!-- Title news -->
        <div class="title-box">
            <span>Lorem</span>
            <span>Lorem</span>
        </div>
        <!-- Title news -->

        <!-- Card news -->
        <div class="card-news-box">

            <div class="card-news">

            </div>

            <div class="card-news">

            </div>

            <div class="card-news">

            </div>
            
        </div>
        <!-- Card news -->

    </section>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style lang="scss">
    .box-news {
        height: 400px;
        width: 100%;
        background-color: rgb(241, 130, 38);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title-box {
            height: 30px;
            width: 700px;
            margin-bottom: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #000;
        }

        .card-news-box {
            height: 230px;
            width: 700px;
            display: flex;
            justify-content: space-between;
            flex-direction: row;

            .card-news {
                height: 100%;
                width: 215px;
                border: 1px solid #000;
            }
        }
    }
</style>