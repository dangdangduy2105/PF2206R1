<template>
    <ItemComponent  v-for="(it, index) in list" :key="index" :it_prop="it"/>
</template>

<script>
import ItemComponent from './ItemComponent.vue';


export default {
    name: "ItemsComponent2",
    props: ['items_prop'],
    data() {
        return {
            list: this.items_prop
        };
    },
    components: { ItemComponent },
}
</script>

<style scoped>

</style>