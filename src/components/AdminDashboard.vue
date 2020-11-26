<template>
    <div class="text-center">
        <v-row>
            <v-col>
                <v-card id="positivecard">
                    <h1> {{ positivecount }} </h1>
                    <p> Positive Cases </p>
                </v-card>
            </v-col>
            <v-col>
                <v-card id="negativecard">
                    <h1> {{ negativecount }} </h1>
                    <p> Negative Cases </p>
                </v-card>
            </v-col>
            <v-col>
                <v-card id="unknowncard">
                    <h1>{{ unknowncount }}</h1>
                    <p>Unknown Cases</p>
                </v-card>
            </v-col>
        </v-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        positivecount: 0,
        negativecount: 0,
        unknowncount: 0
    }),

    created() {
        axios.get('/admindashboard', {})
            .then(response => {
                console.log(response.status)
                this.positivecount = response.data.Positive
                this.negativecount = response.data.Negative
                this.unknowncount = response.data.Unknown
            })
            .catch(e => {
                console.log(e)
            })
    }
}
</script>

<style scoped>
#positivecard {
    background-color: rgba(255, 0, 0, 0.8);
    color: white;
    width: 50%;
    margin-left: 25%;
}
#negativecard {
    background-color: rgba(0, 0, 255, 0.8);
    color: white;
    width: 50%;
    margin-left: 25%;
}
#unknowncard {
    background-color: gray;
    color: white;
    width: 50%;
    margin-left: 25%;
}
</style>