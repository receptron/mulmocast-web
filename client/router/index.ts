import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import AboutView from "../views/About.vue";
import Faq from "../views/Faq.vue";
import Festival from "../views/Festival.vue";
import Samples from "../views/Samples.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/faq",
      name: "faq",
      component: Faq,
    },
    {
      path: "/festival",
      name: "festival",
      component: Festival,
    },
    {
      path: "/samples",
      name: "samples",
      component: Samples,
    },
  ],
});

export default router;
