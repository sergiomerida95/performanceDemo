export default {
    namespaced: true,
    state: {
        users: [],
        loadingTeam: false

    },
    mutations: {
        setUsers(state, users){
            state.users = users;
        } ,
        setLoadingTeam(state, loadingTeam){
            state.loadingTeam = loadingTeam;
          }
    },
    actions: {
        async fetchUsersPromise({commit}){
            commit("setLoadingTeam", true);
            return new Promise (resolve => {
              setTimeout(async () => {
                  const res = await fetch("team.json")
                  const val = await res.json();
                  console.log('Equipo Cargado', val)
                resolve (val);
              }, 3000);
            })
          },  
          async fetchUsers({dispatch, commit}){
            const usersJson = await dispatch("fetchUsersPromise");
            commit("setUsers", usersJson);
            commit("setLoadingTeam", false);
          }
    }
  };