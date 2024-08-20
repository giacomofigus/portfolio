<script>
  import Jumbo from './Jumbo.vue'
  import Animation1 from './Animation1.vue'
  import Projects from './Projects.vue'

  export default {
    name: "AppMain",
    components: {
      Jumbo,
      Animation1,
      Projects
    },

    
    
  }
</script>

<template>
  <main class="">
    <Jumbo id="home" class="section section-1"/>
    <div class="section-2">
      <Animation1 id="chi-sono" />
      <Projects id="progetti"/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  main{
    .section{
      position: sticky;
      top: 0;
    }

    .section-2{
      position: relative;
      z-index: 10;
      background-color: #1F1F1F; 
    }
  }
</style>
