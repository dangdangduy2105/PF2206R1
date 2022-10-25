<template>
    <span>
      <button 
        title="start" 
        :disabled="isStarted && !isPaused"
        @click="start">
        <i class="glyphicon glyphicon-play"></i>
      </button>
      <button 
      title="pause" 
      :disabled="!isStarted || isPaused"
      @click="pause"> 
        <i class="glyphicon glyphicon-pause"></i>
      </button>
      <button 
      title="stop" 
      :disabled="!isStarted"
      @click="stop">
        <i class="glyphicon glyphicon-stop"></i>
      </button>
    </span>
</template>
    
<script>
import { mapGetters, mapActions } from 'vuex';



export default {
    name: "ControlComponent",
    data() {
        return { 
        
        };
    },
    computed: {
        ...mapGetters([
            'isStarted',
            'isPaused',
            'isStopped'
        ])
    },
    methods: {
        ...mapActions([
            'start',
            'pause',
            'stop'
        ]),
    }
}
</script>

<style>
button:disabled i{
    color: gray;
}
</style>  