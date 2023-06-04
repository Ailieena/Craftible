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
        <p>{{ item.patternId }} {{ item.name }} {{ item.categoryId }}</p>
    </div>
</template>