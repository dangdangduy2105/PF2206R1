<template>
  <div id="app" class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li :class= "index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" v-bind:key="index" role="presentation">
        <a :href="'#' + list.id" :aria-controls="list.id" role="tab" data-toggle="tab" @click="checked(list.id, index)" >{{ list.title }}</a>
      </li>
    </ul>
    <div class="tab-content">
      <div :class= "index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists"  :key="index" class="tab-pane" role="tabpanel" :id="list.id">
        <shopping-list-component :title="list.title" :list_prop="list.items" :id="list.id" @changeTitle="onChangeTitle"/>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingListComponent from './components/ShoppingListComponent.vue';
import _ from 'underscore'

export default {
    name: "App",
    data() {
        return {
            shoppinglists: [
                {
                    id: "groceries",
                    title: "Groceries",
                    items: [
                        { text: "Bananas", checked: true },
                        { text: "Apples", checked: false }
                    ]
                },
                {
                    id: "clothes",
                    title: "Clothes",
                    items: [
                        { text: "black dress", checked: false },
                        { text: "all stars", checked: false }
                    ]
                }
            ],
        };
    },
    components: { ShoppingListComponent },
    methods: {
      checked(val, val2){
        console.log(val, val2)
      },
      onChangeTitle (id, text) {
        _.findWhere(this.shoppinglists, { id: id }).title = text
      }
    },
    computed: {
        // ...mapGetters (['name'])
        //chuyển $store.state.name thành this.name
        count () {
            return this.$store.state.name
        }
    }
}
</script>

<style scoped>
.container {
  width: 40%;
  margin: 20px auto 0px auto;
}
</style>
