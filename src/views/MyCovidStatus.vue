<template>
    <v-container class="MyCovidStatuspage">
        <AuthGuard></AuthGuard>
        <MyCovidStatusHeader></MyCovidStatusHeader>
        <MyCovidStatusForm />
        <app-footer></app-footer>
    </v-container>
</template>

<script>

import AuthGuard from '@/components/AuthGuard'
import MyCovidStatusForm from '@/components/MyCovidStatusForm.vue'
import AppFooter from "@/components/AppFooter.vue";
import MyCovidStatusHeader from "@/components/MyCovidStatusHeader";

export default {
  name: 'MyCovidStatus',
  components: {
    AuthGuard,
    MyCovidStatusForm,
    AppFooter,
    MyCovidStatusHeader,
  }
}
</script>

<style scoped>
.MyCovidStatuspage {
    /*background-color: #1c1e1f;*/
}
</style>