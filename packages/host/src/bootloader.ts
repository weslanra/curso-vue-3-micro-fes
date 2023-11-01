import { createApp } from "vue";
import { createPinia } from "pinia";
import * as VueRouter from "vue-router";

import "./index.scss";

import App from "./App.vue";
import Home from "./Home.vue";
import About from "remote/About";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

createApp(App).use(router).use(createPinia()).mount("#app");
