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
    <body>
      <router-view></router-view>
    </body>
  </main>
</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>
