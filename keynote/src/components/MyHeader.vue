<template>
    <!-- Header -->
    <section class="box-header">

        <!-- Logo header -->
        <div class="box-logo">
            <span>Lorem</span>
        </div>
        <!-- Logo header -->

        <!-- Box Menu -->
        <div class="box-menu">
            <ul>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
            </ul>
        </div>
        <!-- Box Menu -->

    </section> 
    <!-- Header -->
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

    .box-header {
        position: fixed;
        width: 100%;
        height: 70px;
        background-color: aquamarine;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .box-menu {
            margin-left: 360px;

            ul {
                display: flex;
                flex-direction: row;
                margin-top: 14.9px;
                list-style: none;

                li {
                    margin-left: 20px;
                }
            }
        }
    }

</style>