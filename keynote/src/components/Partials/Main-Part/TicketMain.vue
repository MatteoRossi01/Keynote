<template>
    <section class="box-ticket">

        <!-- Title ticket -->
        <div class="title-box">
            <span>Lorem</span>
        </div>
        <!-- Title ticket -->

        <!-- Cards ticket -->
        <div class="card-ticket-box">

            <div class="card-ticket">

            </div>

            <div class="card-ticket">

            </div>

            <div class="card-ticket">

            </div>
            
        </div>
        <!-- Cards ticket -->
        
    </section>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style lang="scss">
    .box-ticket {
        height: 400px;
        width: 100%;
        background-color: rgb(206, 238, 89);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title-box {
            height: 30px;
            width: max-content;
            margin-bottom: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #000;
        }

        .card-ticket-box {
            height: 230px;
            width: 700px;
            display: flex;
            justify-content: space-between;
            flex-direction: row;

            .card-ticket {
                height: 100%;
                width: 215px;
                border: 1px solid #000;
            }
        }
    }
</style>