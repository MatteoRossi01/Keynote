<template>
  <div id="app">
    <Header/>
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
  }
}
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

</style>
