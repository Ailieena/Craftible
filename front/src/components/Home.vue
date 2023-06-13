<script>
import Patterns from './Patterns.vue'
import Projects from './Projects.vue'
export default {
  components: {
    Patterns,
    Projects
  }
  
}
</script>

<template>
  <p class="lead">Patterns:</p>
  <Patterns />
  <br>
  <p class="lead">Projects:</p>
  <Projects />
</template>

<style scoped>
.router-link{
    border-radius: 5px;
    color: var(--vt-c-offwhite);
    font-variant: bold;
}
 .btn.btn-secondary{
  background-color: var(--vt-c-pink);
  border: 0;
 }

</style>