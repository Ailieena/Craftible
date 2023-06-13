<script>
export default {
  data() {
    return {
      success: false,
      failure: false,
      patternName: null,
      form: {
          patternId: null,
          userId: null,
          categoryId: null,
          craftId: null,
          name: '',
          description: ''
      },
      craft: null,
      category: null
      };
},
created() {
  this.form.patternId = this.$route.params.id;
  console.log("pattern id:" + this.form.patternId)
},
beforeMount() {
  {
    this.form.userId = this.$cookies.get('userId')
  }
  fetch('http://localhost:3000/patterns/'+this.form.patternId)
  .then(response => response.json()
  .then(data => {
      console.log("pattern/id data:" + data)
      this.patternName = data.name;
      this.form.categoryId = data.categoryId;
      this.form.craftId = data.craftId;
  }))
  .then(() => {
    fetch('http://localhost:3000/categories/'+this.form.categoryId)
    .then(response => response.json()
    .then(categoryData => {
        console.log("category: " + categoryData.name )
        this.category = categoryData.name;
    }))
    fetch('http://localhost:3000/crafts/'+this.form.craftId)
    .then(response => response.json()
    .then(craftData => {
        console.log("craft: " + craftData.name)
        this.craft = craftData.name;
    }))
  })
  .catch((err) => {
    console.log("failed to fetch pattern: " + err)
  })
},
methods: {
  submitForm() {
    console.log("form:" + JSON.stringify(this.form))
    fetch('http://localhost:3000/projects', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + this.$cookies.get('token')
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
  <div v-if="!this.form.userId">
    Please <router-link to="/login">log in</router-link> to add a pattern.
  </div>
  <div v-else>
    Adding project to pattern <b>{{ this.patternName }}</b>.
    <form v-if=!this.success @submit.prevent="submitForm" >
      <label for="name">Name:</label><br>
      <input v-model="form.name" type="text" class="form-control" id="name" required>
      <br>
      <label for="description">Description:</label><br>
      <textarea v-model="form.description" class="form-control" id="description"></textarea>
      <br>
      <label for="category">Category:</label><br>
      <select class="form-select" aria-label="Disabled select example" disabled>
        <option selected>{{ this.category }}</option>
      </select>
      <br>
      <label for="craft">Craft:</label><br>
      <select class="form-select" aria-label="Disabled select example" disabled>
        <option selected>{{ this.craft }}</option>
      </select>
      <br>
      <input class="form-control" type="file" id="formFile">
      <br>
      <br><button class="btn btn-dark">Submit</button>
    </form>
    <p v-if="this.success">Successfully added new project! <a href="/projects/add">Click here to add next</a></p>
    <p v-if="this.failure">Failed to add a project</p>
  </div>
</template>
