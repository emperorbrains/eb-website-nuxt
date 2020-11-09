import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _39c605a1 = () => interopDefault(import('..\\pages\\about-us\\index.vue' /* webpackChunkName: "pages/about-us/index" */))
const _a5727098 = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _7e32f580 = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "pages/home/index" */))
const _d5406626 = () => interopDefault(import('..\\pages\\portfolio\\index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _c1a99bc8 = () => interopDefault(import('..\\pages\\product-landing\\index.vue' /* webpackChunkName: "pages/product-landing/index" */))
const _9d9edbbe = () => interopDefault(import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages/services/index" */))
const _2d1c0a02 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _39c605a1,
    name: "about-us"
  }, {
    path: "/contact-us",
    component: _a5727098,
    name: "contact-us"
  }, {
    path: "/home",
    component: _7e32f580,
    name: "home"
  }, {
    path: "/portfolio",
    component: _d5406626,
    name: "portfolio"
  }, {
    path: "/product-landing",
    component: _c1a99bc8,
    name: "product-landing"
  }, {
    path: "/services",
    component: _9d9edbbe,
    name: "services"
  }, {
    path: "/",
    component: _2d1c0a02,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
