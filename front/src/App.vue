<script>
//import Users from './components/Users.vue'
import HeaderV from './components/Header.vue'

export default {
  components: {
      HeaderV
    }
}
</script>

<template>
  <HeaderV />
  <main>
      <router-view></router-view>
  </main>
</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>
