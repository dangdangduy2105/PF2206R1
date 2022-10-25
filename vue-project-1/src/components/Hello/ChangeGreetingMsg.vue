<template>
    <div>
        <input type="text" :value="msg" @keyup="handleMessageInputChanges">
    </div>
</template>

<script>
import { mapGetters , mapActions, mapMutations } from 'vuex'

export default {
    name: 'Change-Greeting-Msg',
    computed: {
        // msg(){
        //     return this.$store.state.msg
        // },
        ...mapGetters({
            msg: 'getMessage'
        })
    },
    methods: {
        changeMsg(event){ //call commit method by call dispatch
            this.$store.dispatch('changeMessage', event.target.value)
        },
        ...mapMutations(['setMessage']),
        ...mapActions(['handleMessageInputChanges'])

    }
}

</script>

<style></style>