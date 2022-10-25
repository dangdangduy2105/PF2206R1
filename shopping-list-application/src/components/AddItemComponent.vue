<template>
    <div>
        <div class="input-group">
            <input type="text" class="input form-control" placeholder="add shopping list item" v-model="newItem" @keyup.enter="addItem">
            <span class="input-group-btn">
                <button class="btn btn-default" type="button" @click="addItem">Add!</button>
            </span>
        </div>
    </div>
</template>

<script>

export default {
    name: "TodoList1",
    data() {
        return {
            newItem: '',
        }
    },
    methods: {
        addItem(){
            let text;
            text = this.newItem.trim();

            if(text){
                this.$emit('add', this.newItem);
                this.newItem = '';
            }
        }
    }
}
</script>

<style scoped>

</style>