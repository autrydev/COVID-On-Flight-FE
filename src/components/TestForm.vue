<template>
  <v-form>
    <v-container>
      <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="reservationNumber"
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
              v-model="flightNumber"
              :counter="10"
              label="Flight Number"
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
              v-model="departureCity"
              :counter="10"
              label="Departure City"
              required
            ></v-text-field>
          </v-col>
          <v-col>
          <v-text-field
              v-model="departureDate"
              label="Departure Date"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="departureTime"
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
              v-model="arrivalCity"
              :counter="10"
              label="Arrival City"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
                v-model="arrivalDate"
                label="Arrival Date"
                required
              ></v-text-field>
            </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="arrivalTime"
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


        <v-btn color="green" type="submit" @click="registerFlight()">Submit</v-btn>
          </v-col>
        </v-row>

    </v-container>
  </v-form>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
    data(){
        return {
        reservationNumber: null,
        flightNumber: null,
        departureCity: null,
        departureDate: null,
        departureTime: null,
        arrivalCity: null,
        arrivalDate: null,
        arrivalTime: null,
        }
    },
    methods:{
      registerFlight(){
          console.log('Flight is ' + this.flightNumber)
          //Look at useradmin branch for how to bring this to backend look at vscode for download
          axios.post('/dashboard', {
              reservation_number: this.reservationNumber,
              flight_number: this.flightNumber,
              departure_city: this.departureCity,
              departure_date: this.departureDate,
              departure_time: this.departureTime,
              arrival_city: this.arrivalCity,
              arrival_date: this.arrivalDate,
              arrival_time: this.arrivalTime,
          })
          .then(response => {
              // JSON responses are automatically parsed.
              if(response.status == 200) {
                  router.push('dashboard');
                }
          })
          .catch(e => {
              console.log(e);
          })
      }
    }
}
</script>