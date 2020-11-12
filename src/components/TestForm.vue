<template>
  <v-form @submit.prevent="submit">
    <v-container>
      <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="ReservationNumber"
              :rules="nameRules"
              :counter="10"
              label="Reservation Number"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="FlightNumber"
              :rules="nameRules"
              :counter="10"
              label="Flight Number"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="Day"
              :rules="nameRules"
              label="Date"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="From"
              :rules="nameRules"
              :counter="10"
              label="Departure City"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="DepartureTime"
              :rules="nameRules"
              :counter="10"
              label="Departure Time"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="To"
              :rules="nameRules"
              :counter="10"
              label="Arrival City"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="ArrivalTime"
              :rules="nameRules"
              :counter="10"
              label="Arrival Time"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >


        <v-btn color="green" type="submit">Submit</v-btn>
          </v-col>
        </v-row>

    </v-container>
  </v-form>
</template>

<script>
export default {
    data(){
        return {
        FlightNumber:null,
        email:null,
        lastname:null,
        }
    },
    methods:{
    submit(){
        console.log('Flight is ' + this.FlightNumber)
        //Look at useradmin branch for how to bring this to backend look at vscode for download
    }
    }
}
</script>