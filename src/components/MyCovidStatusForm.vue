<template>
  <div id="container">
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
  </div>
</template>


<script>
  import axios from 'axios'
  export default {
    data: () => ({
      valid: false,
      currentStatus: "",
      lastUpdated: "",
      lastFlight: "",
    }),
    methods: {
      redirectToSurvey() {
          //router.push("/takesurvey");
      },
      fetchCOVIDInfo() {
          console.log(localStorage.user)
          axios.post('/covidstatus', {
              id: localStorage.user,
              requestType: "fetch"
          })
          .then(response => {
            // JSON responses are automatically parsed.
            console.log(response.data)
            this.currentStatus = response.data["covidstatus"]
            if(response.data["lastupdate"] == null) {
                 this.lastUpdated = "N/A"
            }
            else {
                this.lastUpdated = response.data["lastupdate"]
            }
            this.lastFlight = response.data["lastflight"]
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
  background-color: rgb(7, 61, 161);
}
</style>
