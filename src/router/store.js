import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    details: {
      id: Number,
      slug: String,
      title: String,
      thumbnail: String,
      thumbnail_caption: String,
      images: Array,
      text: Array,
      a11y: String,
      link: String,
    }
  },
  mutations: {
    getDetails: (state, details) => state.details = details,
  },
  actions: {
  },
  getters: {
    // getProjectSlug: state => {
    //   return state.details.find(project => project.slug)
    // }
  }
})
