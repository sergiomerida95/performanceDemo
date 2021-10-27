export default {
    namespaced: true,
    state: {
        accounts: [],
        loadingAccounts: false
    },
    mutations: {
        setAccounts(state, accounts){
            state.accounts = accounts;
        },
        setLoadingAccounts(state, loadingAccounts){
            state.loadingAccounts = loadingAccounts;
          }
    },
    actions: {
        async fetchAccountsPromise({commit}){
            commit("setLoadingAccounts", true);
            return new Promise (resolve => {
              setTimeout(async () => {
                  const res = await fetch("accounts.json")
                  const val = await res.json();
                  console.log('Cuentas cargadas', val)
                resolve (val);
              }, 4000);
            })
          },  
          async fetchAccounts({dispatch, commit}){
            const userAccounts = await dispatch("fetchAccountsPromise");
            commit("setAccounts", userAccounts);
            commit("setLoadingAccounts", false);
          },
          deleteAccounts({commit}){
            commit("setAccounts", []);
          
    }
  }
  };