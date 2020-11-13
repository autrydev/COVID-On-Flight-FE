<template>

 <v-toolbar color = "indigo" dark>

    <v-toolbar-title class="white--text">Dashboard</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn to="/dashboard" x-large outlined>Dashboard<v-icon>mdi-history</v-icon></v-btn>
    <v-btn to="/covid19informaion" x-large outlined> COVID-19 Information<v-icon>mdi-heart</v-icon></v-btn>
    <v-btn to="/mycovidstatus" x-large outlined>My Covid Status<v-icon>mdi-alert</v-icon></v-btn>
    <v-btn to="/accountsettings" x-large outlined >Account Settings<v-icon>mdi-dots-vertical</v-icon></v-btn>
    <v-btn x-large outlined v-on:click="logout">Logout<v-icon>mdi-logout</v-icon></v-btn>
  </v-toolbar>
</template>

<script>
import router from '../router'
export default {
  methods: {
    logout() {
      localStorage.clear();
      router.push('login');
    }
  }
}
</script>