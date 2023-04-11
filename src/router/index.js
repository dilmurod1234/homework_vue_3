import { createRouter, createWebHistory } from 'vue-router'
import SignUpApp from "../components/sign_up/SignUpApp.vue"
import Login from "../components/login/LoginApp.vue"
import Blog from "../components/blog/Blog.vue"
import About from "../components/about/About.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pricing',
      component: SignUpApp
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/blog",
        name: "blog",
        component: Blog
    },
    {
        path: "/about",
        name: "about",
        component: About
    }
  ]
})

export default router