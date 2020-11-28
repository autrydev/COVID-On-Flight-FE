<template> 
    <div>
        <v-container>
            <v-card class="flighttables">
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    sort-by="calories"
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
                            color="primary"
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
                            <span class="headline">Search by flight information</span>
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
                                                label="Departure Date"
                                                prepend-icon="mdi-calendar"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
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
                                                label="Arrival Date"
                                                prepend-icon="mdi-calendar"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
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
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="6"
                                    >
                                        <v-text-field
                                        v-model="searchParameters.departureTime"
                                        label="Departure Time"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="6"
                                    >
                                        <v-text-field
                                        v-model="searchParameters.arrivalTime"
                                        label="Arrival Time"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="12"
                                    >
                                        <v-checkbox
                                        v-model="searchParameters.covidStatus"
                                        :label="'Covid Status: ' + covidCheckbox()"
                                        ></v-checkbox>
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
                            >
                                Search
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                        <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                            <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                    </v-toolbar>
                    </template>
                    <template v-slot:item.actions="{ item }">
                    <v-icon
                        small
                        class="mr-2"
                        @click="editItem(item)"
                    >
                        mdi-pencil
                    </v-icon>
                    <v-icon
                        small
                        @click="deleteItem(item)"
                    >
                        mdi-delete
                    </v-icon>
                    </template>
                    <template v-slot:no-data>
                        Search for flights!
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
            departureTime: null,
            arrivalTime: null,
            covidStatus: false,
        },
        searchResults: {
            totalFlights: null,
            flights: null,
        },
        dialog: false,
        dialogDelete: false,
        headers: [
            {
            text: 'Flight No.',
            align: 'start',
            sortable: false,
            value: 'name',
            },
            { text: 'Date', value: 'calories', sortable: false },
            { text: 'Departure City', value: 'fat', sortable: false },
            { text: 'Arrival City', value: 'carbs', sortable: false },
            { text: 'COVID STATUS', value: 'protein' },
            { text: 'Actions', value: 'actions' },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
        },
        defaultItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
        },
    }),
    created() {
        this.initialize();
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    methods: {
      covidCheckbox() {
        return (this.searchParameters.covidStatus ? "Positive" : "Negative")
      },
      searchFlights() {
        axios.post('/adminflightsearch', this.searchParameters)
            /*console.log(this.searchParameters.flight_id)
            console.log(this.searchParameters.from_date)
            console.log(this.searchParameters.to_date)
            console.log(this.searchParameters.departure_city)
            console.log(this.searchParameters.arrival_city)
            console.log(this.searchParameters.departureTime)
            console.log(this.searchParameters.arrivalTime)
            console.log(this.searchParameters.covidStatus)*/
            .then(response => {
                console.log(response.data)
                this.searchResults.totalFlights = response.data["count"]
                this.searchResults.flights = response.data["flights"]
                this.initializeFlights()
            })
            .catch(e => {
                console.log(e)
            })
      },
      initializeFlights() {
          
      },
      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
          },
        ]
      },
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
}
</script>

<style scoped>
#searchBtn {
    width: 100%;
}
</style>