<template>
    <div>
        <span class="counter" :style="{color: colorCode}">{{counter}}</span>
        <div>
            <button @click="decrementCounter"><span>-</span></button>
            <button @click="incrementCounter"><span>+</span></button>
        </div>
        <div><input type="text" placeholder="Enter color code" @keyup="changeColor" v-model="colorCode"></div>
        <div>
            {{ counterSquared }}
            <sup>2</sup>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Counter',
    props: ['mapGetters'],
    computed: {
        ...mapGetters({
            counter: 'getCounter',
            counterSquared: 'counterSquared', 
            colorCode: 'getColorCode'
        }),
    },
    methods: {
        ...mapActions(['incrementCounter', 'decrementCounter', 'changeColor'])
    }
}

</script>

<style scoped>
.counter{
    font-size: 40px;
    font-weight: bold;
}
button{
    margin: 10px 5px;
}
button span{
    padding: 10px;
    text-align: center;
}
</style>