<template>
<v-card>
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
</v-card>
</template>

<script>
import axios from 'axios'
import router from '../router'

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
  }),
  methods: {
    updateCovidStatus() {
        let data = {
            id: localStorage.user,
            fever_chills: this.symptoms[0].value,
            cough: this.symptoms[1].value,
            breathing_issues: this.symptoms[2].value,
            fatigue: this.symptoms[3].value,
            aches: this.symptoms[4].value,
            headache: this.symptoms[5].value,
            loss_taste_smell: this.symptoms[6].value,
            sore_throat: this.symptoms[7].value,
            congestion: this.symptoms[8].value,
            nausea: this.symptoms[9].value,
            diarrhea: this.symptoms[10].value,
        }  
        if (this.validateForm()) {
            axios.post('/updatecovidstatus', data)
            .then(response => {
                console.log(response)
                router.push('mycovidstatus')
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
        for(let i in this.symptoms) {
            if(this.symptoms[i].value === null) {
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
    #survey-questions {
        list-style-type: none;
    }
    #survey-component {
        margin-top: 10px;
        width: min(50%, 500px);
    }
    #update-symptoms {
        width: 100%;
        height: 4em;
        margin-bottom: 1em;
        background-color: #2196f3;
    }
</style>
