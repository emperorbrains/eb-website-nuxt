import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5ae139f2 = () => interopDefault(import('..\\pages\\about-us\\index.vue' /* webpackChunkName: "pages/about-us/index" */))
const _392e639a = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _f1421434 = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "pages/home/index" */))
const _1599930c = () => interopDefault(import('..\\pages\\methodology\\index.vue' /* webpackChunkName: "pages/methodology/index" */))
const _15c21c47 = () => interopDefault(import('..\\pages\\portfolio\\index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _734715f6 = () => interopDefault(import('..\\pages\\product-landing\\index.vue' /* webpackChunkName: "pages/product-landing/index" */))
const _49f9ef87 = () => interopDefault(import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages/services/index" */))
const _4227bfe5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _5ae139f2,
    name: "about-us"
  }, {
    path: "/contact-us",
    component: _392e639a,
    name: "contact-us"
  }, {
    path: "/home",
    component: _f1421434,
    name: "home"
  }, {
    path: "/methodology",
    component: _1599930c,
    name: "methodology"
  }, {
    path: "/portfolio",
    component: _15c21c47,
    name: "portfolio"
  }, {
    path: "/product-landing",
    component: _734715f6,
    name: "product-landing"
  }, {
    path: "/services",
    component: _49f9ef87,
    name: "services"
  }, {
    path: "/",
    component: _4227bfe5,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
