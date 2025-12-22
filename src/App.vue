<template>
  <div id="app">
    <header></header>
    <tool-bar></tool-bar>
    <main></main>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
export default {
  components: {
    ToolBar,
  },
};
</script>

<style>
body {
  padding: 0%;
  margin: 0%;
}
</style>
