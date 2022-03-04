<template>
  <div id="app">
    <Header :Navbar="Navbar"/>
    <Jumbo/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/MyHeader.vue';
import Main from './components/MyMain.vue';
import Footer from './components/MyFooter.vue';
import Jumbo from './components/MyJumbo.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Jumbo,
    Main,
  },

  data() {
    return {

      /* Array di oggetti per l'header */
      Navbar: [
        {
          link: 'HOME',
          active: true,
        },
        {
          link: 'PAGES',
          active: false,
        },
        {
          link: 'PROGRAM',
          active: false,
        },
        {
          link: 'TICKETS',
          active: false,
        },
        {
          link: 'SPEAKERS',
          active: false,
        },
        {
          link: 'PAPERS',
          active: false,
        },
        {
          link: 'BLOG',
          active: false,
        },
        {
          link: 'SHORTCODES',
          active: false,
        },
      ]
      /* Array di oggetti per l'header */
      
    }
  }
}
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

</style>
