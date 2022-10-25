<template>
  <div class="home">
    <Navbar/>
    <Sidebar />
    <Sort />
    <hr/>
    <Products :products="products"/>
    <div>{{abc}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from '@/components/Products.vue';
import Navbar from '@/components/Navbar.vue';
import getProducts from '@/composables/getProducts';
import Sort from '@/components/Sort.vue';
import Sidebar from '@/components/Sidebar.vue';
import {ref} from 'vue'

export default {
  name: 'HomeView',
  components: {
    Products,
    Navbar,
    Sort,
    Sidebar
},
  setup (){
    const { products, error, load } = getProducts()

    const abc = "hello"
    //ref??
    console.log(abc)

    const a = method(()=>{
      console.log("Method A")
    })

    load()

    //gọi method qua các components.

    return { products, error, abc, a }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
