<script>
export default {
  data() {
    return {
      pattern: {}
    };
  },
  mounted() {
    const id = this.$route.params.id;
    console.log("getting pattern " + id)
    fetch('http://localhost:3000/patterns/'+id)
      .then(response => response.json()
      .then(data => {
        console.log(data)
        this.pattern = data;
      }))
  }
}
</script>

<template>
    Pattern:
    <p> {{ this.pattern.patternId }} {{ this.pattern.name }} {{ this.pattern.description }}</p>
</template>