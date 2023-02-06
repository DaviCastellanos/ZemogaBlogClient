<template>

    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div class="container-fluid">
        <span class="navbar-brand " @click="goHome()" >Zemoga Blog</span>
        
        <button v-if="!this.account" type="button" class="btn btn-outline-light" @click="signIn()">Log In</button>

        <div v-if="this.account">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li class="nav-item">
                  <span class="greet" v-if="this.account"> {{this.account.name}} </span>
              </li>
              <li class="nav-item">
                  <span role="button" class="nav-link" @click=" this.$router.push({ path: '/CreatePost'})">My posts</span>
              </li>
              <li class="nav-item">
                  <span role="button" class="nav-link" @click="signOut()">Sign Out</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <div class="d-flex justify-content-center no-gutters">
      <router-view />
    </div>

</template>

<script>

export default {
  name: 'App',
  data(){
    return{
    posts : undefined
    }
  },
  components: {
  },
  computed:{
    account(){
      return this.$store.getters.account;
    }
  },
  methods:{
    goHome(){
      this.$router.push({ path: '/'})
    },
    async signIn(){
       this.$store.dispatch('signIn')
    },
    async signOut(){
      this.$store.dispatch('signOut')
    }
  },
  async created(){
    this.$store.dispatch('innitMsal', process.env.VUE_APP_CLIENT_ID);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.greet{
  color: white
}

.navbar{
  padding: 10px
}
</style>
