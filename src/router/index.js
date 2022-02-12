import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ScenicSpot",
    name: "ScenicSpot",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Pages/ScenicSpot.vue"),
  },
  {
    path: "/Activity",
    name: "Activity",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Pages/Activity.vue"),
  },
  {
    path: "/Hotel",
    name: "Hotel",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Pages/Test.vue"),
  },
  {
    path: "/Restaurant",
    name: "Restaurant",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Pages/Restaurant.vue"),
  },
  // {
  //   path: "/Test",
  //   name: "Restaurant",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "@/views/Pages/Test.vue"),
  // },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
