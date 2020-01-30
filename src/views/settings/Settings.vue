<template>
  <div>
    <button @click="() => changeTheme('dark')">Dark theme</button>
    <button @click="() => changeTheme('light')">White theme</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Settings',
  methods: mapActions('settings', [
    'changeTheme'
  ])
};
</script>

<style scoped>

</style>
