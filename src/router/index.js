import Vue from "vue";
import VueRouter from "vue-router";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Projects from "../components/Projects.vue";
import Skills from "../components/Skills.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/about"
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
