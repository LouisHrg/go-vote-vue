<template>
  <div id="app" :style="theme">
      <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState({
      theme: state => ({
        '--bg-color': state.settings.bgColor,
        '--font-color': state.settings.fontColor
      })
    })
  }
};
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

* {
  background-color: var(--bg-color);
  color: var(--font-color) !important;
  transition: background-color .3s, color .3s;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
