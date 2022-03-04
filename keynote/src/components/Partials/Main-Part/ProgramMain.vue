<template>
    <!-- Box program -->
    <section class="box-program">

        <!-- Title program -->
        <div class="title-box">
            <span>Lorem</span>
            <span>Lorem</span>
        </div>
        <!-- Title program -->

        <!-- Card program -->
        <div class="card-program-box">
            
        </div>
        <!-- Card program -->
        
    </section>
    <!-- Box program -->
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style lang="scss">
    .box-program {
        height: 430px;
        width: 100%;
        background-color: rgb(84, 209, 53);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title-box {
            height: 50px;
            width: 700px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #000;
        }

        .card-program-box {
            height: 250px;
            width: 700px;
            border: 1px solid #000;
        }
    }
</style>