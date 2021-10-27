<template>
  <b-container>
    <b-row class="d-flex justify-content-center">
      <b-spinner v-if="loadingTeam" 
      class="mt-5"
      style="width: 3rem; height: 3rem;" 
      label="Large Spinner"></b-spinner>
      <job-card v-for="user in users" 
      :key="user.id" 
      :name="user.name" 
      :description="user.description"
      :img="user.img"></job-card>
    </b-row>
  </b-container>
</template>

<script>
import JobCard from "@/components/Team/JobCard.vue";
import {mapState, mapActions} from "vuex";

export default {
  name: 'team',
  components: {'job-card':JobCard},
  computed: {
    ...mapState("teamStore",["users","loadingTeam"])
  },
  mounted(){
    //this.fetchData();
  },
  methods:{
    ...mapActions("teamStore",["fetchUsers"]),
    async fetchData(){
      try {
        await this.fetchUsers();
      } catch (error) {
        console.log(error);
      }
    }
  }
  
}
</script>
