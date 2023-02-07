<template>
    <div v-if="this.post" class="box">
        <div class="title">
            {{ this.post.title }}
        </div>
        <div class="author">
            from {{ this.post.authorName }}
        </div>
        <br/>
        <div class="header">
            {{ this.post.header }}
        </div>
        <br/>
        <div class="post-body">
            {{ this.post.body }}
        </div>
        <br/>
        <div class="comments-box">
            <div>
            Editor feedback:
            </div>
            <div v-show="this.comments" v-for="comment in comments" :key="comment.postId">
                <CommentView :comment="comment"/>
            </div>

            <CreateNewComment :postInfo="post" :isReview="true" @onCommentCreated="onCommentCreated"/>
        </div>
        <div class="row">
            <button type="button" class="col-2 btn btn-outline-dark" style="margin:5px;" @click="savePost('WIP')">Reject</button>
            <button type="button" class="col-2 btn btn-dark" style="margin:5px;" @click="savePost('Published')">Publish</button>
        </div>
    </div>
</template>
    
<script>
import PostsService from '@/services/posts-service.js'
import CommentView from './CommentView.vue'
import CreateNewComment from './CreateNewComment.vue'
import CommentsService from '@/services/comments-service.js'


export default {
    name: 'PostDetails',
    data() {
    return {
        post: undefined,
        comments: undefined
    }
    },
    components:{
        CommentView,
        CreateNewComment
    },
    methods:{
    async savePost(status)
    {
        if(status === "Published") {
            await PostsService.publishPostStatus(this.$route.query.postId,this.$store.getters.userRoles, this.$store.getters.accesToken);
            this.$router.push({ path: '/' })
            return;
        }

        const body = {
            title: this.post.title,
            header: this.post.header,
            body: this.post.body,
            status: status,
            id: this.$route.query.postId
        }
        
        await PostsService.updatePost(body, this.$store.getters.userRoles, this.$store.getters.accesToken);
        this.$router.push({ path: '/ToPublish' })
    },
    async getPostDetails(){
        this.post = await PostsService.getPostById(this.$route.query.postId)
    },
    async getPostReviews(){
        this.comments = await CommentsService.getPostReviews(this.$route.query.postId)
    },
    onCommentCreated(comment){
        if(this.comments)
            this.comments.push(comment)
        else
            this.comments = Array(1).fill(comment)
    }
},
mounted(){
    this.getPostDetails();
    this.getPostReviews();
}
}
</script>

<style>
.comments-box{
    text-align: left;
    padding: 10;
}
.box{
    width: 100%;
    padding: 10px;
    text-align: left;
}
.title{
    font-weight: bold;
    font-size: large;
    text-align: left;
}

.header{
    font-style: italic;
    text-align: left;
}

.post-body{
    text-align: left;
    white-space: pre-wrap;
}
.author{
    font-size: normal;
    text-align: left;
}
</style>
    