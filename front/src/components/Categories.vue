<script>
export default {
  data() {
    return {
      categories: {}
    };
  },
  mounted() {
    fetch('http://localhost:3000/categories')
      .then(response => response.json()
      .then(data => {
        this.categories = data;
      }))
  }
}
</script>

<template>
    Categories:
    <div v-for="(item, index) in this.categories">
        <p>{{ item.categoryId }} {{ item.name }} </p>
    </div>
</template>