<template>
  <b-container class="mt-5">
    <div>
      <b-spinner v-if="loadingUserMainData" style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
    <b-table outlined striped hover :items="userMainData"></b-table>
  </div>
  </b-container>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "Home",
  props: {
    msg: String,
  },
    computed: {
    ...mapState(["userMainData", "loadingUserMainData"])
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
