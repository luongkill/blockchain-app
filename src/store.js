import Vue from 'vue'
import Vuex from 'vuex'
import { ethers } from 'ethers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blockList: [],
    index: 0,
    timestamp: null,
    data: null,
    previous_hash: 0,
    hash: null,
    nonce: 0
  },
  mutations: {
    setTimestamp(state) {
      state.timestamp = Date.now()
    },
    setData(state, payload) {
      state.data = payload
    },
    setHash(state, payload) {
      state.hash = payload
    },
    updateIndex(state) {
      state.index += 1
    }
  },
  actions: {
    setBlockList({ commit, dispatch, state }) {
      let newBlock = {
        timestamp: state.timestamp,
        data: state.data,
        previous_hash: state.previous_hash
      }
      newBlock['index'] = state.index
      commit('updateIndex')
      dispatch('hashBlock', newBlock)
      newBlock['hash'] = state.hash
      this.state.blockList.push(newBlock)
    },
    hashBlock({ commit }, payload) {
      let payloadString = JSON.stringify(payload)
      let payloadHex = ''
      for (let i = 0; i < payloadString.length; i++) {
        payloadHex += payloadString.charCodeAt(i).toString(16)
      }
      commit('setHash', ethers.utils.sha256('0x' + payloadHex))
    }
  }
})
