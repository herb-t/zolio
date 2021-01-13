import Vue from 'vue';
import Router from 'vue-router';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';

// Projects
import Project from '@/components/Project';
import ProjectOne from '@/components/projects/ProjectOne';
import ProjectTwo from '@/components/projects/ProjectTwo';

Vue.use(Router)

export default new Router({
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
      path: '/projects/project-1/',
      name: 'Project One',
      component: ProjectOne,
    },
    {
      path: '/projects/project-2/',
      name: 'Project Two',
      component: ProjectTwo,
    },
    {
      path: '/detail/',
      name: 'Project Detail',
      component: Project,
    },
  ]
})
