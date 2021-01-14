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
    details () {
      return store.state.details
    },
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
