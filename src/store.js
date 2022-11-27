import Vue from 'vue'
import Vuex from 'vuex'
// import sidebar1 from '@/assets/img/layout/sidebar-1.jpg'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    // barImage: sidebar1,
    barImage: null,
    drawer: null,
    connected: false,
    address: '0xF8b800376b959B3BBD546B75E56EA672d10744B9',
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    SET_CONNECTED (state, payload) {
      state.connected = payload
    },
    SET_ADDRESS (state, payload) {
      state.address = payload
    },
  },
  actions: {

  },
})
