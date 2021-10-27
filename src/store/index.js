import Vue from "vue";
import Vuex from "vuex";
import teamStore from '@/components/Team/teamStore';
import accountsStore from '@/components/AccountsTable/accountsStore';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userMainData: [],
    loadingUserMainData: false
  },
  mutations: {
    setUserMainData(state, userMainData){
      state.userMainData = userMainData;
    },
    setLoadingUserMainData(state, loadingUserMainData){
      state.loadingUserMainData = loadingUserMainData;
    }
  },
  actions: {
  
    async fetchUserMainDataPromise({commit}){
      commit("setLoadingUserMainData", true);
      return new Promise (resolve => {
        setTimeout(async () => {
          const res = await fetch("userMainData.json")
          const val = await res.json();
          console.log('Datos principales cargados', val)
          resolve (val);
        }, 2000);
      })
    },
    async fetchUserMainData({dispatch, commit}){
      const userJson = await dispatch("fetchUserMainDataPromise");
      commit("setUserMainData", userJson);
      commit("setLoadingUserMainData", false);
    }
  },
  gettters: {
    users(state){
      return state.users;
    }
  },
  modules: {
    teamStore: teamStore,
    accountsStore: accountsStore
  },
});
