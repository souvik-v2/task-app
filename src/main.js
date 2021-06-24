import { createApp } from 'vue';
import App from './App.vue';

/*import { createRouter, createWebHistory } from "vue-router";

import FormsDetails from "./components/FormsDetails.vue";
import PageNotFound from "./components/PageNotFound.vue";

// router declaration and configuration
const router = createRouter({
  history: createWebHistory(),

  // Defination

  routes: [
   {
      path: "",
      redirect: "/login",
    },
    {
      path: "/login",
      component: FormsDetails,
    },
    {
      path: "/:notFound(.*)",
      component: PageNotFound,
    },
  ],
});*/


const app = createApp(App);
//app.use(router);
app.mount('#app');
