<template>
  <div>
    <h3>
        {{ isworking ? workingtitle : restingtile }}
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
  props: ['isworking']
}
</script>

<style>

</style>
