<template>
    <div class="box border-top-0 button" @click="goToDetail()">
        <div class="title">
            {{ this.post.title }}
        </div>
        <div class="header">
            {{ this.post.header }}
        </div>
        <div v-if="!this.isFromAuthor" class="prev-author">
            From {{ this.post.authorName }}
        </div>
        <div v-if="this.isFromAuthor" class="prev-author">
            Status is: {{ this.statuses[this.post.status] }}
        </div>
    </div>
</template>
    
<script>

export default {
    name: 'PostPreview',
    data(){
        return {
            statuses: ['Wip','Submitted','published']
        }
    },
    props: {
    post: undefined,
    isFromAuthor: Boolean,
    },
    methods:{
    goToDetail(){
        if(this.isFromAuthor && this.post.status === 0){
            this.$router.push({ path: '/EditPost', query: { postId: this.post.postId } })
            return;
        }

        this.$router.push({ path: '/PostDetails', query: { postId: this.post.postId } })
    }
    }
}
</script>

<style>
.box{
    padding: 10px;
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

.prev-author{
    font-size: small;
    text-align: left;
}
</style>
    