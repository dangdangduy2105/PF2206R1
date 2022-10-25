<template>  
    <div>
        <!-- <button @click="a++">click me!</button>
        <div>{{a}}</div>
        <div>
            {{this.title_pop}}
        </div> -->
        <!-- <div>
            {{b++}}
        </div> -->
        <slot>   </slot>
        <div>
            <input type="text" @keyup="onInputHandler" v-model="title">
        </div>
    </div>
</template> 

<script>
import { ref, onBeforeMount, onMounted, onUnmounted, onUpdated, onBeforeUpdate } from 'vue';

export default {   
    props: ['status','title_pop'],
    // setup(){
    //     console.log('set up run first')
    //     onBeforeMount(() =>{
    //         console.log("before mounted")
    //     })
    //     onMounted (()=>{
    //         console.log("mounted")
    //     })
    //     onUnmounted (()=>{
    //         console.log("unmounted")
    //     })
    //     onBeforeUpdate(() =>{
    //         console.log(a.value)
    //     })
    //     onUpdated(() =>{
    //         console.log("updated")
    //     })
        
    //     const a = ref(0)
    //     const b = 2;
    //     return { a , b}
    // },
    data(){
        return {
            msg: 'message from child component'
        }
    },
    props:['title'],
    methods:{
        onInputHandler(event){
            this.$emit('onHandler', event.target.value)
        }
    }
}
</script>

<style>
ul li{
    text-align: left;
}
ul{
    margin: 10px 50px;
}
</style>