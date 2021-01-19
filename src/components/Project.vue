<template>
  <div class="project">
    <div class="project__content">
      <h1 class="anim__stagger-default">{{details.title}}</h1>
      <p class="anim__stagger-default">{{details.id}}</p>
      <p class="anim__stagger-default">{{details.thumbnail}}</p>
      <p class="anim__stagger-default" v-for="item in details.text" :key="item">{{item}}</p>
      <img class="anim__stagger-default" v-for="image in details.images" :key="image" :src="image">
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import {projects} from '../js/data.js'
import {loadImages} from '../js/utils.js';

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
      console.log('images are loaded - do something')
      let tl = gsap.timeline();

      tl.to(
        '.anim__stagger-default',
        {
          yPercent: '0',
          opacity: 1,
          duration: 0.6,
          ease: 'power4.out',
          stagger: 0.075,
        }
      );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
