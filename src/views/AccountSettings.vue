<template>
  <v-container class="accountsettingspage">
    <v-top-navigation :value="value" color="primary">
      <v-container fluid>
        <v-flex xs12 class="text-xl-center" mt-5>
          <v-btn to="/dashboard" x-large outlined>
            Dashboard<v-icon>mdi-history</v-icon></v-btn
          >
          <v-btn to="/covid19informaion" x-large outlined
            >COVID-19 Information<v-icon>mdi-heart</v-icon></v-btn
          >
          <v-btn to="/mycovidstatus" x-large outlined
            >My Covid Status<v-icon>mdi-alert</v-icon></v-btn
          >
          <v-btn
            to="/accountsettings"
            class="white--text"
            color="#2962FF"
            elevation="5"
            x-large
            >Account Settings<v-icon>mdi-account-edit</v-icon></v-btn
          >
        </v-flex>
      </v-container>
    </v-top-navigation>
    <!--<DashboardHeader></DashboardHeader>-->
    <AccountSettingsForm />
    <app-footer></app-footer>
  </v-container>
</template>

<script>
import AccountSettingsForm from "@/components/AccountSettingsForm.vue";
import AppFooter from "@/components/AppFooter.vue";
//import DashboardHeader from "@/components/DashboardHeader";

export default {
  name: "AccountSettings",
  components: {
    AccountSettingsForm,
    AppFooter,
    //DashboardHeader,
  },
};
</script>

<style scoped>
.accountsettingspage {
  /** background-color: green; */
  background-color: #1c1e1f;
}
</style>