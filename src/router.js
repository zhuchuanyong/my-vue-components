import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/form",
      name: "form",
      // route level code-splitting
      // this generates a separate chunk (form.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "form" */ "./demo/form")
    },
    {
      path: "/slot",
      name: "slot",
      component: () => import(/* webpackChunkName: "slot" */ "./demo/slot")
    },
    {
      path: "/jsx",
      name: "jsx",
      component: () => import(/* webpackChunkName: "jsx" */ "./demo/jsx")
    }
  ]
});
