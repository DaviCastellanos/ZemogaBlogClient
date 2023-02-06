<template>
    <div class="box border-top-0 button">
        <div v-if="comment" class="body">
            {{ this.comment.body }}
        </div>

        <div v-if="!comment" class="body">
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
.body{
    font-size: normal;
    text-align: center;
}
</style>