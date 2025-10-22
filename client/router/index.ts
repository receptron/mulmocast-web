import { type RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Layout from "../components/Layout.vue";
import NotFound from "../components/NotFound.vue";

import HomeView from "../views/Home.vue";
import AboutView from "../views/About.vue";
import Faq from "../views/Faq.vue";
import Festival from "../views/Festival.vue";
import Samples from "../views/Samples.vue";
import Test from "../views/test.vue";
import Document from "../views/Document.vue";

const routeChildren: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "home",
    component: HomeView,
  },
  {
    path: "about",
    name: "about",
    component: AboutView,
  },
  {
    path: "faq",
    name: "faq",
    component: Faq,
  },
  {
    path: "festival",
    name: "festival",
    component: Festival,
  },
  {
    path: "samples",
    name: "samples",
    component: Samples,
  },
  {
    path: "test",
    name: "test",
    component: Test,
  },
  {
    path: "document",
    name: "document",
    component: Document,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:lang(en|ja)?",
      component: Layout,
      children: routeChildren,
    },
    {
      path: "/:page(.*)",
      name: "NotFoundPage",
      component: NotFound,
    },
  ],
});

export default router;
