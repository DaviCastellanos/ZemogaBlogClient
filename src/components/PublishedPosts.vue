<template>
    <div v-for="post in this.posts" :key="post.postId">
        {{ post }}
    </div>
</template>
    
<script>
import PostsService from '@/services/posts-service.js'

export default {
    name: 'App',
    data(){
    return{
    posts : undefined
    }
    },
    methods:{
    async InitPosts(){
        this.posts = await PostsService.getPublishedPosts();
        console.log(this.posts);
    }
    },
    mounted(){
        console.log("Mounted");
    this.InitPosts();
    }
}
</script>

<style>
</style>
    