<template>
    <v-container class="accountsettingspage">
        <AccountSettingsForm />
    </v-container>
</template>

<script>
import AccountSettingsForm from '@/components/AccountSettingsForm.vue'

export default {
  name: 'AccountSettings',
  components: {
    AccountSettingsForm
  }
}
</script>

<style scoped>
.dashboardpage {
    /** background-color: green; */
    color: white;
}
</style>