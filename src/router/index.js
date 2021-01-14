import Vue from 'vue';
import Router from 'vue-router';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';

// Projects
import Project from '@/components/Project';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/about/',
      name: 'About',
      component: About
    },
    {
      path: '/contact/',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/projects/:id',
      name: 'Project Detail',
      component: Project,
    },
  ]
})
