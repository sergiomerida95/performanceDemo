import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import Accounts from "../views/Accounts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/team",
    name: "Team",
    component: Team
  },
  {
    path: "/accounts",
    name: "Accounts",
    component: Accounts
  },
];

const router = new VueRouter({
  routes,
});

export default router;
