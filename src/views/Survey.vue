<template>
  <v-container class="surveypage">
    <AuthGuard></AuthGuard>
    <SurveyHeader></SurveyHeader>
    <SurveyForm></SurveyForm>
    <app-footer></app-footer>
  </v-container>
</template>

<script>
import AppFooter from '../components/AppFooter.vue'
import AuthGuard from '../components/AuthGuard.vue'
import SurveyForm from '@/components/SurveyForm.vue'
import SurveyHeader from '@/components/SurveyHeader.vue'


export default {
  name: 'Survey',
  components: {
    AppFooter,
    AuthGuard,
    SurveyForm,
    SurveyHeader,
  }
}
</script>

<style scoped>
</style>