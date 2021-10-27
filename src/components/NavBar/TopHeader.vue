<template>
  <div class="rounded">
    <b-navbar class="rounded" toggleable="lg" type="dark" variant="info">
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Panel principal</b-nav-item>
          <b-nav-item to="/team">Equipo</b-nav-item>
          <b-nav-item to="/accounts">Cuentas</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em class="red-color">Usuario</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "top-header",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
#nav a.router-link-exact-active {
    color:white
}
#nav a {
    color:#d01715;
}
.bg-info {
    background-color: #000000 !important;
}
.red-color {
    color:#d01715 !important;
}
</style>


