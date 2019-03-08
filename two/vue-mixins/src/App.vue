<template>
  <div id="app">
    <comp1></comp1>
    <comp2></comp2>
  </div>
</template>

<script>

import comp1 from "./components/comp1"
import comp2 from "./components/comp2"

export default {
  name: 'app',
  components: {
    comp1,
    comp2,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
