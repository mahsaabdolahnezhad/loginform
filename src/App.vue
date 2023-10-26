<template>
  <v-app>
  <router-view name="LoginForm"></router-view>
    <v-main>
      <router-view/>
      <NavBar v-if="!$route.name || $route.name !== 'LoginForm'"/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'App',
  components: {
  NavBar
  },


  data: () => ({
    //
  }),
};
</script>
