import { createWebHistory, createRouter } from "vue-router"
import PublishedPosts from '@/components/PublishedPosts.vue'
import PostDetails from '@/components/PostDetails.vue'
import CreatePost from '@/components/CreateNewPost.vue'

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
    {
        path: '/CreatePost',
        name: 'CreatePost',
        component: CreatePost
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;