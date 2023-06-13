<script>
export default {
  data() {
    return {
      projects: {},
      userId: null
    };
  },
  beforeMount() {
    this.userId = this.$cookies.get('userId')
    fetch('http://localhost:3000/projects')
      .then(response => response.json()
      .then(data => {
        this.projects = data;
      }))
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    getImage(project) {
      console.log("getting image data: " + project.name)
      if(project.imageId==null) return 'http://localhost:3000/static/default.png';
      fetch('http://localhost:3000/images/'+project.imageId)
      .then(response => response.json()
      .then(imageData => { 
        console.log("got: " + imageData.filename)
        const img_tag = document.getElementById('thumbnail'+project.imageId)
        console.log("img_tag: " + img_tag)
        img_tag.src = 'http://localhost:3000/static/'+imageData.filename; 
      }))}
    }     
};
</script>

<template>
  <div class="container text-center">
    <div class="row ">
      <div v-for="(item, index) in this.projects" class="col-md-4">
        <router-link :to="'/projects/'+item.projectId">
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