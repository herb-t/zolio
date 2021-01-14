<template>
  <div class="hello">
    <ul class="work">
      <li class="work__item" v-for="project in projects" :key="project.id" @click="getProjectData(project.title, project.src)">
        <router-link :to="/projects/ + project.slug">
          <img :src="'../' + project.thumbnail" alt="project.a11y">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Project from './Project.vue'
import store from '../router/store'
import {projects} from './data.js'
export default {
  name: 'Projects',
  store,
  props: ['projectTitle', 'projectId', 'projectSrc'],
  data () {
    return {
      msg: 'Work page',
      projects: projects
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
    getProjectData (title, src) {
      this.$store.commit('getTitle', title)
      this.$store.commit('getImage', src)
    }
  },
  components: {
    project: Project,
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}
li {
  flex-basis: 33.3333%;
  width: 33.3333%;
  padding: 54px 0;
  outline: 1px solid #ccc;
  border-radius: 4px;
}
a {
  color: #42b983;
}
</style>
