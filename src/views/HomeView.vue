<template>
    <Navbar/>
    <Carousel/>
    <Shop/>
    <Products/>
    <Brands/>
    <Footer/>
<!-- 
  <router-link to="/accountView">登入頁面</router-link>
  <router-view/> -->
</template>


<script>
import Navbar from '@/components/Navbar.vue';
import Carousel from '@/components/Carousel.vue';
import Shop from '@/components/Shop.vue';
import Products from '@/components/Products.vue';
import Brands from '@/components/Brands.vue';
import Footer from '@/components/Footer.vue';


export default {
	name: 'HomeView',
  components: {
    Navbar,
    Carousel,
    Shop,
    Products,
    Brands,
    Footer,
  }
}
</script>


<style >
  @import '../assets/index.css';
</style>


