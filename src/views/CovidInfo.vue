<template>
    <v-container class="CovidInfopage">
        <CovidInfoForm />
    </v-container>
</template>

<script>
import CovidInfoForm from '@/components/CovidInfoForm.vue'

export default {
  name: 'CovidInfo',
  components: {
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