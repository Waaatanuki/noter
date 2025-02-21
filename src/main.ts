import { Icon } from '@iconify/vue'
import { createHead } from '@unhead/vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'
import './styles'

const app = createApp(App)
const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
})
app.use(createHead())
app.use(router)
app.component('Icon', Icon)
app.mount('#app')
