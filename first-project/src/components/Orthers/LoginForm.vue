<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <h1>{{title}}</h1>
            
            <CustomInput v-model="email" :label="emailLabel" />
            
            <CustomInput v-model="password" :label="passwordLabel" />

            <button>Log in</button>
        </form>
    </div>
</template>

<script>
import CustomInput from './CustomInput.vue'

export default {
    name: 'LoginForm',
    data(){
        return {
            title: 'Login Form',
            email: '',
            password: '',
            emailLabel: 'Email',
            passwordLabel: 'Password'
        }
    },
    components:{
        CustomInput,
    },
    methods: {
        handleSubmit(){
            console.log(this.email, this.password)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  