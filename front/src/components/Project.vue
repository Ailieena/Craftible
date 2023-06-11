<script>
export default {
  data() {
    return {
      project: {}
    };
  },
  beforeMount() {
    const id = this.$route.params.id;
    console.log("getting project " + id)
    fetch('http://localhost:3000/projects/'+id)
      .then(response => response.json()
      .then(data => {
        console.log(data)
        this.project = data;
      }))
  }
}
</script>

<template>
    project:
    <p> {{ this.project.projectId }} {{ this.project.name }} {{ this.project.description }}</p>

</template>