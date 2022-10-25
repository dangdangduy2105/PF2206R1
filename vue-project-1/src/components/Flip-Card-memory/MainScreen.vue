<template>
    <div>
        <h1>Pokemon memory</h1>
        <h3>Select mode to start</h3>
        <ButtonMode @onStart="handleOnStart($event)"/>
        <i class="fa-thin fa-broccoli"></i>
    </div>
</template>

<script>    
import ButtonMode from './ButtonMode.vue';

export default {
    methods: {
        handleOnStart(config) {
            // console.log(config);
            this.$emit('handleOnStart', {config})
        }
    },
    components: { ButtonMode }
}
</script>