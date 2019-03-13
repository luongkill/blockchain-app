<template>
  <div id="app">
    <blockchain></blockchain>
    <add-block></add-block>
  </div>
</template>

<script>
import Blockchain from './components/Blockchain.vue'
import AddBlock from './components/AddBlock.vue'
export default {
  name: 'app',
  components: {
    Blockchain,
    AddBlock
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
