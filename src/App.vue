<template>
  <div id="app">
    <stbm-banner danger>Cool banner</stbm-banner>
  </div>
</template>

<script>
import StbmBanner from "./components/Banner/Banner";
export default {
  name: "app",
  components: { StbmBanner }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
