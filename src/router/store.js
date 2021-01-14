import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    details: {
    id: 1,
    slug: 'project-1',
    title: 'Project Uno',
    thumbnail: 'static/images/thumbnails/memory.png',
    thumbnail_caption: 'website',
    images: [
      'static/images/preview/preview-artifact.jpg'
    ],
    text: [
      'Text line one.',
      'Text line two!'
    ],
    a11y: 'a11y text',
    link: 'www.google.com',
    }
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    getTitle: (state, title) => state.title = title,
    getImage: (state, src) => state.src = src,
    getDetails: (state, details) => state.details = details,
  },
  actions: {

  },
  getters: {

  }
})