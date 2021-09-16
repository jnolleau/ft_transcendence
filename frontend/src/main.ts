import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from "@/plugins/api.plugin";

// Config for the sdk
const config = {
  basePath: process.env.VUE_APP_API_URL,
};

createApp(App).use(router)
  // .use(api, config)
  .mount('#app')
