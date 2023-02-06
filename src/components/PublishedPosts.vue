<template>
    <div class="d-flex flex-column">
        <br />
        <div v-for="post in this.posts" :key="post.postId">
            <PostPreview :title="post.title" :author="post.authorName" :header="post.header" :postId="post.postId"/>
            <br />
        </div>
    </div>
</template>
    
<script>
import PostsService from '@/services/posts-service.js'
import PostPreview from './PostPreview.vue';

export default {
    name: 'PublishedPosts',
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
        this.posts = await PostsService.getPublishedPosts();
    }
    },
    mounted(){
    this.InitPosts();
    }
}
</script>

<style>
</style>
    