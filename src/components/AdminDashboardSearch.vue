<template> 
    <div>
        <v-container>
            <v-card class="flighttables">
                <v-data-table
                    :headers="headers"
                    :items="flights"
                    sort-by="date"
                    class="elevation-2"
                >
                    <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>Flights</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog
                        v-model="dialog"
                        max-width="500px"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            color="#2196f3"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            v-on="on"
                            >
                            Search for Flights
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                            <span class="headline">Search by Flight Details</span>
                            </v-card-title>

                            <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="12"
                                    >
                                        <v-text-field
                                        v-model="searchParameters.flight_id"
                                        label="Flight Number"
                                        clearable
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
                                            :return-value.sync="searchParameters.from_date"
                                            transition="scale-transition"
                                            offset-y
                                            min-width="290px"
                                          >
                                            <template v-slot:activator="{ on, attrs }">
                                              <v-text-field
                                                v-model="searchParameters.from_date"
                                                label="From Date"
                                                prepend-icon="mdi-calendar"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                                clearable
                                              ></v-text-field>
                                            </template>
                                            <v-date-picker
                                              v-model="searchParameters.from_date"
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
                                                @click="$refs.menu1.save(searchParameters.from_date)"
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
                                            :return-value.sync="searchParameters.to_date"
                                            transition="scale-transition"
                                            offset-y
                                            min-width="290px"
                                          >
                                            <template v-slot:activator="{ on, attrs }">
                                              <v-text-field
                                                v-model="searchParameters.to_date"
                                                label="To Date"
                                                prepend-icon="mdi-calendar"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                                clearable
                                              ></v-text-field>
                                            </template>
                                            <v-date-picker
                                              v-model="searchParameters.to_date"
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
                                                @click="$refs.menu2.save(searchParameters.to_date)"
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
                                        v-model="searchParameters.departure_city"
                                        label="Departure City"
                                        clearable
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="6"
                                    >
                                        <v-text-field
                                        v-model="searchParameters.arrival_city"
                                        label="Arrival City"
                                        clearable
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="12"
                                    >
                                        <v-card
                                            class="mx-auto"
                                            max-width="300"
                                            tile
                                          >
                                            <v-list dense>
                                              <v-subheader>COVID Status</v-subheader>
                                              <v-list-item-group
                                                v-model="covidOption"
                                                color="primary"
                                                mandatory
                                              >
                                                <v-list-item
                                                  v-for="(option, i) in covidOptions"
                                                  :key="i"
                                                >
                                                  <v-list-item-icon>
                                                    <v-icon v-text="option.icon"></v-icon>
                                                  </v-list-item-icon>
                                                  <v-list-item-content>
                                                    <v-list-item-title v-text="option.text"></v-list-item-title>
                                                  </v-list-item-content>
                                                </v-list-item>
                                              </v-list-item-group>
                                            </v-list>
                                          </v-card>
                                    </v-col>
                                </v-row>
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
                                @click="searchFlights()"
                                v-on:click="close"
                            >
                                Search
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                    </v-toolbar>
                    </template>
                </v-data-table>
            </v-card>
        </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        menu1: false,
        menu2: false,
        searchParameters: {
            from_date: null,
            to_date: null,
            departure_city: null,
            arrival_city: null,
            flight_id: null,
            covidStatus: null,
        },
        flights: [],
        covidOption: 2,
        covidOptions: [
          { text: 'Positive', icon: 'mdi-plus-circle'},
          { text: 'Negative', icon: 'mdi-minus-circle'},
          { text: 'Both', icon: 'mdi-expand-all'},
        ],
        dialog: false,
        dialogDelete: false,
        headers: [
            {
            text: 'Flight No.',
            align: 'start',
            sortable: false,
            value: 'flightID',
            },
            { text: 'Date', value: 'date' },
            { text: 'Departure City', value: 'departureCity' },
            { text: 'Arrival City', value: 'arrivalCity' },
            { text: 'COVID Count', value: 'covidCount' },
        ],
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
      formatOptions() {
          //Set the appropriate menu index to the desired value
          if(this.covidOption == 0) { this.searchParameters.covidStatus = true; }
          else if(this.covidOption == 1) { this.searchParameters.covidStatus = false}
          else {this.searchParameters.covidStatus = null}
          //Change empty strings to null
          if(this.searchParameters.from_date == '') { this.searchParameters.from_date = null }
          if(this.searchParameters.to_date == '') { this.searchParameters.to_date = null }
          if(this.searchParameters.departure_city == '') { this.searchParameters.departure_city = null }
          if(this.searchParameters.arrival_city == '') { this.searchParameters.arrival_city = null }
          if(this.searchParameters.flight_id == '') { this.searchParameters.flight_id = null }

      },
      searchFlights() {
        this.formatOptions()
        axios.post('/adminflightsearch', this.searchParameters)
            .then(response => {
                this.flights = response.data["flights"]
            })
            .catch(e => {
                console.log(e)
            })
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
    },
}
</script>

<style scoped>
#searchBtn {
    width: 100%;
}
</style>