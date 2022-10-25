<template>
    <div>
        <h2>{{ title }}</h2>
        <!-- <h2>{{  count }}</h2>
        <button @click="updateName">Click me!</button> -->
        <AddItemComponent @add="addNewItem"/>
        <ItemsComponent :items_prop="items"/>
        <div class="footer">
            <hr/>
            <ChangeTitleComponent v-model="titleValue" @changeTitle="onChangeTitle"/>
        </div>
    </div>
</template>

<script>
import AddItemComponent from './AddItemComponent.vue';
import ItemsComponent from './ItemsComponent.vue';
import ChangeTitleComponent from './ChangeTitleComponent.vue';


//get name's value without map => $store.state.name
//import map.. from vuex
// import { mapGetters, mapMutations, mapActions } from 'vuex'

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
            titleValue: this.title
        };
    },
    components: { 
        AddItemComponent, 
        ItemsComponent, 
        ChangeTitleComponent 
    },
    methods: {
        addNewItem(text){
            this.items.push({
                text: text,
                checked: false
            })
        },
        onChangeTitle(text){
            this.$emit('changeTitle', this.id, text)
        },
        // ...mapActions(['updateName']),
        // ...mapMutations(['setName'])
    },
    computed: {
        // ...mapGetters (['name'])
        //chuyển $store.state.name thành this.name
    }
}
</script>

<style scoped>
.footer {
    font-size: 0.7em;
    margin-top: 20vh;
}
</style>