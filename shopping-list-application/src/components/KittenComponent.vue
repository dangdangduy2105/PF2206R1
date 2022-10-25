<template>
    <div class="well">
        <img :src="catimgsrc">
    </div>
</template>




<script>
export default {
  name: "KittenComponent.vue",
  props: ['leftpad'],
  data() {
      return { 
        catimgsrc: "http://thecatapi.com/api/images/get?size=med"
      };
  },
}
</script>

<style>

</style>