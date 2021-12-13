<style>

body {
  background: #fff;
  color: #202124;
  cursor: auto;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.444;
  margin: 0;
  overflow-wrap: break-word;
  padding: 0;
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

p,
h1,
h2,
h3 {
  margin: 0;
}

p {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-weight: 400;
  line-height: 1.75;
  font-size: 16px;
  letter-spacing: .25px;
  margin-bottom: 16px;
}

* > p:last-child {
    margin-bottom: 0;
}

a {
  color: #393b39;
}

h1 {
  font-size: 36px;
  font-weight: 400;
  letter-spacing: -.25px;
  line-height: 44px;
}

h2 {
  font-size: 28px;
  font-weight: 400;
  letter-spacing: initial;
  line-height: 36px;
}

h3 {
  font-size: 24px;
  font-weight: 400;
  letter-spacing: initial;
  line-height: 32px;
}

h4 {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: initial;
  line-height: 28px;
}

@media (min-width: 600px) {
  p {
    line-height: 1.75;
    font-size: 16px;
    letter-spacing: .25px;
    margin-bottom: 16px;
  }

  h1 {
    font-size: 48px;
    font-weight: 400;
    letter-spacing: -.5px;
    line-height: 56px;
  }

  h2 {
    font-size: 40px;
    font-weight: 400;
    letter-spacing: -.5px;
    line-height: 48px;
  }

  h3 {
    font-size: 32px;
    font-weight: 400;
    letter-spacing: -.25px;
    line-height: 40px;
  }

  h4 {
    font-size: 28px;
    font-weight: 400;
    letter-spacing: initial;
    line-height: 36px;
  }
}

@media (min-width: 1024px) {
  p {
    line-height: 1.75;
    font-size: 16px;
    letter-spacing: 0;
    margin-bottom: 16px;
  }

  h1 {
    font-size: 60px;
    font-weight: 400;
    letter-spacing: -.5px;
    line-height: 72px;
  }

  h2 {
    font-size: 48px;
    font-weight: 400;
    letter-spacing: -.5px;
    line-height: 56px;
  }

  h3 {
    font-size: 36px;
    font-weight: 400;
    letter-spacing: -.25px;
    line-height: 44px;
  }

  h4 {
    font-size: 28px;
    font-weight: 400;
    letter-spacing: initial;
    line-height: 36px;
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: 60px;
    font-weight: 400;
    letter-spacing: -.5px;
    line-height: 72px;
  }

  h2 {
    font-size: 48px;
    font-weight: 400;
    letter-spacing: -.5px;
    line-height: 56px;
  }

  h3 {
    font-size: 36px;
    font-weight: 400;
    letter-spacing: -.25px;
    line-height: 44px;
  }

  h4 {
    font-size: 28px;
    font-weight: 400;
    letter-spacing: initial;
    line-height: 36px;
  }
}

img {
  display: inline-block;
  width: 100%;
  max-width: 100%;
  height: auto;
}

.app__main {
  margin-top: 160px;
}

.app__views {
  min-height: 79.5vh;
}

.app__page {
  box-sizing: border-box;
  margin: 0 28px;
}

@media (min-width: 600px) {
  .app__page {
    margin: 0 40px;
  }
}

@media (min-width: 1024px) {
  .app__page {
    margin: 0 72px;
  }
}

@media (min-width: 1440px) {
  .app__page {
    margin: 0 auto;
    max-width: 1296px;
  }
}

</style>

<template>
  <div class="app__main">

    <Header></Header>

    <main class="app__views app__page">
      <transition
          @enter="enter"
          @leave="leave">
        <router-view/>
      </transition>
    </main>

    <Footer></Footer>

    <Assets></Assets>

  </div>
</template>

<script>
// move animation stuff to another file
import gsap from "gsap";
import {loadImages} from './js/utils.js';
import {
  enterStaggerAnimation,
  leaveStaggerAnimation,
  enterProjectsAnimation,
  leaveProjectsAnimation,
  enterCloseBtn,
  leaveCloseBtn,
} from './js/animation.js';

import Assets from './components/partials/Assets.vue';
import Header from './components/partials/Header.vue';
import Footer from './components/partials/Footer.vue';

export default {
  name: 'App',
  components: {
    Assets,
    Header,
    Footer,
  },
  data () {
    return {
      transitionName: null,
      toProjectPage: null
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      // if (to.path.includes('projects')) {
      //   console.log(to.path)
      //   this.toProjectPage = true;
      // } else {
      //   this.toProjectPage = false;
      // }
      to.path.includes('projects') ? this.toProjectPage = true : this.toProjectPage = false;
      this.transitionName = toDepth < fromDepth ? 'to-projects' : 'from-projects'
    }
  },
  methods: {
    leave (el, done) {

      const master = gsap.timeline({
        onStart: () => {
          document.body.classList.add('body--overflow');
          console.log("onStart leave")
        },
        onComplete: () => {
          if (document.body.classList.contains('images-are-loaded')) {
            document.body.classList.remove('images-are-loaded');
          }
          done();
        },
      });

      if (this.transitionName === 'to-projects') {
        master
            .add(leaveProjectsAnimation('.work__item'), '<')
      } else {
        master
          .add(leaveStaggerAnimation('.anim__stagger-default'), '<')
      }
    },
    enter (el, done) {

      const master = gsap.timeline({
        onComplete: () => {
          document.body.classList.remove('body--overflow');
          done();
        },
      });

      if (this.transitionName === 'to-projects') {
        master.add(enterProjectsAnimation('.work__item'), '<')
      } else {
        if (this.toProjectPage) {
          console.log('going to a project page')
          master
              .add(enterStaggerAnimation('.anim__stagger-default'), '<')
        } else {
          console.log('going to about or contact page')
          master
              .add(enterStaggerAnimation('.anim__stagger-default'), '<')
        }
      }
    },
  },
  mounted: function() {
    if (!document.body.classList.contains('is-loaded')) {
      console.log('inial load has happened')
      loadImages([
      '../static/images/about-img.jpg',
      '../static/images/contact-bg.jpg'
    ], function() {
      document.body.classList.add('is-loaded');
    });
    }
    
  }
}
</script>
