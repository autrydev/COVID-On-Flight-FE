<template>
  <div id="container">
    <v-card>
    <v-container id="status-form">
      <v-form v-model="valid" :readonly="true" ref="form">
        <v-row>
          <v-col cols="4">
            <v-subheader :dark="false" class="prefix">Current Status</v-subheader>
          </v-col>
          <v-col cols="6" class="text-box">
            <v-text-field
              v-model="currentStatus"
              :dark="false"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-subheader :dark="false" class="prefix">Date Last Updated</v-subheader>
          </v-col>
          <v-col cols="6" class="text-box">
            <v-text-field
              v-model="lastUpdated"
              :dark="false"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-subheader :dark="false" class="prefix">Date Last Flight</v-subheader>
          </v-col>
          <v-col cols="6" class="text-box">
            <v-text-field
              v-model="lastFlight"
              :dark="false"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn :dark="true" id="update-status" @click="redirectToSurvey()">Update My Status</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
    </v-card>
  </div>
</template>


<script>
  import axios from 'axios'
  import router from '../router'
  
  export default {
    data: () => ({
      valid: false,
      currentStatus: "",
      lastUpdated: "",
      lastFlight: "",
    }),
    methods: {
      redirectToSurvey() {
          router.push("/survey");
      },
      fetchCOVIDInfo() {
          axios.post('/covidstatus', {
              id: localStorage.user,
          })
          .then(response => {
            // JSON responses are automatically parsed.
            this.currentStatus = response.data["covidstatus"]
            if(response.data["lastupdate"] == null || response.data["lastupdate"] == "" || response.data["lastupdate"] == "None") 
                { this.lastUpdated = "N/A" }
            else { this.lastUpdated = response.data["lastupdate"] }
            
            if(response.data["lastflight"] == null || response.data["lastflight"] == "" || response.data["lastflight"] == "None")
                { this.lastFlight = "N/A" }
            else { this.lastFlight = response.data["lastflight"] }
          })
          .catch(e => {
              console.log(e)
          })
      }
    },
    beforeMount() {
      this.fetchCOVIDInfo();
    }
  };
</script>

<style scoped>
#status-form {
  margin-top: 5%;
  width: min(50%, 500px);
}
#update-status {
  width: 100%;
  height: 4em;
  margin-bottom: 1em;
  background-color: #2196f3;
}
</style>
