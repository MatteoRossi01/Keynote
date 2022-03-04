<template>
    <!-- Box sponsor -->
    <section class="box-sponsor">

        <!-- Box title sponsor -->
        <div class="box-title">

        </div>
        <!-- Box title sponsor -->

        <!-- Cards sponsor -->
        <div class="box-card-sponsor">

            <div class="card-sponsor">

            </div>

            <div class="card-sponsor">

            </div>

            <div class="card-sponsor">

            </div>

            <div class="card-sponsor">

            </div>

            <div class="card-sponsor">

            </div>

            <div class="card-sponsor">

            </div>

        </div>
        <!-- Cards sponsor -->
        
    </section>
    <!-- Box sponsor -->
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style lang="scss">
    .box-sponsor {
        height: 320px;
        width: 100%;
        background-color: rgb(27, 48, 172);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .box-title {
            height: 80px;
            width: 150px;
            margin-bottom: 40px;
            border: 1px solid #000;
        }

        .box-card-sponsor {
            width: 740px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .card-sponsor {
                height: 105px;
                width: 105px;
                border: 1px solid #000;
            }
        }
    }
</style>