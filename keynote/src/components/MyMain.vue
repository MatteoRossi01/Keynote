<template>
    <section class="main">
        
        <!-- Sub Box -->
        <Subscribe/>
        <!-- Sub Box -->

        <!-- Team Box -->
        <Team/>
        <!-- Team Box -->

        <!-- Program Box -->
        <Program/>
        <!-- Program Box -->

        <!-- Location Box -->
        <Location/>
        <!-- Location Box -->

        <!-- News Box -->
        <News/>
        <!-- News Box -->

        <!-- Ticket Box -->
        <Ticket/>
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
    }
}
</script>

<style lang="scss">
    .main {
        width: 100%;
    }
</style>