<template>
    <v-container class="CovidInfopage">
        <AuthGuard />
        <CovidInfoForm />
    </v-container>
</template>

<script>
import AuthGuard from '@/components/AuthGuard'
import CovidInfoForm from '@/components/CovidInfoForm.vue'


export default {
  name: 'CovidInfo',
  components: {
    AuthGuard,
    CovidInfoForm
  }
}
</script>

<style scoped>
.dashboardpage {
    /** background-color: green; */
    color: white;
}
</style>