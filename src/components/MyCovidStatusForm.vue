<template>
  <div id="container">
    <v-container id="status-form">
      <v-form v-model="valid" :readonly="true" ref="form">
        <v-row>
          <v-col cols="4">
            <v-subheader :dark="true" class="prefix">Current Status</v-subheader>
          </v-col>
          <v-col cols="6" class="text-box">
            <v-text-field
              v-model="currentStatus"
              :dark="true"
              placeholder="FETCH_CURRENT_STATUS"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-subheader :dark="true" class="prefix">Date Last Updated</v-subheader>
          </v-col>
          <v-col cols="6" class="text-box">
            <v-text-field
              v-model="date_lastUpdate"
              :dark="true"
              placeholder="FETCH_LAST_NAME"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-subheader :dark="true" class="prefix">Date Last Flight</v-subheader>
          </v-col>
          <v-col cols="6" class="text-box">
            <v-text-field
              v-model="date_lastFlight"
              :dark="true"
              placeholder="FETCH_EMAIL"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn :dark="true" id="update-status" @click="redirect()">Update My Status</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>


<script>

  export default {

    data: () => ({
        valid: false,
    }),
    methods: {
        redirect() {
            //router.push("/takesurvey");
        }
    }
  };
</script>

<style scoped>
#status-form {
  margin-top: 5%;
  background-color: #1c1e1f;
  width: min(50%, 500px);
}
#update-status {
  width: 100%;
  height: 4em;
  margin-bottom: 1em;
  background-color: rgb(7, 61, 161);
}
</style>
