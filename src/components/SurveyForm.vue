<template>
    <v-container id="survey-component">
      <v-form ref="form">
        <ul id="survey-questions"> 
            <li v-for="(symptom, i) in symptoms" :key="i">
                <v-row>
                    <v-col>
                        {{ symptom.text }}
                    </v-col>
                        <v-radio-group
                        v-model="symptom.value"
                        row
                        >
                        <v-radio
                            :value="true"
                            label="Yes"
                        ></v-radio>
                        <v-radio
                            :value="false"
                            label="No"
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
import axios from 'axios'

export default {
  data: () => ({
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
    symptomVals: {
        fever_chills: null,
        cough: null,
        breathing_issues: null,
        fatigue: null,
        aches: null,
        headaches: null,
        loss_taste_smell: null,
        sore_throat: null,
        congestion: null ,
        nausea: null,
        diarrhea: null,
    }
  }),
  methods: {
    getSymptomValues() {
        let i = 0
        for(let symptom in this.symptomVals) {
            this.symptomVals[symptom] = this.symptoms[i].value
            i++
        }
    },
    updateCovidStatus() {
        this.getSymptomValues()
        if (this.validateForm()) {
            axios.post('/updatecovidstatus', {
                id: localStorage.user,
                symptoms: this.symptomVals,
            })
            .then(response => {
                console.log(response)
                window.location.reload()
            })
            .catch(e => {
                console.log(e)
            })
        }
        else {
            console.log('this is not filled')
        }
    },
    validateForm() {
        let valid = true;
        for(let symptom in this.symptomVals) {
            if(this.symptomVals[symptom] === null) {
                valid = false
                return valid
            }
        }
        return valid
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
