<template>
  <div class="home"> 
    <div>{{title}}</div>
    <Example v-on:onHandler="onRecieved" v-bind:title_pop="title"/>
    <div>
      ádasdas
    </div>
  </div>
</template>

<script>
import Example from '../components/Example.vue';


export default {
  name: 'HomeView',
  data(){
    return {
      msg1: '',
      title: 'this is title'
    }
  },
  components: {
    Example
},
  methods:{
    onRecieved(value){
      // console.log(value)
      this.title = value
    }
  }
}
</script>
<style>

</style>
