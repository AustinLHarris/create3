import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Create from '../views/Create.vue';
import EventView from '../views/EventView.vue';
import ChallengeView from '../views/ChallengeView.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/event",
    name: "event",
    component: EventView,
  },
  {
    path: '/create',
    name: 'create',
    component: Create,
  },
  {
    path: '/challenge',
    name: 'challenge',
    component: ChallengeView,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
