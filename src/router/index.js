import { createWebHistory, createRouter } from "vue-router"
import PublishedPosts from '@/components/PublishedPosts.vue'
import PostDetails from '@/components/PostDetails.vue'

const routes = [
    {
        path: '/',
        name: 'PublishedPosts',
        component: PublishedPosts
    },
    {
        path: '/PostDetails',
        name: 'PostDetails',
        component: PostDetails
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;