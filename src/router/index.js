import Vue from "vue";
import VueRouter from "vue-router";
import Signup from "../views/Signup.vue";
import UserList from "../views/Users.vue"
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  // base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/create-user",
      name: "home",
      component: Signup,
    },
    {
      path: "/",
      name: "userList",
      component: UserList,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
  ],
});

export default router;
