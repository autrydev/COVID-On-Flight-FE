<template>
    <v-container>
        <v-card class="flighttables">
            <v-data-table
                :items="symptoms"
                class="elevation-2"
            >
            </v-data-table>
        </v-card>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    valid: false,
    symptoms: [
        "Fever or chills",
        "Cough",
        "Shortness of breath or difficulty breathing",
        "Fatigue",
        "Muscle or body aches",
        "Headache",
        "Loss of taste or smell",
        "Sore throat",
        "Congestion or runny nose",
        "Nausea or vomiting",
        "Diarrhea",
    ],
  }),
  methods: {
    openForm() {
      this.responsive = true;
    },
    cancelChanges() {
      this.responsive = false;
      this.fetchAccountInfo();
    },
    updateCovidStatus() {
        if (this.$refs.form.validate() === true) {
            axios.post('/accountsettings', {
                id: localStorage.user,
                first_name: this.firstName,
                last_name: this.lastName,
                email: this.email,
                phone_number: this.phoneNumber,
            })
            .then(response => {
                this.firstName = response.data["firstName"]
                this.lastName = response.data["lastName"]
                this.email = response.data["email"]
                this.phoneNumber = response.data["phoneNumber"]
                window.location.reload()
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
  },
  beforeMount() {
    this.fetchAccountInfo()
  },
};
</script>

<style scoped>
</style>
