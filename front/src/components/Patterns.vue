<script>
export default {
  data() {
    return {
      patterns: {}
    };
  },
  mounted() {
    fetch('http://localhost:3000/patterns')
      .then(response => response.json()
      .then(data => {
        this.patterns = data;
      }))
  }
}
</script>

<template>
    Patterns:
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