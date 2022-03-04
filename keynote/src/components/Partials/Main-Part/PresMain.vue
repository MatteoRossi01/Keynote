<template>
    <!-- Box presentation -->
    <section class="box-pres">

        <!-- Card presentation -->
        <div class="card-pres">

        </div>
        <!-- Card presentation -->

        <!-- Card presentation -->
        <div class="card-pres">

        </div>
        <!-- Card presentation -->
        
    </section>
    <!-- Box presentation -->
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style lang="scss">
    .box-pres {
        height: 380px;
        width: 100%;
        background-color: rgb(89, 238, 238);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .card-pres {
            height: 260px;
            width: 330px;
            margin: 0px 20px;
            border: 1px solid #000;
        }
    }
</style>