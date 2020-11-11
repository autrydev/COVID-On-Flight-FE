<template>
    <v-container class="MyCovidStatuspage">
        <MyCovidStatusHeader></MyCovidStatusHeader>
        <MyCovidStatusForm />
        <app-footer></app-footer>
    </v-container>
</template>

<script>
import MyCovidStatusForm from '@/components/MyCovidStatusForm.vue'
import AppFooter from "@/components/AppFooter.vue";
import MyCovidStatusHeader from "@/components/MyCovidStatusHeader";

export default {
  name: 'MyCovidStatus',
  components: {
    MyCovidStatusForm,
    AppFooter,
    MyCovidStatusHeader,
  }
}
</script>

<style scoped>
.MyCovidStatuspage {
    /** background-color: green; */
    background-color: #1c1e1f;
}
</style>