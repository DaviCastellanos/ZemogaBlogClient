<template>
    <div class="box border-top-0 button">
        <div v-if="comment" class="comment-body">
            {{ this.comment.body }}
        </div>

        <div v-if="!comment" class="comment-body">
            No comments yet
        </div>
    </div>
</template>
    
<script>

export default {
    name: 'CommentView',
    props: {
    comment: undefined,
    }
}
</script>

<style>
.box{
    padding: 10px;
}
.comment-body{
    font-size: normal;
    text-align: left;
}
</style>