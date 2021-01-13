<template>
  <div class="project">
    <h1>Project</h1>
    <div class="project__content">
      <h1 class="anim__stagger-default">{{title}}</h1>
      <p class="anim__stagger-default">{{id}}</p>
      <p class="anim__stagger-default">{{src}}</p>
    </div>
  </div>
</template>

<script>
import store from '../router/store'

export default {
  name: 'Project',
  store,
  props: ['projectTitle', 'projectId', 'projectSrc'],
  data () {
    return {
      msg: 'Project post page'
    }
  },
  computed: {
    count () {
	    return store.state.count
    },
    id () {
      return store.state.id
    },
    title () {
      return store.state.title
    },
    src () {
      return store.state.src
    }
  },
  methods: {
    getProjectData () {
      // store.state.title = this.projectTitle;
      // store.state.src = this.projectSrc;
      store.commit('getTitle');
      store.commit('getImage');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
