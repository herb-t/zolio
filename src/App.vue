<template>
  <div class="app__main">
    <header>
      <div class="header__content">
        <div class="header__logo">
        </div>
        <ul class="header__links">
          <li><router-link to="/">Projects</router-link></li>
          <li><router-link to="/about/">About</router-link></li>
          <li><router-link to="/contact/">Contact</router-link></li>
        </ul>
      </div>
    </header>
    <div class="app__views">
      <transition
          @enter="enter"
          @leave="leave">
        <router-view/>
      </transition>
    </div>
    
  </div>
</template>

<script>
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

const enterStaggerAnimation = item => {
  const tl = gsap.timeline();

  tl.to(
    item,
    {
      yPercent: '0',
      opacity: 1,
      stagger: 0.15,
    }
  );

  return tl;
};

const leaveStaggerAnimation = item => {
  const tl = gsap.timeline();

  tl.to(item, {
    yPercent: '15',
    opacity: 0,
    duration: 0.01
  });

  return tl;
};

const enterProjectsAnimation = item => {
  const tl = gsap.timeline();

  tl.to(
    item,
    {
      yPercent: '0',
      opacity: 1,
      stagger: 0.05,
    }
  );

  return tl;
};

const leaveProjectsAnimation = item => {
  const tl = gsap.timeline();

  tl.to(item, {
    yPercent: '100',
    opacity: 0,
    duration: 0.01
  });

  return tl;
};

export default {
  name: 'App',
  data () {
    return {
      transitionName: null,
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'to-projects' : 'from-projects'
    }
  },
  methods: {
    leave (el, done) {
      console.log('leave', this.transitionName)
      // const heroTitle = lineSplit('h1');

      const master = gsap.timeline({
        onStart: () => {
          document.body.classList.add('body--overflow');
          console.log("onStart leave")
        },
        onComplete: () => {
          console.log('leave on compleate')
          done();
        },
      });

      if (this.transitionName === 'to-projects') {
        master.add(leaveProjectsAnimation('.work__item'), '<')
      } else {
        master.add(leaveStaggerAnimation('.anim__stagger-default'), '<')
      }
    },
    enter (el, done) {
      console.log('enter', this.transitionName)
      // const heroTitle = lineSplit('h1');

      const master = gsap.timeline({
        onComplete: () => {
          document.body.classList.remove('body--overflow');
          console.log("on enter onComplete")
          done();
        },
      });

      if (this.transitionName === 'to-projects') {
        master.add(enterProjectsAnimation('.work__item'), '<')
      } else {
        master.add(enterStaggerAnimation('.anim__stagger-default'), '<')
      }
    },
  }
}
</script>

<style>
body,
html {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
}

img {
  display: inline-block;
  width: 100%;
  max-width: 100%;
  height: auto;
}

header {
  height: 64px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  position: fixed;
  background: #fff;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
}

.app__main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app__views {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px;
  box-sizing: border-box;
  margin-top: 120px;
}

.header__content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
}

.header__logo {
  flex: 1;
}

.header__links {
  flex: 1;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: flex-end;
}

.header__links li {
  margin: 0;
  list-style: none;
  margin-right: 24px;
}

.header__links li a {
  text-decoration: none;
}

.header__links li:last-child {
  margin: 0;
}

</style>
