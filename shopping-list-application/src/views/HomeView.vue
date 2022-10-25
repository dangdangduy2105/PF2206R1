<template>
  <div>
    <div id="home" class="container">
      <ul class="nav nav-tabs" role="tablist">
        <li v-for="(list, index) in shoppinglists" v-bind:key="index" role="presentation"  :class="{ active: index == this.selectedTitle }" @click="selectTitle(index)">
          <a :aria-controls="list.id" role="tab" data-toggle="tab" >{{ list.title }}</a>
        </li>
      </ul>
      <div class="tab-content">
        <div 
          :class= "index===0 ? 'active' : ''" 
          v-for="(list, index) in shoppinglists"  
          :key="index" class="tab-pane" 
          role="tabpanel" 
          :id="list.id">

            <ShoppingListComponent 
            :title="list.title" 
            :list_prop="list.items" 
            :id="list.id"/>
        </div>
      </div>
    </div>
    <hr>
    <div>
      <h2>
        <span>{{ pomodoro }}</span>
        <ControlsComponent />
      </h2>
      <StateTitleComponent :isWorking="isWorking" />
      <CountdownComponent :leftpad="leftpad"/>
      <transition name="fade">
        <KittenComponent v-if="isWorking"/>
      </transition>
    </div>
  </div>
</template>

<script>
import ShoppingListComponent from "../components/ShoppingListComponent.vue";
import ControlsComponent from "@/components/ControlsComponent.vue";
import StateTitleComponent from "@/components/StateTitleComponent.vue";
import CountdownComponent from "@/components/CountdownComponent.vue";
import KittenComponent from "@/components/KittenComponent.vue";

import { mapGetters } from "vuex";


export default {
  name: 'HomeView',
  data(){
    return {
      isActived: true,
      selectedTitle: 0
    }
  },
  components: {
    ShoppingListComponent,
    ControlsComponent,
    StateTitleComponent,
    CountdownComponent,
    KittenComponent
},
  computed: {
    ...mapGetters({
      shoppinglists: 'getLists',
      isWorking: 'isWorking'
    }),
  },
  methods:{
    leftpad(val){
      if(val >= 10){
        return val;
      }
      return '0' + val;
    },
    selectTitle(index){
      this.isActived = this.selectedTitle == index
      if(index == '1'){
        this.selectedTitle == 0
        console.log(this.selectedTitle)
      }
      else{
        this.selectedTitle == 1
      }
      console.log(this.isActived)
    }
  }
}
</script>
