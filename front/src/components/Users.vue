<script>
export default {
  data() {
    return {
      users: {}
    };
  },
  mounted() {
    fetch('http://localhost:3000/users')
      .then(response => response.json()
      .then(data => {
        this.users = data;
      }))
  }
}
</script>

<template>
    Users:
    <div v-for="(item, index) in this.users">
        <p>{{ item.userId }} {{ item.email }} {{ item.login }}</p>
    </div>
</template>

<style scoped>

</style>