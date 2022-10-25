<template>
    <div>
        <em>Change the title: </em>
        <input type="text" :value="title" @input="onInput">
    </div>
</template>

<script>


export default {
    name: "ChangeTitleComponent",
    prop: ['value', 'title'],
    data() {
        return {
            
        }
    }, 
    methods: {
        onInput(event){
            this.$emit('changeTitle', event.target.value)
        }
    }
}
</script>

<style scoped>

</style>