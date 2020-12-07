<template>
    <v-container class="forgotpasspage">
            <ResetPassForm />
    </v-container>
</template>

<script>
import ResetPassForm from '@/components/ResetPassForm.vue'

export default {
  name: 'ForgotPassword',
  
  components: {
    ResetPassForm
  }
}
</script>

<style scoped>
.forgotpasspage {
    color: black;
    width: 100%;
    height: 100%;
}
</style>