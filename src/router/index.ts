/*
 * @Author: zhuchuanyong
 * @Date: 2020-10-13 13:12:35
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-12-08 16:44:14
 * @FilePath: \src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/Home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/usehook",
    name: "Usehook",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UseHooks/index.vue")
  },
  {
    path: "/",
    name: "Composition",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/compositionApi.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
