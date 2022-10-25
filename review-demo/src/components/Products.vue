<template>
   <div>
        <div v-for="product in products" :key="product.id">
            <Product :product="product"/>
        </div>
   </div>
</template>

<script>
import Product from './Product.vue';

export default{
    name: "Products",
    props: ["products"],
    components: { Product },
    methods:{
        methodB(){
            console.log("Method B")
        }
    }
}
</script>