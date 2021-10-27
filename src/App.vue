<template>
  <div id="app">
    <div id="nav">
      <top-header></top-header>
    </div>
    <router-view />
  </div>
</template>
<script>
import TopHeader from '@/components/NavBar/TopHeader.vue';
import {mapActions} from "vuex";
import _ from 'lodash';


export default {
  components: {
    'top-header': TopHeader
  },
  mounted(){
    this.fetchUserMainData();
    const sections = [
        {
          url: '/team',
          function: () => this.fetchUsers()
        },
        {
          url: '/accounts',
          function: () => this.fetchAccounts()
        }
      ];
    const url = this.getPreloadSection();
    const hitSection = _.find(sections, { url });

    if (hitSection) {
        _.remove(sections, (section) => (section.url === hitSection.url));

        hitSection.function()
          .then(() => {
            this.callLoadFunctions(sections);
          })
          .catch(() => {});
      } else {
        this.callLoadFunctions(sections);
      }
  },
   methods:{
    ...mapActions(["fetchUserMainData"]),
    ...mapActions("teamStore",["fetchUsers"]),
    ...mapActions("accountsStore",["fetchAccounts"]),
    async fetchDataMainData(){
      try {
        await this.fetchUserMainData();
      } catch (error) {
        console.log(error);
      }
    },
    getPreloadSection() {
      let url = this.$route.query?.redirectPath || this.$route.path;
      if (url) {
        [ url ] = url.split('?');
      }

      return url;
    },
     callLoadFunctions(sections) {
      for (const section of sections) {
        section.function();
      }
    }
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
