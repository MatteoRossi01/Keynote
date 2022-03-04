<template>
    <!-- Header -->
    <section  class="box-header">

        <!-- Logo header -->
        <div class="box-logo">
            <a href="#" class="logo">THE KEYNOTE</a>
        </div>
        <!-- Logo header -->

        <!-- Box Menu -->
        <div class="box-menu">
            <ul>
                <li v-for="(links, index) in Navbar" :key="index">
                    <a :class="links.active ? 'active' : ''" href="#">{{links.link}}</a>
                </li>
                <li class="separate"></li>
                <li>
                    <font-awesome-icon class="search" icon="fa-solid fa-magnifying-glass" />
                </li>
            </ul>
        </div>
        <!-- Box Menu -->

    </section> 
    <!-- Header -->
</template>

<script>
export default {
    props: ['Navbar']
    
}
</script>

<style lang="scss">

    .box-header {
        position: fixed;
        width: 100%;
        height: 70px;
        background-color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .box-logo {
            .logo {
                font-size: 22px;
                font-weight: bold;
                color: #424242;
                text-decoration: none;
            }
        }

        .box-menu {
            margin-left: 40px;

            ul {
                display: flex;
                flex-direction: row;
                margin-top: 15px;
                list-style: none;

                .separate {
                    height: 13px;
                    width: 2.1px;
                    margin-top: 5px;
                    margin-left: 30px;
                    background-color: #8E8E99;
                }

                li {
                    margin-left: 20px;

                    a {
                        font-weight: bold;
                        font-size: 12px;
                        text-decoration: none;
                        color: #8E8E99;
                        letter-spacing: 1.5px;
                    }

                    .search {
                        font-size: 16px;
                        margin-left: 10px;
                        color: #8E8E99;
                        cursor: pointer;
                    }

                    a:hover {
                        color: #F62B0A;
                        padding-bottom: 5px;
                        border-bottom: 3px solid #F62B0A;
                    }

                    .active {
                        color: #F62B0A;
                        padding-bottom: 5px;
                        border-bottom: 3px solid #F62B0A;
                    }
                }
            }
        }
    }
</style>