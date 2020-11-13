<template>
  <v-container class="accountsettingspage">
    <AuthGuard></AuthGuard>
    <AccountSettingsHeader></AccountSettingsHeader>
    <AccountSettingsForm />
    <app-footer></app-footer>
  </v-container>
</template>

<script>
import AuthGuard from '@/components/AuthGuard'
import AccountSettingsForm from "@/components/AccountSettingsForm.vue";
import AppFooter from "@/components/AppFooter.vue";
import AccountSettingsHeader from "@/components/AccountSettingsHeader";

export default {
  name: "AccountSettings",
  components: {
    AuthGuard,
    AccountSettingsForm,
    AppFooter,
    AccountSettingsHeader,
  },
};
</script>

<style scoped>
.accountsettingspage {
  /** background-color: green; */
  background-color: #1c1e1f;
}
</style>