<template>
    <div>
        <em>Change the title: </em>
        <input 
        type="text" 
        :value="title" 
        @input="onInput({ 
            title: $event.target.value,
            id: id 
        })">
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "ChangeTitleComponent",
    prop: ['title', 'id'],
    methods: {
        ...mapActions({
            onInput: 'changeTitle'
        })
    }
}
</script>

<style scoped>

</style>