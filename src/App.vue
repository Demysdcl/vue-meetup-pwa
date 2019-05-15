<template>
  <v-app class="white">
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vue.js </span>
        <span class="font-weight-light">Curitiba</span>
      </v-toolbar-title>
      <v-btn flat to="/">
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn flat to="/users">
        <span class="mr-2">Usuários</span>
      </v-btn>
      <v-btn flat to="/about">
        <span class="mr-2">Sobre</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <transition name="route-transition" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  }
};
</script>

<style>
.route-transition-enter-active {
  transition: all 0.3s ease;
}
.route-transition-leave-active {
  transition: all 0.3s ease;
}
.route-transition-enter {
  transform: translateX(-50px);
  opacity: 0;
}
.route-transition-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>
