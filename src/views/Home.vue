<template>
  <div class="home">
    <img class="mb-4 mt-4" alt="Deloitte logo" src="../assets/Deloitte.png" />
    <Home msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home/Home.vue";

export default {
  name: "Access",
  components: {
    'Home':Home,
  },
};
</script>
