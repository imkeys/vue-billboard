import Vue from 'vue'
import Router from 'vue-router'

// Router Modules
import homeRouter from './modules/home'
import houseRouter from './modules/house'
import userRouter from './modules/user'

Vue.use(Router)

// BASIC_ROUTES
export const BASIC_ROUTES = [
  {
    path: '/(index)?',
    redirect: '/home',
    hidden: true
  },
  homeRouter,
  houseRouter,
  userRouter,
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/index'),
    hidden: true
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    name: 'notFind',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/500',
    name: 'serveError',
    component: () => import('@/views/error-page/500'),
    hidden: true
  }
]

export const ASYNC_ROUTES = [
  {
    noAuth: true,
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-active',
  routes: BASIC_ROUTES
})

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
