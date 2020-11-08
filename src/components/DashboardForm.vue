<template>
    <div>
        <DashboardHeader></DashboardHeader>
        <TestForm></TestForm>
        <app-footer></app-footer>
    </div>
</template>
<script>
import AppFooter from './AppFooter'
import DashboardHeader from './DashboardHeader'
import TestForm from './TestForm'
export default {
    components:{AppFooter,DashboardHeader, TestForm}
}
</script>

