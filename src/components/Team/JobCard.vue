<template>
<div>
    <b-col>
        <b-card :title="name"
        img-src="../../assets/profile.png"
        img-alt="Job-info"
        img-top
        tag="article"
        style="max-width:20rem"
        class="mb-5">
          <b-card-text>
            {{description}}
          </b-card-text>
          <b-button variant="dark">Más detalles</b-button>
        </b-card>
      </b-col>
</div>
  
</template>

<script>
export default {
  name: "job-card",
  props: {
    name: String,
    description: String,
    picture: String,
    img: String
  },
};
</script>


