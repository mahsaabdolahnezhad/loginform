import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginForm from '../views/LoginForm.vue'
import DashBoard from "../views/DashBoard.vue";
import UserPage from "../views/UserPage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "LoginForm",
    component: LoginForm,
  },
  {
    path: "/DashBoard",
    name: "DashBoard",
    component: DashBoard,
  },
  {
    path:"/UserPage",
    name: "UserPage",
    component: UserPage,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
