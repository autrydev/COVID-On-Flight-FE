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
    color: black;
    width: 100%;
    height: 100%;
}
</style>