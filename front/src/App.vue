<script>
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
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped>

main{
  padding-top: 70px;
}

</style>
