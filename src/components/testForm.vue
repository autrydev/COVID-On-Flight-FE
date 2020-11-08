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
            <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

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
        firstname:null,
        email:null,
        lastname:null,
        }
    },
    methods:{
    submit(){
        console.log('Email is ${this.email} and Name is ${this.firstname} and Surname is ${this.lastname}')
    }
    }
}
</script>