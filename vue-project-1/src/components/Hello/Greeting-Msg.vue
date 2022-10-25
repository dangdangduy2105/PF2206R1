<template>
    <div>
        <h1>{{ msg }}</h1>
        <span>this message changed {{ counter }} times</span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Greeting-Msg',
    props: ['mapGetters'],
    data() {
        return {}
    },
    computed: {
        ...mapGetters({
            msg: 'getMessage',
            counter: 'getCounter'
        }),
    },
}

</script>

<style></style>