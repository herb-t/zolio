<style scoped>

.project {
  position: relative;
}

.project__content {
  display: flex;
}

.project__aside {
  flex-basis: 35%;
  width: 35%;
}

.project__main {
  flex-basis: 65%;
  width: 65%;
  margin-left: 54px;
}

.project__main img {
  margin-bottom: 54px;
  opacity: 0;
}

.project__close {
  position: fixed;
  top: 84px;
  right: 24px;
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background: rgba(0, 0, 0, .25);
  opacity: 0;
  transform: translateX(15%) rotate(90deg) scale(0);
}

.project__close svg {
  margin: 8px;
  fill: #fff;
}

</style>

<template>
  <div class="project">
    <div class="project__close">
      <router-link to="/">
        <svg role="img" class="app-icon app-icon--24px" alt=""><use xlink:href="#close"></use></svg>
      </router-link>
    </div>

    <div class="project__content">
      <div class="project__aside">
        <h1 class="anim__stagger-default">{{details.title}}</h1>
        <p class="anim__stagger-default">{{details.id}}</p>
        <p class="anim__stagger-default">{{details.thumbnail}}</p>
        <p class="anim__stagger-default" v-for="item in details.text" :key="item">{{item}}</p>
      </div>
      <div class="project__main">
        <img class="anim__project-image" v-for="image in details.images" :key="image" :src="image">
      </div>
    </div>
  </div>
</template>

<script>
import {projects} from '../js/data.js'
import {loadImages} from '../js/utils.js';
import {enterProjectPost} from '../js/animation.js';

export default {
  name: 'Project',
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
    let projectImages = this.details.images;
    loadImages(projectImages, this.imagesAreLoaded);
  },
  methods: {
    imagesAreLoaded () {
      enterProjectPost('.anim__project-image', '.project__close');
    }
  }
}
</script>
