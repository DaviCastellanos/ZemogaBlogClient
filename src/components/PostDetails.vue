<template>
    <div v-if="this.post" class="box">
        <div v-if="this.isPublished" class="date">
            {{ new Date(this.post.datePublished).toDateString() }}
        </div>
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
            Comments:
            </div>
            <div v-show="this.comments" v-for="comment in comments" :key="comment.postId">
                <CommentView :comment="comment"/>
            </div>

            <div v-show="!this.comments">
                <CommentView :comment="null"/>
            </div>

            <CreateNewComment :postInfo="post" :isReview="false" @onCommentCreated="onCommentCreated"/>
        </div>
    </div>
</template>
    
<script>
import PostsService from '@/services/posts-service.js'
import CommentsService from '@/services/comments-service.js'
import CommentView from './CommentView.vue'
import CreateNewComment from './CreateNewComment.vue'

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
    computed:{
        isPublished(){
        const isPublished = this.post.status == 2;
        return isPublished;
    }
    },
    methods:{
    async getPostDetails(){
        this.post = await PostsService.getPostById(this.$route.query.postId)
    },
    async getPostCommentsWithoutReviews(){
        this.comments = await CommentsService.getPostCommentsWithoutReviews(this.$route.query.postId)
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
    this.getPostCommentsWithoutReviews();
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
    