<template>
    <v-container id="survey-component">
      <v-form v-model="valid" ref="form">
        <ul id="survey-questions"> 
            <li v-for="(symptom, i) in symptoms" :key="i">
                <v-row>
                    <v-col
                    >
                        {{ symptom.text }}
                    </v-col>
                        <v-radio-group
                        v-model="row"
                        row
                        mandatory
                        >
                        <v-radio
                            label="Yes"
                            value=""
                        ></v-radio>
                        <v-radio
                            label="No"
                            value=""
                        ></v-radio>
                        </v-radio-group>
                </v-row>
            </li>
        </ul>
        <v-row>
          <v-col>
            <v-btn :dark="true" id="update-symptoms" @click="updateCovidStatus()"
              >Update Symptoms</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
    </v-container>
</template>

<script>
//import axios from 'axios'

export default {
  data: () => ({
    valid: false,
    symptoms: [
        { text: "Fever or chills", value: null },
        { text: "Cough", value: null },
        { text: "Shortness of breath or difficulty breathing", value: null },
        { text: "Fatigue", value: null },
        { text: "Muscle or body aches", value: null },
        { text: "Headache", value: null },
        { text: "Loss of taste or smell", value: null },
        { text: "Sore throat", value: null },
        { text: "Congestion or runny nose", value: null },
        { text: "Nausea or vomiting", value: null },
        { text: "Diarrhea", value: null },
    ],
  }),
  methods: {
    updateCovidStatus() {
        /*if (this.$refs.form.validate() === true) {
            axios.post('/updatecovidstatus', {
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
        }*/
    }
  },
};
</script>

<style scoped>
    #survey-card {
    }
    #survey-questions {
        list-style-type: none;
    }
    #survey-component {
        margin-top: 5%;
        width: min(50%, 500px);
    }
    #update-symptoms {
        width: 100%;
        height: 4em;
        margin-bottom: 1em;
        background-color: #006600;
    }
</style>
