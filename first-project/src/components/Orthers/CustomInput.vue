<template>
    <div>
        <label>
            {{ label }}
            <input type="text" v-model="inputValue">
        </label>
    </div>
</template>
  
<script>

export default {
    name: 'CustomInput',
    data(){
        return {
        }
    },
    props:['label', 'modelValue'],
    computed: {
        inputValue: {
            get(){
                return this.modelValue
            },
            set(value){
                this.$emit('update:modelValue', value)
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input{
    margin: 10px;
    display: block;
}
</style>
  