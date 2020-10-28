<template>
    <v-container class="loginpage">
        <LoginForm />
    </v-container>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style scoped>
.loginpage {
    /** background-color: green; */
    color: black;
}
</style>