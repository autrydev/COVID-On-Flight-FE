<template>
  <div class="home">
    <HelloWorld msg="Welcome to COVID On-Flight"/>
    <v-row> <router-link to="/login">Login</router-link> </v-row>
    <v-row> <router-link to="/signup">Sign up</router-link> </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
