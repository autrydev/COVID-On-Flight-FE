<template>
  <v-container class="accountsettingspage">
    <AccountSettingsHeader></AccountSettingsHeader>
    <AccountSettingsForm />
    <app-footer></app-footer>
  </v-container>
</template>

<script>
import AccountSettingsForm from "@/components/AccountSettingsForm.vue";
import AppFooter from "@/components/AppFooter.vue";
import AccountSettingsHeader from "@/components/AccountSettingsHeader";

export default {
  name: "AccountSettings",
  components: {
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