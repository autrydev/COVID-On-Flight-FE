<template>
    <v-container class="dashboardpage">
        <AuthGuard></AuthGuard>
        <DashboardHeader></DashboardHeader>
        <div v-if="admin">
          <AdminDashboard />
        </div>
        <div v-if="!admin">
          <DashboardForm />
        <UserFlightHistory />
        </div>
        <app-footer></app-footer>
    </v-container>
</template>

<script>
import DashboardForm from '@/components/DashboardForm.vue'
import AuthGuard from '@/components/AuthGuard'
import AppFooter from '@/components/AppFooter'
import DashboardHeader from '@/components/DashboardHeader'
import AdminDashboard from '@/components/AdminDashboard'
import UserFlightHistory from '@/components/UserFlightHistory.vue'

export default {
  name: 'Dashboard',
  components: {
    DashboardForm,
    AuthGuard,
    AppFooter,
    DashboardHeader,
    AdminDashboard,
    UserFlightHistory
  },

  data: () => ({
    admin: false
  }),

  created() {
    var admin = localStorage.getItem("admin")
    if (admin === "true")
      this.admin = true
  }
}
</script>

<style scoped>
.dashboardpage {
    /** background-color: green; */
    color: white;
}
</style>