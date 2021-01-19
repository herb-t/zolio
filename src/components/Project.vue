<template>
  <div class="project">
    <div class="project__content">
      <h1 class="anim__stagger-default">{{details.title}}</h1>
      <p class="anim__stagger-default">{{details.id}}</p>
      <p class="anim__stagger-default">{{details.thumbnail}}</p>
      <p class="anim__stagger-default" v-for="item in details.text" :key="item">{{item}}</p>
    </div>
  </div>
</template>

<script>
import store from '../router/store'
import {projects} from './data.js'

export default {
  name: 'Project',
  store,
  props: ['projectTitle', 'projectId', 'projectSrc'],
  data () {
    return {
      msg: 'Project post page',
      projects: projects
    }
  },
  computed: {
    details () {
      return this.projects.find(project => project.slug === this.$route.params.id)
    }
  },
  mounted: function() {
    console.log('Project Page - mounted()')
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
