<template>
    <v-container class="MyCovidStatusdpage">
        <MyCovidStatusForm />
    </v-container>
</template>

<script>
import MyCovidStatusForm from '@/components/MyCovidStatusForm.vue'

export default {
  name: 'MyCovidStatus',
  components: {
    MyCovidStatusForm
  }
}
</script>

<style scoped>
.dashboardpage {
    /** background-color: green; */
    color: white;
}
</style>