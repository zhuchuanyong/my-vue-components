/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-04 14:21:51
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-13 15:44:52
 * @FilePath: \src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
// import moduleName from '@/layout/index.vue'
import layout from "@/layout/index.vue";
// meta: {
//   roles: ['admin', 'editor']   will control the page roles (allow setting multiple roles)
//   title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
//   icon: 'svg-name'             the icon showed in the sidebar
//   hidden: true                 if true, this route will not show in the sidebar (default is false)
//   alwaysShow: true             if true, will always show the root menu (default is false)
//                                if false, hide the root menu when has less or equal than one children route
//   breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
//   noCache: true                if true, the page will not be cached (default is false)
//   affix: true                  if true, the tag will affix in the tags-view
//   activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
// }

const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: layout,
    name:'Home',
    meta:{ title:'首页', icon: 'el-icon-location'},
    redirect: "/home",
    children: [
      {
        path: "home",
        component: Home,
        name: "Home",
        meta: { title: "首页", icon: "dashboard", affix: true }
      }
    ]
  },
  {
    path: "/about",
    component: layout,
    name: "About",
    meta:{ title:'关于',icon:"el-icon-menu"},
    redirect: "/index",
    children: [
      {
        path: "index",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
        name: "Dashboard",
        meta: { title: "about", icon: "dashboard", affix: true  }
      }
    ]
  },
  {
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
    name: "Login",
    meta: { hidden: true }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes
});

export default router;

export { constantRoutes };
