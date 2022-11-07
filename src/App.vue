<template>
  <v-app>
    <NavBarVue />
    <v-main>
      <router-view/>
    </v-main>
    <FooterVue />
  </v-app>
</template>

<script>
import NavBarVue from './components/NavBar.vue';
import FooterVue from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    NavBarVue,
    FooterVue,
  },
  
  data: () => ({
    //
  }),
};
</script>
