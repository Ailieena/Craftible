<script>
export default {
  data() {
    return {
      pattern: {},
      userId: null,
      userLogin: null,
      craft: null,
      category: null
    };
  },
  beforeMount() {
    const id = this.$route.params.id;
    this.userId = this.$cookies.get('userId')
    console.log("getting pattern " + id)
    fetch('http://localhost:3000/patterns/'+id)
    .then(response => response.json()
    .then(data => {
      console.log(data)
      this.pattern = data;
    }))
    .catch((err) => {
      console.log(err)
    })
    .then(() => {
      fetch('http://localhost:3000/categories/'+this.pattern.categoryId)
      .then(response => response.json()
      .then(categoryData => { this.category = categoryData.name; }))
      fetch('http://localhost:3000/crafts/'+this.pattern.craftId)
      .then(response => response.json()
      .then(craftData => { this.craft = craftData.name; }))
      fetch('http://localhost:3000/users/'+this.pattern.userId)
      .then(response => response.json()
      .then(userData => { this.userLogin = userData.login; }))
    })

  
  }
}
</script>

<template>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>{{ this.pattern.name }}</b></li>
      <li class="list-group-item"><b>Owner: </b> {{ this.userLogin }}</li>
      <li class="list-group-item"><b>Description: </b>{{ this.pattern.description }}</li>
      <li class="list-group-item"><b>Category: </b>{{ this.category }}</li>
      <li class="list-group-item"><b>Craft: </b> {{ this.craft }}</li>
      
    </ul>
    <div v-if="!this.userId"><router-link to="/login">Log in</router-link> to add a project to this pattern</div>
    <div v-else><router-link :to="'/projects/add/' + this.$route.params.id">Add a project to this pattern</router-link></div>
</template>

<style scoped>

.list-group-item{
  background-color: transparent;
}

</style>