<template>
    <div style="width: 100%; padding: 10px;">
        <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" v-model="title" placeholder="Title" />
        <br/>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="header" placeholder="Header"></textarea>
        <br/>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="12" v-model="body" placeholder="Body"></textarea>
        <br/>
        <div class="row">
            <button type="button" class="col-2 btn btn-outline-dark" style="margin:5px;" @click="savePost('WIP')">Save</button>
            <button type="button" class="col-2 btn btn-dark" style="margin:5px;" @click="savePost('Submitted')">Submit</button>
        </div>
    </div>
</template>
    
<script>
import PostsService from '@/services/posts-service.js'

export default {
    name: 'CreateNewPost',
    data(){
        return {
            title: undefined,
            header: undefined,
            body: undefined,
        }
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
                authorId: this.$store.getters.userId,
                authorName: this.$store.getters.userName,
                version: 1
            }
            
            await PostsService.createNewPost(body, this.$store.getters.userRoles, this.$store.getters.accesToken);

            this.title = undefined;
            this.header = undefined;
            this.body = undefined;
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