<template>
    <div>
        <h2>{{ title }}</h2>
        <AddItemComponent @add="addNewItem"/>
        <ItemsComponent :items_prop="items"/>
    </div>
</template>

<script>
import AddItemComponent from './AddItemComponent.vue';
import ItemsComponent from './ItemsComponent.vue';

import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: "ShoppingListComponent",
    props: [
        'title',
        'list_prop',
        'id'
    ],
    data() {
        return {
            items: this.list_prop,
            titleValue: this.title,
            lit: $store.state.shoppinglists
        };
    },
    components: { 
        AddItemComponent, 
        ItemsComponent, 
    },
    methods: {
        addNewItem(text){
            this.items.push({
                text: text,
                checked: false
            })
        },
    },
    computed: {
        ...mapGetters ({
            lists: 'getLists',
        })
    }
}
</script>

<style scoped>
.footer {
    font-size: 0.7em;
    margin-top: 20vh;
}
</style>