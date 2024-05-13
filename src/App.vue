<template>
  <div class="app-container">
    <Header></Header>
    <RouterView></RouterView>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from '../src/components/header.vue'
import Footer from './components/footer.vue';


</script>

<style>
  @font-face {
    font-family: Inter;
    src: url(../fonts/Inter-VariableFont_slnt\,wght.ttf) format(truetype);
  }
  
  .app-container{
    font-family: Inter;
  }
</style>