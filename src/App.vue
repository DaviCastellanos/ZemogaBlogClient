<template>

<nav class="navbar fixed-top navbar-dark bg-dark">
    <a class="navbar-brand">Zemoga Blog</a>
    <span class="greet" v-if="this.account"> {{this.account.name}} </span>
    <button v-if="!this.account" type="button" class="btn btn-outline-light" @click="signIn()">Log In</button>
    <button v-if="this.account" type="button" class="btn btn-outline-light" @click="signOut()">Log Out</button>
</nav>

</template>

<script>

export default {
  name: 'App',
  components: {
  },
  computed:{
    account(){
      return this.$store.getters.account;
    }
  },
  methods:{
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
