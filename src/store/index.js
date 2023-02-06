import { createStore } from 'vuex'
import { PublicClientApplication } from '@azure/msal-browser';

export default createStore({
  state () {
    return {
        userRoles: undefined,
        accesToken: undefined,
        account: undefined,
        userName: undefined,
        userId: undefined
    }
    },
  getters: {
    userId(state) {
        return state.userId;
    },
    userName(state) {
        return state.userName;
    },
    userRoles(state) {
        return state.userRoles;
    },
    accesToken(state) {
        return state.accessToken;
    },
    msalConfig(state){
        return state.msalConfig;
    },
    account (state){
        return state.account;
    }
    },
  mutations: {
    SET_USER(state, silentResult) {
        //console.log("silent", silentResult);
        this.state.accessToken = silentResult.idToken;
        this.state.userRoles = silentResult.idTokenClaims.roles;
        this.state.userName = silentResult.idTokenClaims.name;
        this.state.userId = silentResult.idTokenClaims.oid; 
    },
    },
  actions: {
    async innitMsal(obj, clientId) {

        this.$msalInstance = new PublicClientApplication(
            {
                auth: {
                  clientId: clientId,
                  authority:
                    'https://login.microsoftonline.com/fd5ab338-f8b4-4de4-8ecd-2f46a044dad7',
                },
              }
            );
            
        const accounts = this.$msalInstance.getAllAccounts();

        //console.log("accounts", accounts);
            
        if (accounts.length == 0) {
            return;
        }
        
        this.state.account = accounts[0];
        
        const silentRequest = {
            scopes: ['profile'],
            account: this.state.account
        };
        const silentResult = await this.$msalInstance.acquireTokenSilent(silentRequest);
        
        this.commit('SET_USER', silentResult)
    },
    async signIn() {
        await this.$msalInstance
            .loginPopup({})
            .then(() => {
            const myAccounts = this.$msalInstance.getAllAccounts();
            this.state.account = myAccounts[0];


            })
            .catch(error => {
            console.error(`error during authentication: ${error}`);
            });
        
        const silentRequest = {
            scopes: ['profile'],
            account: this.state.account
        };

        const silentResult = await this.$msalInstance.acquireTokenSilent(silentRequest);

        this.commit('SET_USER', silentResult)
        },            
    async signOut(){
        await this.$msalInstance
        .logoutPopup({})
        .then(() => {
          this.state.account = undefined
          this.state.accessToken = undefined
        })
        .catch(error => {
          console.error(error);
        });
    }
    }
})