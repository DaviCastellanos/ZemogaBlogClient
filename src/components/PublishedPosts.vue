<template>
    <div class="body d-flex flex-column">
        <br />
        <div v-for="post in this.posts" :key="post.postId">
            <PostPreview :post="post"/>
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

        this.posts.sort(function(a,b){
                    return new Date(b.datePublished) - new Date(a.datePublished);
                    });
    }
    },
    mounted(){
    this.InitPosts();
    }
}
</script>

<style>
.body{
    width: 100%;
}
</style>
    