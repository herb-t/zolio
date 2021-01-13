import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    id: 0,
    title: 'none',
    src: 'https://placekitten.com/1920/1080'
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    getTitle: (state, title) => state.title = title,
    getImage: (state, src) => state.src = src,
  },
  actions: {

  },
  getters: {

  }
})