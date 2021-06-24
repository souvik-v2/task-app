import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

import { createRouter, createWebHistory } from "vue-router";

import FormsDetails from "./components/FormsDetails.vue";
import UserDetails from "./components/UserDetails.vue";
import PageNotFound from "./components/PageNotFound.vue";

// router declaration and configuration
const router = createRouter({
  history: createWebHistory(),

  // Defination

  routes: [
   {
      path: "",
      redirect: "/signin",
    },
    {
      path: "/signin",
      component: FormsDetails,
    },
    {
        path: "/signup",
        component: FormsDetails,
      },
      {
        path: "/dashboard",
        component: UserDetails,
      },
        {
      path: "/:notFound(.*)",
      component: PageNotFound,
    },
  ],
});

const counterModule = {
    state() {
      return {
        counter: 0
      };
    },
    mutations: {
      increment(state) {
        state.counter = state.counter + 1;
      }
    },
    actions: {
      increase(context) {
        setTimeout(() => {
          context.commit('increment');
        }, 2000);
      }
    },
    getters: {
      getCounterValue(state) {
        return state.counter;
      }
    }
  };
  
  const store = createStore({
    modules: {
        counter: counterModule
    },
    state() {
      return {
        isLoggedIn: false
      };
    },
    actions: {
      login(context) {
        context.commit('setAuth', true);
      },
      logout(context) {
        context.commit('setAuth', false);
      }
    },
    mutations: {
      setAuth(state, payload) {
        state.isLoggedIn = payload;
      }
    },
    getters: {
      userUsAuthenticated(state) {
        return state.isLoggedIn;
      }
    }
  });

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
