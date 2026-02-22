import { type RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Layout from "../components/Layout.vue";
import NotFound from "../components/NotFound.vue";

import HomeView from "../views/Home.vue";
import AboutView from "../views/About.vue";
import Faq from "../views/Faq.vue";
import Festival from "../views/Festival.vue";
import Family from "../views/Family.vue";
import Samples from "../views/Samples.vue";
import Test from "../views/test.vue";
import Document from "../views/Document.vue";
import DocsIndex from "../views/docs/DocsIndex.vue";
import DocsApp from "../views/docs/DocsApp.vue";
import DocsEasy from "../views/docs/DocsEasy.vue";
import DocsSlides from "../views/docs/DocsSlides.vue";
import DocsPreprocessor from "../views/docs/DocsPreprocessor.vue";
import DocsMulmochat from "../views/docs/DocsMulmochat.vue";
import DocsClaudePlugin from "../views/docs/DocsClaudePlugin.vue";

// CLI Documentation (split into multiple pages)
import CliIndex from "../views/docs/cli/CliIndex.vue";
import CliQuickstart from "../views/docs/cli/CliQuickstart.vue";
import CliMulmoscript from "../views/docs/cli/CliMulmoscript.vue";
import CliProviders from "../views/docs/cli/CliProviders.vue";
import CliAdvanced from "../views/docs/cli/CliAdvanced.vue";

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
    path: "family",
    name: "family",
    component: Family,
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
  {
    path: "docs",
    name: "docs",
    component: DocsIndex,
  },
  // CLI Documentation - split into multiple pages
  {
    path: "docs/cli",
    name: "docs-cli",
    component: CliIndex,
  },
  {
    path: "docs/cli/quickstart",
    name: "docs-cli-quickstart",
    component: CliQuickstart,
  },
  {
    path: "docs/cli/mulmoscript",
    name: "docs-cli-mulmoscript",
    component: CliMulmoscript,
  },
  {
    path: "docs/cli/providers",
    name: "docs-cli-providers",
    component: CliProviders,
  },
  {
    path: "docs/cli/advanced",
    name: "docs-cli-advanced",
    component: CliAdvanced,
  },
  {
    path: "docs/app",
    name: "docs-app",
    component: DocsApp,
  },
  {
    path: "docs/slides",
    name: "docs-slides",
    component: DocsSlides,
  },
  {
    path: "docs/easy",
    name: "docs-easy",
    component: DocsEasy,
  },
  {
    path: "docs/preprocessor",
    name: "docs-preprocessor",
    component: DocsPreprocessor,
  },
  {
    path: "docs/mulmochat",
    name: "docs-mulmochat",
    component: DocsMulmochat,
  },
  {
    path: "docs/claude-plugin",
    name: "docs-claude-plugin",
    component: DocsClaudePlugin,
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
