<template>
  <div>
    <b-card>
      <b-form>
        <b-form-group
          id="datagroup"
          label-cols="2"
          label="data"
          label-for="data"
        >
          <b-form-input id="data" v-model="data" />
        </b-form-group>
        <b-form-group
          id="prevhashgroup"
          label-cols="2"
          label="previous hash"
          label-for="prevhash"
        >
          <div class="pt-2 text-left">{{ block.previous_hash }}</div>
        </b-form-group>
        <b-form-group
          id="hashgroup"
          label-cols="2"
          label="hash"
          label-for="hash"
        >
          <div class="pt-2 text-left">{{ block.hash }}</div>
        </b-form-group>
        <b-form-group
          v-if="block.index == 0"
          id="blocknogroup"
          label-cols="2"
          label="Genesis Block"
          label-for="blockno"
        >
          <div class="pt-2 text-left">
            on {{ new Date(block.timestamp).toGMTString() }}
          </div>
        </b-form-group>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'block',
  props: ['block'],
  computed: {
    data: {
      get() {
        return this.$store.state.data
      },
      set(value) {
        this.$store.commit('setData', value)
      }
    }
  }
}
</script>

<style></style>
