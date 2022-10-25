<template>
    <div>
        <li :class="{ 'removed': item.checked }">
            <div class="checkbox">
                <label>
                    <input type="checkbox" v-model="item.checked"> 
                    <span>{{ item.text }}</span>
                </label>
            </div>
        </li>
    </div>
</template>

<script>


export default {
    name: "ItemComponent",
    props: ['it_prop'],
    data() {
        return {
            item: this.it_prop
        };
    },
}
</script>

<style scoped>
.removed {
    color: gray;
}
.removed span {
    text-decoration: line-through;
}
li {
    list-style-type: none;
}
li span {
    margin-left: 5px;
}
</style>