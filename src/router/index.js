import Vue from "vue";
import VueRouter from "vue-router";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Projects from "../components/Projects.vue";

Vue.use(VueRouter);

const routes = [
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
