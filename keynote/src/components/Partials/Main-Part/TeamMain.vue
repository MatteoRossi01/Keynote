<template>
    <!-- Box team -->
    <section class="box-team">

        <!-- Title team -->
        <div class="title-box">
            <span>Lorem</span>
            <span>Lorem</span>
        </div>
        <!-- Title team -->

        <!-- Cards team -->
        <div class="card-team-box">
            <div class="card-team">
                
            </div>

            <div class="card-team">
                
            </div>

            <div class="card-team">
                
            </div>

            <div class="card-team">
                
            </div>
        </div>
        <!-- Cards team -->

    </section>
    <!-- Box team -->
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style lang="scss">
    .box-team {
        height: 245px;
        width: 100%;
        background-color: rgb(26, 68, 70);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title-box {
            height: 20px;
            width: 700px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #000;
        }

        .card-team-box {
            display: flex;
            flex-direction: row;

            .card-team {
                height: 120px;
                width: 160px;
                margin: 0px 10px;
                border: 1px solid #000;
            }
        }
    }
</style>