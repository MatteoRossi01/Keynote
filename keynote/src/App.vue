<template>
  <div id="app">
    <Header :Navbar="Navbar"/>
    <Jumbo/>
    <Main/>
    <Footer :FooterInfo="FooterInfo" :FooterImg="FooterImg" :FooterNews="FooterNews" :FooterSeat="FooterSeat"/>
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

      /* Array gestione header */
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
      ],
      /* Array gestione header */

      /* Array gestione info footer */
      FooterInfo: [
        {
          title: 'ABOUT US',
          text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est illo odit ut nam molestias, facilis possimus.',
          social: [
            {
              icon1: 'fa-brands fa-facebook-square',
              icon2: 'fa-brands fa-twitter-square',
              icon3: 'fa-brands fa-linkedin',
              icon4: 'fa-brands fa-google-plus-square',
              icon5: 'fa-brands fa-pinterest-square',
              icon6: 'fa-solid fa-square-minus',              }
          ],
        } 
      ],
      /* Array gestione info footer */

      /* Array gestione news footer */
      FooterNews:[
        {
          title: 'RECENT NEWS',
          news: [
            {
              textNews1: 'SEM PORTA MOLLIS PARTURIEM', 
              textNews2: 'NULLAM LOREM MATTIS PURUS',
              textNews3: 'NIBH SEM SIT ULLAMCORPER',  
              textNews4: 'DONNEC LUSTUS IMPERDIET',
              textNews5: 'MAGNA PARS STUDIOM',
            },
          ]
        },
      ],
      /* Array gestione news footer */

      /* Array gestione seat footer */
      FooterSeat:[
        {
          title: 'GET YOUR SEAT!',
          text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est illo odit ut nam.',
        }
      ],
      /* Array gestione seat footer */

      /* Array gestione images footer */
      FooterImg:[
        {
          title: 'GALLERY FROM LAST YEAR',
          images: [
            {
              img1: require('./components/Partials/Main-Part/img/13349065283_64d09b067c_o-150x150.jpg'),
              img2: require('./components/Partials/Main-Part/img/6426608875_186070f8ca_o-150x150.jpg'),
              img3: require('./components/Partials/Main-Part/img/card01-150x150.jpg'),
              img4: require('./components/Partials/Main-Part/img/card04-150x150.jpg'),
              img5: require('./components/Partials/Main-Part/img/photodune-6745579-modern-creative-man-relaxing-on-workspace-.jpg'),
              img6: require('./components/Partials/Main-Part/img/photodune-6745585-modern-creative-workspace-m-150x150.jpg'),
              img7: require('./components/Partials/Main-Part/img/photodune-6745606-man-wristwatch-calendar-key-and-glasses-on.jpg'),
              img8: require('./components/Partials/Main-Part/img/photodune-7770665-two-white-coffee-mug-with-diy-decoration-o (1).jpg'),
              img9: require('./components/Partials/Main-Part/img/photodune-8522811-speaker-at-business-conference-and-present (1).jpg'),
              img10: require('./components/Partials/Main-Part/img/photodune-8795110-overhead-of-essentials-denim-clothes-m-150.jpg'),
              img11: require('./components/Partials/Main-Part/img/photodune-8797753-multiethnic-people-with-startup-business-t (1).jpg'),
              img12: require('./components/Partials/Main-Part/img/photodune-8523683-speaker-at-business-convention-and-present.jpg'),
            },
          ],
        }
      ],
     /* Array gestione images footer */
      
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
