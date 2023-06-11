<script>
export default {
  data() {
    return {
      projects: {}
    };
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then(response => response.json()
      .then(data => {
        this.projects = data;
      }))
  }
}
</script>

<template>
    Projects:
    <div v-for="(item, index) in this.projects">
        <p>{{ item.projectId }} {{ item.name }} {{ item.patternId }}
        <router-link :to="'/projects/'+item.projectId"><button type="button" class="btn btn-secondary">go</button></router-link></p>
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