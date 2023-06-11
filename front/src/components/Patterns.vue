<script>
export default {
  data() {
    return {
      patterns: {},
      userId: null
    };
  },
  beforeMount() {
    this.userId = this.$cookies.get('userId')
    fetch('http://localhost:3000/patterns')
      .then(response => response.json()
      .then(data => {
        this.patterns = data;
      }))
  }
}
</script>

<template>
    <div v-if="!this.userId"><router-link to="/login">Log in</router-link> to add a pattern</div>
    <div v-else><router-link to="/patterns/add">Add a pattern</router-link></div>
    <div v-for="(item, index) in this.patterns">
      <p>{{ item.patternId }} {{ item.name }} {{ item.categoryId }} {{ item.craftId }} {{ item.description }}
        <router-link :to="'/patterns/'+item.patternId"><button type="button" class="btn btn-secondary">go</button></router-link></p>
    </div>
</template>

<style scoped>
.router-link{
    border-radius: 5px;
    color: var(--vt-c-offwhite);
    font-variant: bold;
}
 .btn.btn-secondary{
  background-color: var(--vt-c-pink);
  border: 0;
 }

</style>