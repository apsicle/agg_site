import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      count: 0,
      user: null,
    },
    getters: {
      user: (state) => state.user,
    },
    mutations: {
      increment(state) {
        state.count++
      },

      setUser(state, user) {
        state.user = user;
      },

      clearUser(state) {
        state.user = null;
      },
    },
    actions: {
      setUserFromToken(context, token) {
        axios.post('users/authenticate/', { 
          token 
        }).then((response) => {
          this.commit('setUser', response.data);
          console.log('Successfully authenticated');
        }).catch((err) => {
          // User cannot be found with current auth token
          localStorage.clear('agg_token');
          store.commit('setUser', null)
          router.push('/login');
          console.log('Not authenticated');
        })
      },
    }
})

export default store;