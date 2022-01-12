<template>
  <div id="root">
    <!-- Home -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  mounted() {
    this.$store.dispatch('Data')
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
