<template>
<link rel="stylesheet" href="../assets/index.css">
	<Navbar/>
	<Login/>
	<Footer/>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Login from '@/components/Login.vue'
import Footer from '@/components/Footer.vue';


export default {
	name: 'accountView',
  components: {
    Navbar,
	Login,
    Footer,
  }
}
</script>

<style type="text/css">
  @import '../assets/index.css';
</style>