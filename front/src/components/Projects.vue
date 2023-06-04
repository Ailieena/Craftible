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
        <p>{{ item.projectId }} {{ item.name }} {{ item.patternId }}</p>
    </div>
</template>