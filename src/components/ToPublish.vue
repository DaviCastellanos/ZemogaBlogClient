<template>
    <div class="body d-flex flex-column">
        <br />
        <div v-for="post in this.posts" :key="post.postId">
            <PostPreview :post="post"/>
            <br />
        </div>
    </div>
</template>
    
<script>
import PostsService from '@/services/posts-service.js'
import PostPreview from './PostPreview.vue';

export default {
    name: 'ToPublish',
    data(){
    return{
    posts : undefined
    }
    },
    components:{
    PostPreview
    },
    methods:{
    async InitPosts(){
        this.posts = await PostsService.getSubmittedPosts();
    }
    },
    mounted(){
        if(this.$store.getters.userIsEditor)
            this.InitPosts();
    }
}
</script>

<style>
.body{
    width: 100%;
}
</style>
    