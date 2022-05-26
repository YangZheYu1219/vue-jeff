<template>
  <div class="checkOutUlContainer">
    <ul class="checkOutUl listUnstyled">     
      <li class="checkOutli" v-for="(data,index) of cart" :key="index">
        <img :src="data.imgUrl" class="objectCover" style="width: 10%;">
          <div class="text">{{ data.title }}</div>
          <div class="price">{{ data.totalPrice }}</div>
          <div @click="removeCart(data)">
            <i class="fa-solid fa-xmark"></i>            
          </div>
          <div class="goodNumber">
           <button  @click="removeNumber(data)">
             <i class="fa-solid fa-minus"></i>
           </button> 
           <div>{{ data.number }}</div>
           <button @click="addNumber(data)">
             <i class="fa-solid fa-plus plus"></i>
           </button>
          </div>
      </li>                             
    </ul>
    <div class="buyGoodContainer">
      <div class="totalPrice">小記: {{  totalPrice }}</div>
      <button class="btn">下一步</button>  
    </div>    
  </div>
</template>

<script>
export default {
  name: 'CartComponent',
  data(){
    return{
    }
  },
  computed: {
    cart(){
      return this.$store.state.cart 
    },
    totalPrice () {
      return this.$store.getters.totalPrice
    }
  },  
  methods:{
    removeCart(salItem){
      for(let i = 0; i <= this.cart.length - 1; i++){
        if(this.cart[i].id == salItem.id){
          this.$store.commit('removeImg', i)
        }
      }   
    },
    addNumber(salItem){
      this.$store.commit('addNum', salItem)
      this.$store.commit('addPrice',salItem)
    },
    removeNumber(salItem){
      this.$store.commit('removeNum', salItem)
      this.$store.commit('addPrice',salItem)
    }
  },
}
</script>