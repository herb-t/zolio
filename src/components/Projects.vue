<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}

li {
  flex-basis: 33.3333%;
  width: 33.3333%;
}

li:hover .work__item-image {
  opacity: 0.3;
}

li:hover .work__item-caption {
  opacity: 1;
}

figure {
  position: relative;
  overflow: hidden;
}

figcaption {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: table;
}

h5 {
  margin: 0;
}

.work__item {
  text-align: center;
}

.work__item-image {
}

.work__item-caption {
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  height: 100%;
  opacity: 0;
}
</style>

<template>
  <div class="hello">
    <ul class="work">
      <!-- <li class="work__item" v-for="project in projects" :key="project.id" @click="setProjectDetails(project)"> -->
      <li class="work__item" v-for="project in projects" :key="project.id">
        <router-link :to="/projects/ + project.slug">
          <figure>
            <img class="work__item-image" :src="'../static/images/thumbnails/' + project.thumbnail" alt="project.a11y">
            <figcaption>
              <div class="work__item-caption">
                <h5>{{project.title}}</h5>
                <p>{{project.thumbnail_caption}}</p>
              </div>
            </figcaption>
          </figure>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// import Project from './Project.vue'
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
    // details () {
    //   return store.state.details
    // }
  },
  methods: {
    // setProjectDetails (details) {
    //   this.$store.commit('getDetails', details)
    // }
  },
  // components: {
  //   project: Project,
	// }
}
</script>
