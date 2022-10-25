<template>
    <div class="well">
        <div class="pomodoro-timer">
            <span>{{ leftpad(min) }} : {{ leftpad(sec) }}</span>
        </div>
    </div>
</template>




<script>
import { mapGetters } from 'vuex';

export default {
  name: "CountdownComponent",
  props: ['leftpad'],
  data() {
      return { 
      };
  },
  computed:{
    ...mapGetters({
      min: 'getMinutes',
      sec: 'getSeconds'
    })
  }
}
</script>

<style>

</style>