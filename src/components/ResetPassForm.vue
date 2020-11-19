<template>
    <div>
        <v-container id="resetpassform">
            <div>
                <h1>COVID On-Flight</h1>
            </div>
            <v-stepper v-model="reset_step">
                <v-stepper-header>
                    <v-stepper-step
                        :complete="reset_step > 1"
                        step="1"
                    >
                        Input Email
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step
                        :complete="reset_step > 2"
                        step="2"
                    >
                        Verify Code
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step step="3">
                        Reset Password
                    </v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                    <v-stepper-content step="1">
                        <v-container id="sendcodeform">
                            <div>
                                <h3>Forgot your password? Enter your email address and we'll email you a code to verify your account.</h3>
                            </div>
                            <v-form v-model="valid">
                                <v-row>
                                    <v-text-field
                                    v-model="email"
                                    :dark="false"
                                    :rules="emailRules"
                                    label="Email Address *"
                                    outlined
                                    required
                                    ></v-text-field>
                                </v-row>
                                <v-row id="status" v-if="reset_error">
                                    <v-col>
                                        <p id="reset-error">{{reset_error}}</p>
                                    </v-col>
                                </v-row>
                                <v-row>
                                <v-btn
                                v-on:click="sendcode"
                                :dark="false"
                                :disabled="!valid"
                                :loading="submitted"
                                id="btn-signin"
                                @click="validate"
                                >
                                EMAIL RESET CODE
                                </v-btn>
                                </v-row>
                                
                            </v-form>
                            
                        </v-container>
                    </v-stepper-content>

                    <v-stepper-content step="2">
                        <v-container id="inputcodeform">
                            <div>
                                <h3>Enter the code we sent to your email address</h3>
                            </div>
                            <v-form v-model="valid">
                                <v-row>
                                    <v-text-field
                                    v-model="code"
                                    :dark="false"
                                    :rules="codeRules"
                                    label="Code *"
                                    outlined
                                    required
                                    ></v-text-field>
                                </v-row>
                                <v-row id="status" v-if="reset_error">
                                    <v-col>
                                        <p id="reset-error">{{reset_error}}</p>
                                    </v-col>
                                </v-row>
                                <v-row>
                                <v-btn
                                v-on:click="sendcode"
                                :dark="false"
                                :disabled="!valid"
                                :loading="submitted"
                                id="btn-signin"
                                @click="validate"
                                >
                                EMAIL RESET CODE
                                </v-btn>
                                </v-row>
                            </v-form>
                        </v-container>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                        
                        Reset Password Form
                        
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
            <v-row>
                <v-col style="text-align:center;">
                    Or, <router-link to="/login">Try logging in again</router-link>
                </v-col>
            </v-row>
            <v-row id="copyright">
                                <v-col>
                                    <p>Copyright &#169; AwesomeBand 2020</p>
                                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<script>
import axios from 'axios'

export default {

    data: () => ({
        reset_step: 1,
        valid: false,
        show1: false,
        email: '',
        emailRules: [
        v => !!v || 'Email address is required',
        v => /.+@.+/.test(v) || 'Email address must be valid',
        ],
        reset_error: ''
    }),
    methods: {
        sendcode: function() {
            axios.post('/reset-code', {
                email: this.email
            })
            .then(response => {
                console.log(response)
            })
            .catch(e => {
                this.reset_error = 'Account does not exist with that email'
                console.log(e)
            })

            this.reset_step = 2
        }
    }
  };
</script>

<style scoped>
#resetpassform {
    margin-top: 5%;
    width: min(90%, 500px);
    /*background-color: #1c1e1f;*/
}
#sendcodeform {
    width: min(85%, 400px);
    /*background-color: #1c1e1f;*/
}
#inputcodeform {
    width: min(85%, 400px);
    /*background-color: #1c1e1f;*/
}
#status{
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    text-align: center;
}
#reset-error {
    color: #f44336;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
}
h1 {
    text-align: center;
    /*color:rgb(219, 214, 214);*/
    color: rgb(20, 19, 19);
    padding-bottom: 1em;
}
h3 {
    text-align: center;
    color: gray;
    padding-bottom: 1em;
}
#btn-signin {
    width: 100%;
    height: 4em;
    margin-bottom: 1em;
    background-color: #073da1;
    color:white;
}
p {
    padding-top: 5em;
    /*color: rgb(219, 214, 214);*/
    color: rgb(20, 19, 19)
}
#copyright {
    text-align: center;
}
</style>