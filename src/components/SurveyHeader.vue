<template>

 <v-toolbar color = "#2196f3" dark>
    <v-spacer></v-spacer>
    <v-btn to="/dashboard" outlined>Dashboard<v-icon>mdi-home</v-icon></v-btn>
    <v-spacer></v-spacer>
    <v-btn to="/covid19informaion" outlined> COVID-19 Information<v-icon>mdi-heart</v-icon></v-btn>
    <v-spacer></v-spacer>
    <v-btn to="/mycovidstatus" outlined>My Covid Status<v-icon>mdi-alert</v-icon></v-btn>
    <v-spacer></v-spacer>
    <v-btn to="/accountsettings" outlined >Account Settings<v-icon>mdi-dots-vertical</v-icon></v-btn>
    <v-spacer></v-spacer>
    <v-btn outlined v-on:click="logout">Logout<v-icon>mdi-logout</v-icon></v-btn>
    <v-spacer></v-spacer>
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