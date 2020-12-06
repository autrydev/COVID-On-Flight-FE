<template>
    <v-container>
        <h1>Hello {{ firstname }}!</h1>

        <v-alert v-if="update_status"
            prominent
            type="error"
            >
            <v-row align="center">
                <v-col class="grow">
                You have not recently updated your COVID Status. Please update it immediately!
                </v-col>
                <v-col class="shrink">
                <v-btn>Update COVID Status</v-btn>
                </v-col>
            </v-row>
            </v-alert>

        <v-card class="flighttables">
            <h2> Future Flights </h2>
            <v-data-table
            :headers="headers"
            :items="future_flights"
            hide-default-footer
            dense
            class="elevation-1"
            no-data-text="No flights scheduled"
            ></v-data-table>
        </v-card>
        <v-card class="flighttables">
            <h2> Previous Flights </h2>
            <v-data-table
            :headers="headers"
            :items="prev_flights"
            hide-default-footer
            dense
            class="elevation-1"
            no-data-text="No flights taken"
            ></v-data-table>
        </v-card>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        headers: [
          {
            text: 'Flight No.',
            align: 'start',
            sortable: false,
            value: 'flight_id',
          },
          { text: 'Date', value: 'date' },
          { text: 'Departure City', value: 'departure_city' },
          { text: 'Arrival City', value: 'arrival_city' },
          { text: 'COVID Status', value: 'status' },
        ],
        prev_flights: [],
        future_flights: [],
        update_status: false
    }),

    created () {
        axios.post('/dashboard', {
            id: localStorage.user
        })
        .then(response => {
        // JSON responses are automatically parsed.
        console.log(response.status)
            this.firstname = response.data.firstname
            this.prev_flights = response.data.prev_flights
            this.future_flights = response.data.future_flights
            this.update_status = response.data.update_status
        })
        .catch(e => {
            console.log(e)
        })
    }
}
</script>

<style scoped>
h1 {
    color: black;
    padding-left: 2%;
}
h2 {
    color: black;
    padding-left: 20px;
    padding-top: 10px;
}
.flighttables {
    margin-top: 30px;
}
</style>