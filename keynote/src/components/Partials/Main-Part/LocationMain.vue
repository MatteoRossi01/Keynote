<template>
    <!-- Box location -->
    <section class="box-location">

        <!-- Box Map -->
        <div class="box-map">

        </div>
        <!-- Box Map -->

        <!-- Box Address -->
        <div class="box-address">

            <div class="text-address">

            </div>

        </div>
        <!-- Box Address -->
        
    </section>
    <!-- Box location -->
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style lang="scss">
    .box-location {
        height: 750px;
        width: 100%;
        background-color: rgb(209, 186, 53);

        .box-map {
            width: 100%;
            height: 400px;
            background-color: aqua;
        }

        .box-address {
            width: 100%;
            height: 350px;
            background-color: rgb(15, 134, 85);
            display: flex;
            justify-content: center;
            align-items: center;

            .text-address {
                width: 580px;
                height: 240px;
                border: 1px solid #000;
            }
        }
    }
</style>