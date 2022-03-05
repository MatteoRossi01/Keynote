<template>
    <section class="main">
        
        <!-- Sub Box -->
        <Subscribe/>
        <!-- Sub Box -->

        <!-- Team Box -->
        <Team :Teams="Teams"/>
        <!-- Team Box -->

        <!-- Program Box -->
        <Program :Days="Days" :ProgramSpeacker="ProgramSpeacker"/>
        <!-- Program Box -->

        <!-- Location Box -->
        <Location :LocationInfo="LocationInfo"/>
        <!-- Location Box -->

        <!-- News Box -->
        <News :News="News"/>
        <!-- News Box -->

        <!-- Ticket Box -->
        <Ticket :Tickets="Tickets"/>
        <!-- Ticket Box -->

        <!-- Presentation Box -->
        <Presentation/>
        <!-- Presentation Box -->

        <!-- Sponsor Box -->
        <Sponsor/>
        <!-- Sponsor Box -->

    </section> 
</template>

<script>
import Subscribe from './Partials/Main-Part/SubMain.vue';
import Team from './Partials/Main-Part/TeamMain.vue';
import Program from './Partials/Main-Part/ProgramMain.vue';
import Location from './Partials/Main-Part/LocationMain.vue';
import News from './Partials/Main-Part/NewsMain.vue';
import Ticket from './Partials/Main-Part/TicketMain.vue';
import Presentation from './Partials/Main-Part/PresMain.vue';
import Sponsor from './Partials/Main-Part/SponsorMain.vue';

export default {
    components: {
        Subscribe,
        Team,
        Program,
        Location,
        News,
        Ticket,
        Presentation,
        Sponsor,
    },

    data() {
        return {
            /* Array gestione Team */
            Teams: [
                {
                    name: 'CARL JONES',
                    work: 'S&P Analyzer',
                    src: require('./Partials/Main-Part/img/speaker-1.jpg'),
                },
                {
                    name: 'JANET JONES',
                    work: 'Newyork Posts GM',
                    src: require('./Partials/Main-Part/img/speaker-2.jpg'),
                },
                {
                    name: 'MICHAEL DOVER',
                    work: 'Starbucks CEO',
                    src: require('./Partials/Main-Part/img/speaker-3.jpg'),
                },
                {
                    name: 'ANGELINA HOLY',
                    work: 'Maxii Manager',
                    src: require('./Partials/Main-Part/img/speaker-4.jpg'),
                }
            ],
            /* Array gestione Team */

            /* Array gestione days */  
            Days: [
                {
                    day: 'DAY 1',
                    date: '23 may 2016',
                },
                {
                    day: 'DAY 2',
                    date: '24 may 2016'
                },
                {
                    day: 'DAY 3',
                    date: '25 may 2016'
                },
                {
                    day: 'DAY 4',
                    date: '26 may 2016'
                },
                {
                    day: 'DAY 5',
                    date: '27 may 2016'
                },
                {
                    day: '',
                    date: ''
                },
            ],
            /* Array gestione days */

            /* Array gestione program speacker */
            ProgramSpeacker : [
                {
                    hour: '09:00 - 10:30',
                    room: 'ROOM A',
                    speacker: 'LOURENCE FRANCIS',
                    title: 'WELCOMING AND INTRODUCTION',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatibus ducimus hic blanditiis architecto numquam omnis.',
                    src: require('./Partials/Main-Part/img/speaker-8-150x150.jpg'),
                }
            ],
            /* Array gestione program speacker */

            /* Array gestione location */
            LocationInfo : [
                {
                    name: 'GD BUILDING, GRAND CONFERENCE ROOM',
                    address: '11 GD Building, River Mall, New York, USA 8879',
                    number: '+1-112-222-3344',
                    mail: 'Contact@TheKeynoteTheme.com',
                }
            ],
            /* Array gestione location */

            /* Array gestione news */
            News : [
                {
                    date: '03 Dec 2013 / 0 Comments',
                    title: 'LOREM IPSUM DOLOR',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi veritatis harum porro veniam dignissimos ipsum quod quos at, ducimus, sit.',
                    src: require('./Partials/Main-Part/img/photodune-7770665-two-white-coffee-mug-with-diy-decoration-o.jpg'),
                },
                {
                    date: '03 Dec 2013 / 2 Comments',
                    title: 'LOREM IPSUM DOLOR',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi veritatis harum porro veniam dignissimos ipsum quod quos at, ducimus, sit.',
                    src: require('./Partials/Main-Part/img/photodune-8797753-multiethnic-people-with-startup-business-t.jpg'),
                },
                {
                    date: '03 Dec 2013 / 2 Comments',
                    title: 'LOREM IPSUM DOLOR',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi veritatis harum porro veniam dignissimos ipsum quod quos at, ducimus, sit.',
                    src: require('./Partials/Main-Part/img/photodune-8522811-speaker-at-business-conference-and-present.jpg'),
                }
            ],
            /* Array gestione news */

            /* Array gestione ticket */
            Tickets: [
                {
                    type: 'ONE DAY PASS',
                    cost: 'FREE',
                    service: [
                        {
                            one: 'One Day Access',
                            two: 'Coffee Breack',
                            three: 'Lunch(International Buffet)',
                            four: 'Document Sheets',
                            five: '50USD Voucher For Next Event',
                        }
                    ],
                },
                {
                    type: 'FOUR DAY PASS',
                    cost: '750.00 USD',
                    service: [
                        {
                            one: 'Four Day Access',
                            two: 'Coffee Breack',
                            three: 'Lunch(International Buffet)',
                            four: 'Document Sheets',
                            five: '100USD Voucher For Next Event',
                        }
                    ],
                },
                {
                    type: 'TWO DAY PASS',
                    cost: '580.00 USD',
                    service: [
                        {
                            one: 'Two Day Access',
                            two: 'Coffee Breack',
                            three: 'Lunch(International Buffet)',
                            four: 'Document Sheets',
                            five: '70USD Voucher For Next Event',
                        }
                    ],
                },
            ]
            /* Array gestione ticket */
        }
    }
}
</script>

<style lang="scss">
    .main {
        width: 100%;
    }
</style>