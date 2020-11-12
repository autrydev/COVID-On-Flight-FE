<template>
    <div id="container">
            <v-container id="signup-form">
                <div>
                    <h1>COVID On-Flight</h1>
                </div>
                <v-form v-model="valid">
                    <v-row v-show="signup_error"> <!--only show if error status 401 returned-->
                        <p id="signup-error-message">{{signup_error_message}}</p>
                    </v-row>
                    <v-row id="names">
                        <v-col id="first-name">
                            <v-text-field
                            v-model="firstName"
                            :rules="[firstNameRules.required]"
                            :dark="true"
                            label="First Name *"
                            outlined
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col id="last-name">
                            <v-text-field
                            v-model="lastName"
                            :rules="[lastNameRules.required]"
                            :dark="true"
                            label="Last Name *"
                            outlined
                            required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="text-field">
                        <v-text-field
                        v-model="email"
                        :rules="[emailRules.required, emailRules.valid]"
                        :dark="true"
                        label="Email Address *"
                        outlined
                        required
                        ></v-text-field>
                    </v-row>
                    <v-row class="text-field">
                        <v-text-field
                        v-model="password1"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[pass1Rules.required]"
                        :type="show1 ? 'text' : 'password'"
                        :dark="true"
                        label="Password *"
                        outlined
                        required
                        @click:append="show1 = !show1"
                        ></v-text-field>
                    </v-row>
                    <v-row class="text-field">
                        <v-text-field
                        v-model="password2"
                        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[pass2Rules.required, checkPasswords]"
                        :type="show2 ? 'text' : 'password'"
                        :dark="true"
                        label="Retype Password *"
                        outlined
                        required
                        @click:append="show2 = !show2"
                        ></v-text-field>
                    </v-row>
                    <v-row>
                    <v-btn
                    :dark = true
                    :disabled="!valid"
                    :loading="submitted"
                    id="btn-signup"
                    @click="validate"
                    v-on:click="signup"
                    >
                    SIGN UP
                    </v-btn>
                    </v-row>
                    <v-row>
                        <v-col>
                        <router-link to="/forgot-password" class="link">Forgot Password?</router-link>
                        </v-col>
                        <v-col cols=auto>
                        <router-link to="/login" class="link">Already have an account? Sign in</router-link>
                        </v-col>
                    </v-row>
                </v-form>
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
  import router from '../router'

  export default {

    data: () => ({
        valid: false,
        show1: false,
        show2: false,
        firstName: '',
        firstNameRules: {
            required: v => !!v || 'First name is required', /*If value is falsey (empty string), then output message*/
        },
        lastName: '',
        lastNameRules: {
            required: v => !!v || 'Last name is required',
        },
        email: '',
        emailRules: {
            required: v => !!v || 'Email address is required',
            valid: v => /.+@.+/.test(v) || 'Email address must be valid',
        },
        password1: '',
        pass1Rules: {
            required: v => !!v || 'Password is required',
        },
        password2: '',
        pass2Rules: {
            required: v => !!v || 'Retyping your password is required',
        },
        phoneNumber: '',
        signup_error_message: "A user with that email already exists",
        signup_error: false,
        submitted: false,
    }),
    methods: {
        checkPasswords() {
            return this.password1 === this.password2 || 'Passwords must match';
        },
        signup() {
            this.submitted = true;
            axios.post('/signup', {
                email: this.email,
                password: this.password1,
                first_name: this.firstName,
                last_name: this.lastName,
                phone_number: this.phoneNumber
            })
            .then(response => {
                // JSON responses are automatically parsed.
                if(response.status == 200) {
                    router.push('login');
                }
            })
            .catch(e => {
                console.log(e);
                this.signup_error = true;
                this.submitted = false;
            })
        }
    }
  };
</script>

<style scoped>

#signup-form {
    margin-top: 5%;
    background-color: #1c1e1f;
    width: min(50%, 500px);
}
#signup-error-message {
    color: #f44336;
    margin-top: 0px;
    margin-left: 7.5em;
    padding-top: 0px;
    padding-bottom: 0px;
}
h1 {
    text-align: center;
    padding-bottom: 1em;
    color: rgb(219, 214, 214);
}
.text-field {
    padding: 0 0.5em;
}
#names {
    padding-bottom: 0;
    margin-bottom: 0;
    height: 100px;
}
#first-name {
    padding-left: 0.5em;
}
#last-name {
    padding-right: 0.5em;
}
#btn-signup {
    width: 100%;
    height: 4em;
    margin-bottom: 1em;
    background-color: rgb(255, 136, 0);
}
p {
    padding-top: 5em;
    color: rgb(219, 214, 214);
}
#copyright {
    text-align: center;
}
.link {
    text-decoration: none;
}
</style>