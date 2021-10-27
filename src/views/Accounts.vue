<template>
  <b-container>
    <b-row class="d-flex justify-content-center">
      <accounts-table></accounts-table>
    </b-row>
  </b-container>
</template>

<script>
import accountsTable from "@/components/AccountsTable/accountsTable.vue";
import {mapActions} from "vuex";

export default {
  name: 'team',
  components: {'accounts-table':accountsTable},
  mounted(){
    //this.fetchData();
  },
  methods:{
    ...mapActions("accountsStore",["fetchAccounts", "deleteAccounts"]),
    async fetchData(){
      try {
        await this.fetchAccounts();
      } catch (error) {
        console.log(error);
      }
    }
  },
  destroyed(){
    //this.deleteAccounts();
  },
  
}
</script>
