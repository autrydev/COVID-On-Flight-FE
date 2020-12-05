<template>
    <v-container>
        <h1>Hello {{ firstname }}!</h1>
        <v-card class="flighttables">
            <v-data-table
                :headers="headers"
                :items="future_flights"
                hide-default-footer
                dense
                class="elevation-1"
                no-data-text="No flights scheduled"
                sort-by="date"
            >
                <template v-slot:top>
                <v-toolbar
                    flat
                >
                    <v-toolbar-title> <h3>Future Flights</h3> </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-dialog
                    v-model="dialog"
                    max-width="500px"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        v-bind="attrs"
                        v-on="on"
                        >
                        Register Flight
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                        <span class="headline">Enter your flight information</span>
                        </v-card-title>

                        <v-card-text>
                        <v-container>
                            <v-form v-model="valid">
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="12"
                                    >
                                        <v-text-field
                                        v-model="flightInformation.reservation_number"
                                        label="Reservation Number"
                                        clearable
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="12"
                                    >
                                        <v-text-field
                                        v-model="flightInformation.flight_id"
                                        label="Flight Number"
                                        clearable
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="6"
                                    >
                                        <v-menu
                                            ref="menu1"
                                            v-model="menu1"
                                            :close-on-content-click="false"
                                            :return-value.sync="flightInformation.from_date"
                                            transition="scale-transition"
                                            offset-y
                                            min-width="290px"
                                            >
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                v-model="flightInformation.from_date"
                                                label="Departure Date"
                                                prepend-icon="mdi-calendar"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                                clearable
                                                required
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="flightInformation.from_date"
                                                no-title
                                                scrollable
                                            >
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                text
                                                color="primary"
                                                @click="menu = false"
                                                >
                                                Cancel
                                                </v-btn>
                                                <v-btn
                                                text
                                                color="primary"
                                                @click="$refs.menu1.save(flightInformation.from_date)"
                                                >
                                                OK
                                                </v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="6"
                                    >
                                        <v-menu
                                            ref="menu2"
                                            v-model="menu2"
                                            :close-on-content-click="false"
                                            :return-value.sync="flightInformation.to_date"
                                            transition="scale-transition"
                                            offset-y
                                            min-width="290px"
                                            >
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                v-model="flightInformation.to_date"
                                                label="Arrival Date"
                                                prepend-icon="mdi-calendar"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                                clearable
                                                required
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="flightInformation.to_date"
                                                no-title
                                                scrollable
                                            >
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                text
                                                color="primary"
                                                @click="menu = false"
                                                >
                                                Cancel
                                                </v-btn>
                                                <v-btn
                                                text
                                                color="primary"
                                                @click="$refs.menu2.save(flightInformation.to_date)"
                                                >
                                                OK
                                                </v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="6"
                                    >
                                        <v-text-field
                                        v-model="flightInformation.departure_city"
                                        label="Departure City"
                                        clearable
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="6"
                                    >
                                        <v-text-field
                                        v-model="flightInformation.arrival_city"
                                        label="Arrival City"
                                        clearable
                                        required
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-container>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="close"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="registerFlight()"
                            v-on:click="close"
                        >
                            Register
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-toolbar>
                </template>
            </v-data-table>
        </v-card>
        <v-card class="flighttables">
            <v-toolbar flat>
                <v-toolbar-title> <h3>Previous Flights</h3> </v-toolbar-title>
            </v-toolbar>
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
        valid: false,
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
        menu1: false,
        menu2: false,
        flightInformation: {
            reservation_number: null,
            flight_id: null,
            from_date: null,
            to_date: null,
            departure_city: null,
            arrival_city: null,
        },
        dialog: false,
        dialogDelete: false,
        requiredRule: {
            required: v => !!v || 'This field is required',
        },
    }),
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    methods: {
        fetchFlights () {
            axios.post('/dashboard', {
                id: localStorage.user
            })
            .then(response => {
            // JSON responses are automatically parsed.
                this.firstname = response.data.firstname
                this.prev_flights = response.data.prev_flights
                this.future_flights = response.data.future_flights
            })
            .catch(e => {
                console.log(e)
            })
        },
        registerFlight() {
            let data = Object.assign({}, this.flightInformation)
            data['id'] = localStorage.user
            this.clearForm()
            /*axios.post('/dashboard', data)
            .then(response => {
            // JSON responses are automatically parsed.
                this.clearForm()
                this.fetchFlights()
            })
            .catch(e => {
                console.log(e)
            })*/
        },
        close () {
            this.dialog = false
            this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            })
        },
        clearForm() {
            this.flightInformation.reservation_number = null
            this.flightInformation.flight_id = null
            this.flightInformation.from_date = null
            this.flightInformation.to_date = null
            this.flightInformation.departure_city = null
            this.flightInformation.arrival_city = null
        }
        
    },
    beforeMount() {
        this.fetchFlights();
    },
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