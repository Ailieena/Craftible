<script>
export default {
  data() {
    return {
      project: {},
      patternName: null,
      userId: null,
      userLogin: null,
      craft: null,
      category: null,
      imageFilename: null
    };
  },
  beforeMount() {
    const id = this.$route.params.id;
    this.userId = this.$cookies.get('userId')
    console.log("getting project " + id)
    fetch('http://localhost:3000/projects/'+id)
    .then(response => response.json()
    .then(data => {
      console.log(data)
      this.project = data;
    }))
    .catch((err) => {
      console.log(err)
    })
    .then(() => {
      fetch('http://localhost:3000/categories/'+this.project.categoryId)
      .then(response => response.json()
      .then(categoryData => { this.category = categoryData.name; }))
      fetch('http://localhost:3000/crafts/'+this.project.craftId)
      .then(response => response.json()
      .then(craftData => { this.craft = craftData.name; }))
      fetch('http://localhost:3000/users/'+this.project.userId)
      .then(response => response.json()
      .then(userData => { this.userLogin = userData.login; }))
      fetch('http://localhost:3000/patterns/'+this.project.patternId)
      .then(response => response.json()
      .then(patternData => { this.patternName = patternData.name; }))
      if(this.project.imageId != null){
      fetch('http://localhost:3000/images/'+this.project.imageId)
      .then(response => response.json()
      .then(imageData => { 
        console.log("image data: " + imageData)
        this.imageFilename = imageData.filename; 
      }))}
      else{
        this.imageFilename =  'default.png';
      }
    })
  }
}
</script>

<template>
  <div class="container text-center">
    <div class="row align-items-start">
  <div class="col-md-6">
    <img :src="'http://localhost:3000/static/'+this.imageFilename" class="img-fluid" width="540">
  </div>
  <div class="col-md-6">
    <ul class="list-group list-group-flush">
      <li class="list-group-item lead"><b>{{ this.project.name }}</b></li>
      <li class="list-group-item"><b>Owner: </b> {{ this.userLogin }}</li>
      <li class="list-group-item"><b>Description: </b>{{ this.project.description }}</li>
      <li class="list-group-item"><b>Category: </b>{{ this.category }}</li>
      <li class="list-group-item"><b>Craft: </b> {{ this.craft }}</li>
      <li class="list-group-item"><b>Pattern: </b> <router-link :to="'/patterns/'+this.project.patternId">{{ this.patternName }}</router-link></li>
    </ul>
  </div>
  </div></div>
</template>

<style scoped>

.list-group-item{
  background-color: transparent;
}


</style>