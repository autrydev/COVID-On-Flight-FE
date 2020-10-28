<template>
    <v-container class="signuppage">
        <SignupForm />
    </v-container>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue'

export default {
  name: 'UserSignup',
  components: {
    SignupForm
  }
}
</script>

<style scoped>
.signuppage {
    /** background-color: green; */
    color: black;
}
</style>