<template>
    <v-container class="dashboardpage">
        <DashboardForm />
        <UserFlightHistory />
    </v-container>
</template>

<script>
import DashboardForm from '@/components/DashboardForm.vue'
import UserFlightHistory from '@/components/UserFlightHistory.vue'

export default {
  name: 'Dashboard',
  components: {
    DashboardForm,
    UserFlightHistory
  }
}
</script>

<style scoped>
.dashboardpage {
    /** background-color: green; */
    color: white;
}
</style>