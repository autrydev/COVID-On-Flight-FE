<template>
  
  <v-app>
    <!-- Sizes your content based upon application components -->
    <v-main class="main">

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.main {
  background-color: rgb(255, 255, 255);
}

</style>
