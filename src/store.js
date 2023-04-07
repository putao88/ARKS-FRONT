import Vue from 'vue'
import Vuex from 'vuex'
import { connectWeb3, getAccounts } from '@/utils/web3Action'

// import sidebar1 from '@/assets/img/layout/sidebar-1.jpg'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    // barImage: sidebar1,
    barImage: null,
    drawer: null,
    address: '',
    isLoggedIn: true,
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    SET_ADDRESS (state, payload) {
      state.address = payload
    },
    SET_IS_LOGGED_IN (state, payload) {
      state.isLoggedIn = payload
    },
  },
  actions: {
    getLoginAddress ({ commit }) {
      getAccounts.then(result => {
        commit('SET_ADDRESS', result.address)
      }).catch(e => {
        console.log('error in get address', e)
      })
    },
    connectWeb3 ({ commit }) {
      connectWeb3.then(result => {
        commit('SET_ADDRESS', result.address)
      }).catch(e => {
        console.log('error in connect web3', e)
      })
    },
  },
})
