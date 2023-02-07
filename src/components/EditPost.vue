<template>
    <div style="width: 100%; padding: 10px;">
        <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" v-model="this.title"/>
        <br/>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="header"></textarea>
        <br/>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="12" v-model="body"></textarea>
        <br/>
        <div v-show="!this.comments">
                <CommentView :comment="null"/>
        </div>
        <br />
        <div class="row">
            <button type="button" class="col-2 btn btn-outline-dark" style="margin:5px;" @click="savePost('WIP')">Save</button>
            <button type="button" class="col-2 btn btn-dark" style="margin:5px;" @click="savePost('Submitted')">Submit</button>
        </div>
    </div>
</template>
    
<script>
import PostsService from '@/services/posts-service.js'
import CommentView from './CommentView.vue'
import CommentsService from '@/services/comments-service.js'

export default {
    name: 'EditPost',
    data(){
        return {
            title: "Title example",
            header: undefined,
            body: undefined,
            post: undefined,
            comments: undefined
        }
    },
    components:{
        CommentView
    },
    computed:{
        isFormReady()
        {
            if(this.title && this.header && this.body)
                return true

            return false;
        }
    },
    methods:{
        async savePost(status)
        {
            if(!this.isFormReady)
                return;

            const body = {
                title: this.title,
                header: this.header,
                body: this.body,
                status: status,
                id: this.$route.query.postId
            }

            console.log("updating post", body)
            
            await PostsService.updatePost(body, this.$store.getters.userRoles, this.$store.getters.accesToken);

            this.title = undefined;
            this.header = undefined;
            this.body = undefined;
        },
        async getPostDetails(){
            this.post = await PostsService.getPostById(this.$route.query.postId)

            this.title = this.post.title;
            this.header = this.post.header;
            this.body = this.post.body;
        },
        async getPostReviews(){
            this.comments = await CommentsService.getPostReviews(this.$route.query.postId)
        },
},
mounted(){
    this.getPostDetails();
    this.getPostReviews();
}
}
</script>

<style>
.body{
    font-size: normal;
    text-align: center;
}
</style>