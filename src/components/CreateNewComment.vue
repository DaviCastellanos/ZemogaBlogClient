<template class="container">
    <div class="border-top-0 row" style="padding:10px">
            <input class="col-10" v-model="commentBody" placeholder="Write a comment..." />
            <button type="button" class="col-2 btn btn-dark" style="padding:2px;" @click="saveComment()">Save</button>
    </div>
</template>
    
<script>
import CommentsService from '@/services/comments-service.js'

export default {
    name: 'CommentView',
    data(){
        return {
            commentBody: undefined
        }
    },
    props: {
    postInfo: undefined,
    },
    methods:{
        async saveComment()
        {
            if(!this.commentBody)
                return;

            const body = {
                body: this.commentBody,
                postId: this.postInfo.postId,
                postAuthorId: this.postInfo.authorId,
                isReview: false
            }
            
            await CommentsService.createNewComment(body);

            this.commentBody = undefined;
        }
    }
}
</script>

<style>
.body{
    font-size: normal;
    text-align: center;
}
</style>