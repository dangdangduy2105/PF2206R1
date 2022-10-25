<template>
  <div>
    <h3>
        {{ isWorking ? workingtitle : restingtile }}
    </h3>
  </div>
</template>

<script>


export default {
  name: "StateTitleComponent",
  data() {
      return { 
        workingtitle: 'Work!',
        restingtile: 'Rest!'
      };
  },
  props: ['isWorking']
}
</script>

<style>

</style>
