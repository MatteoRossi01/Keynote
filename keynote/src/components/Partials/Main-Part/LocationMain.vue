<template>
    <!-- Box location -->
    <section class="box-location">

        <!-- Box Map -->
        <div class="box-map">
            <div style="width: 100%"><iframe scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=New%20York,%2010001,%20Stati%20Uniti+(GD%20BUILDING.%20GRAND%20CONFERENCE%20ROOM)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="400" frameborder="0"><a href="https://www.gps.ie/truck-gps/">transport gps</a></iframe></div>
        </div>
        <!-- Box Map -->

        <!-- Box Address -->
        <div class="box-address">

            <div v-for="(info, index) in LocationInfo" :key="index" class="text-address">
                <h3 class="title-loc">LOCATION</h3>
                <span class="name-loc">{{info.name}}</span>
                <span class="add-loc">
                    <font-awesome-icon class="icon-loc" icon="fa-solid fa-location-arrow" />
                    {{info.address}}
                </span>
                <a href="#" class="check">Check For Accomodation Here</a>
                <div class="contact">
                    <span>
                        <font-awesome-icon class="icon-loc" icon="fa-solid fa-phone" />
                        {{info.number}}
                    </span>
                    <span>
                        <font-awesome-icon class="icon-loc" icon="fa-solid fa-envelope" />
                        {{info.mail}}
                    </span>
                </div>
            </div>

        </div>
        <!-- Box Address -->
        
    </section>
    <!-- Box location -->
</template>

<script>
export default {
    props: ['LocationInfo']
}
</script>

<style lang="scss">
    .box-location {
        height: 750px;
        width: 100%;
        

        .box-map {
            width: 100%;
            height: 400px;   
        }

        .box-address {
            width: 100%;
            height: 400px;
            background-image: url('./img/location-bg.jpg');
            background-position: center;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 5px;

            .text-address {
                width: 580px;
                height: 240px;
                margin-bottom: 50px;
                display: flex;
                flex-direction: column;
                align-items: center;

                .title-loc {
                    color: #fff;
                    font-size: 33px;
                    font-weight: bold;
                }

                .name-loc {
                    color: #fff;
                    font-size: 25px;
                    font-weight: bold;
                    margin-top: 20px;
                }

                .add-loc {
                    color: #fff;
                    margin-top: 3px;
                    font-size: 15px;
                }

                .check {
                    color: #F62B0A;
                    font-size: 15px;
                    margin-top: 15px;
                    text-decoration: none;
                }

                .check:hover {
                    color: #cc1b00;
                } 

                .contact {
                    padding-top: 5px;
                    margin-top: 30px;
                    border-top: 4px solid #fff;

                    span {
                        color: #fff;
                        font-size: 15px;
                        margin: 0px 12px;

                        .icon-loc {
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
    }
</style>