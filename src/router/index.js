import { createWebHistory, createRouter } from "vue-router"
import PublishedPosts from '@/components/PublishedPosts.vue'

const routes = [
    {
        path: '/',
        name: 'PublishedPosts',
        component: PublishedPosts
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;