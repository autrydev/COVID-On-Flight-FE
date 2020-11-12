<template>

 <v-toolbar color = "indigo" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title class="white--text">Account Settings</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn to="/dashboard" x-large outlined>Dashboard<v-icon>mdi-history</v-icon></v-btn>
    <v-btn to="/covid19informaion" x-large outlined> COVID-19 Information<v-icon>mdi-heart</v-icon></v-btn>
    <v-btn to="/mycovidstatus" x-large outlined>My Covid Status<v-icon>mdi-alert</v-icon></v-btn>
    <v-btn to="/accountsettings" x-large outlined >Account Settings<v-icon>mdi-dots-vertical</v-icon></v-btn>
  </v-toolbar>
</template>