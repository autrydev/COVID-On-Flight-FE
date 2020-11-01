<template>
    <v-container class="dashboardpage">
        <DashboardForm />
    </v-container>
</template>

<script>
import DashboardForm from '@/components/DashboardForm.vue'

export default {
  name: 'Dashboard',
  components: {
    DashboardForm
  }
}
</script>

<style scoped>
.dashboardpage {
    /** background-color: green; */
    color: white;
}
</style>