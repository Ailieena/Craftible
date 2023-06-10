<script>
export default {
    data() {
        return {
          success: false,
          failure: false,
          form: {
              userId: null,
              categoryId: null,
              craftId: null,
              name: '',
              description: ''
          },
          categories: [],
          crafts: []
          };
},
mounted() {
    fetch('http://localhost:3000/categories')
    .then(response => response.json()
    .then(data => {
        console.log(data)
        this.categories = data;
    }))
    fetch('http://localhost:3000/crafts')
    .then(response => response.json()
    .then(data => {
        console.log(data)
        this.crafts = data;
    }))
},
methods: {
    submitForm() {
      this.form.userId = this.store.userId
      console.log("form:" + JSON.stringify(this.form))
      // Make an API call to submit the form data
      // Replace 'apiEndpoint' with your actual API endpoint for creating a new pattern
      fetch('http://localhost:3000/patterns', {
        credentials: 'include',
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + this.store.token
        },
        body: JSON.stringify(this.form)})
      .then((response) => {
        console.log("form response: " + response)
        this.success = true
      })
      .catch((error) => {
        console.log("form error"+ error)
        this.failure = true
      })
    },
    displayForm() {
      return !this.success;
    }
}};
</script>

<template>
  <div v-if="!this.store.userId">
    Please <router-link to="/login">log in</router-link> to add a pattern.
  </div>
  <div v-else>
    <form v-if=!this.success @submit.prevent="submitForm" >
      <label for="name">Name:</label><br>
      <input v-model="form.name" type="text" id="name" required>
      <br>
      <label for="description">Description:</label><br>
      <textarea v-model="form.description" id="description"></textarea>
      <br>
      <label for="category">Category:</label><br>
      <select v-model="form.categoryId" id="category" required>
        <option v-for="category in categories" :key="category.categoryId" :value="category.categoryId">
          {{ category.name }}
        </option>
      </select>
      <br>
      <label for="craft">Craft:</label><br>
      <select v-model="form.craftId" id="craft" required>
        <option v-for="craft in crafts" :key="craft.craftId" :value="craft.craftId">
          {{ craft.name }}
        </option>
      </select>
      <br>
      <br><button>Submit</button>
    </form>
    <p v-if="this.success">Successfully added new pattern! <a href="/patterns/add">CLick here to add next</a></p>
    <p v-if="this.failure">Failed to add a pattern</p>
  </div>
</template>
