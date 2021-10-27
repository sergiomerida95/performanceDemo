<template>
  <b-container class="mt-5">
    <div>
      <b-spinner v-if="loadingAccounts" 
      style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
    <b-table outlined striped hover :items="accounts"></b-table>
  </div>
  </b-container>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "accounts-table",
    computed: {
    ...mapState("accountsStore",["accounts", "loadingAccounts"])
  }
};
</script>