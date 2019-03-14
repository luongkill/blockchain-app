<template>
  <b-container>
    <h2>Blockchain</h2>
    <block v-for="block in blockList" :block="block" :key="block.index"></block>
  </b-container>
</template>

<script>
import Block from './Block.vue'
export default {
  name: 'blockchain',
  components: {
    Block
  },
  computed: {
    blockList() {
      return this.$store.state.blockList
    }
  },
  created() {
    this.$store.commit('setTimestamp')
    this.$store.commit('setData', 'my blockchain')
    this.$store.dispatch('setBlockList')
  }
}
</script>

<style></style>
