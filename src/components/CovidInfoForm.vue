<template>
    <div>
        <DashboardHeader></DashboardHeader>
        <CovidInfoText></CovidInfoText>
        <app-footer></app-footer>
    </div>
</template>
<script>
import AppFooter from './AppFooter'
import DashboardHeader from './CovidInfoHeader'
import CovidInfoText from './CovidInfoText'
export default {
    components:{AppFooter,DashboardHeader, CovidInfoText}
}
</script>