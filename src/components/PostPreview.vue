<template>
    <div class="box border-top-0 button" @click="goToDetail()">
        <div class="title">
            {{ this.title }}
        </div>
        <div class="header">
            {{ this.header }}
        </div>
        <div class="prev-author">
            From {{ this.author }}
        </div>
    </div>
</template>
    
<script>

export default {
    name: 'PostPreview',
    props: {
    title: String,
    author: String,
    header: String,
    postId: String
    },
    methods:{
    goToDetail(){
        this.$router.push({ path: '/PostDetails', query: { postId: this.postId } })
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
    