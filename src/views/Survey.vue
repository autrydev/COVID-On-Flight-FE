<template>
    <v-container class="surveypage">
        <SurveyHeader />
        <SurveyForm />
        <app-footer></app-footer>
    </v-container>
</template>

<script>
import SurveyForm from '@/components/SurveyForm.vue'

export default {
  name: 'Survey',
  components: {
    SurveyForm
  }
}
</script>

<style scoped>
</style>