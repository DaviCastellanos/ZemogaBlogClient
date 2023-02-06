<template>
    <div class="body d-flex flex-column">
        <br />
        <div v-for="post in this.posts" :key="post.postId">
            <PostPreview :post="post" :isFromAuthor="true"/>
            <br />
        </div>
    </div>
</template>
    
<script>
import PostsService from '@/services/posts-service.js'
import PostPreview from './PostPreview.vue';

export default {
    name: 'MyPosts',
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
        this.posts = await PostsService.getPostsByAuthor(this.$store.getters.userId, this.$store.getters.userRoles, this.$store.getters.accesToken);
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
    