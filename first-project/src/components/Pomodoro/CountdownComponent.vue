<template>
    <div class="well">
        <div class="pomodoro-timer">
            <span>{{ leftpad(min) }} : {{ leftpad(sec) }}</span>
        </div>
    </div>
</template>




<script>
export default {
  name: "CountdownComponent",
  props: ['leftpad'],
  data() {
      return { 
        min: 1,
        sec: 5
      };
  },
}
</script>

<style>

</style>