<template>
    <div class="box border-bottom border-secondary button" @click="goToDetail()">
        <div v-if="this.isPublished" class="date">
            {{ new Date(this.post.datePublished).toDateString()}}
        </div>
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
            Status: {{ this.statuses[this.post.status] }}
        </div>
    </div>
</template>
    
<script>

export default {
    name: 'PostPreview',
    data(){
        return {
            statuses: ['Wip','Submitted','Published']
        }
    },
    props: {
    post: undefined,
    isFromAuthor: Boolean,
    },
    computed:{
        isPublished(){
        const isPublished = this.post.status == 2;
        return isPublished;
    }
    },
    methods:{
    goToDetail(){
        if(this.isFromAuthor && this.post.status === 0){
            this.$router.push({ path: '/EditPost', query: { postId: this.post.postId } })
            return;
        }

        if(this.$store.getters.userIsEditor && this.post.status === 1){
            this.$router.push({ path: '/PublishPost', query: { postId: this.post.postId } })
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

.date{
    font-size: small;
    text-align: right;
}
</style>
    