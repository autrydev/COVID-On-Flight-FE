<template>
    <div>
        <AuthGuard></AuthGuard>
        <DashboardHeader></DashboardHeader>
        <app-footer></app-footer>
    </div>
</template>
<script>
import AuthGuard from './AuthGuard'
import AppFooter from './AppFooter'
import DashboardHeader from './DashboardHeader'
import TestForm from './TestForm'

export default {
    components:{AuthGuard,AppFooter,DashboardHeader,TestForm}
}
</script>

