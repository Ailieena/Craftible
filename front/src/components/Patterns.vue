<script>
export default {
  data() {
    return {
      patterns: {},
      userId: null
    };
  },
  beforeMount() {
    this.userId = this.$cookies.get('userId')
    fetch('http://localhost:3000/patterns')
      .then(response => response.json()
      .then(data => {
        this.patterns = data;
      }))
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    getImage(pattern) {
      console.log("getting image data: " + pattern.name)
      if(pattern.imageId==null) return 'http://localhost:3000/static/default.png';
      fetch('http://localhost:3000/images/'+pattern.imageId)
      .then(response => response.json()
      .then(imageData => { 
        console.log("got: " + imageData.filename)
        const img_tag = document.getElementById('thumbnail'+pattern.imageId)
        console.log("img_tag: " + img_tag)
        img_tag.src = 'http://localhost:3000/static/'+imageData.filename; 
      }))}
    }     
};
</script>

<template>
  <div class="container text-center">
    <button type="button" class="btn btn-dark">
      <div v-if="!this.userId"><router-link to="/login">Log in</router-link> to add a pattern</div>
      <div v-else><router-link to="/patterns/add">Add a pattern</router-link></div>
    </button>
  </div>
  <br>
  <div class="container text-center">
    <div class="row ">
      <div v-for="(item, index) in this.patterns" class="col-md-4">
        <router-link :to="'/patterns/'+item.patternId">
        <img :src=getImage(item) class="img-fluid img-thumbnail" :id="'thumbnail'+item.imageId" width="540">
        <p>{{ item.name }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

 .btn.btn-secondary{
  background-color: var(--vt-c-pink);
  border: 0;
 }

</style>