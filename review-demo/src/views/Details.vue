<template>
    <div>
        <Navbar />
        <h2> {{ product.name }}</h2>
        <h2> {{ product.price }}</h2>
        <h2> {{ product.description }}</h2>
    </div>
</template>


<script>
import Navbar from "@/components/Navbar.vue";
import getProduct from "@/composables/getProduct";

    export default {
        props: ['id'],
        components: { Navbar },
        setup (props) {
            const { product, error, load } = getProduct(props.id)

            load()

            return { product, error}
        }
    }

</script>