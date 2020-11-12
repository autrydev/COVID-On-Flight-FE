<template>
    <div>
        <v-container id="loginform">
            <div>
                <h1>COVID On-Flight</h1>
            </div>
            <v-form v-model="valid">
                <v-row>
                    <v-text-field
                    v-model="email"
                    :dark = true
                    :rules="emailRules"
                    label="Email Address *"
                    outlined
                    required
                    ></v-text-field>
                </v-row>
                <v-row>
                    <v-text-field
                    v-model="password"
                    :dark = true
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="passRules"
                    :type="show1 ? 'text' : 'password'"
                    label="Password *"
                    outlined
                    required
                    @click:append="show1 = !show1"
                    ></v-text-field>
                </v-row>
                <v-row id="status" v-if="logged_in">
                    <v-col>
                        <p id="loginmessage">{{login_message}}</p>
                    </v-col>
                </v-row>
                <v-row>
                <v-btn to="/dashboard"
                v-on:click="login"
                :dark = true
                :disabled="!valid"
                class="btn-signin"
                @click="validate"
                >
                SIGN IN
                </v-btn>
                </v-row>
                <v-row>
                    <v-col>
                    <router-link to="/forgot-password">Forgot Password?</router-link>
                    </v-col>
                    <v-col cols=auto>
                    <router-link to="/signup">Don't have an account? Sign Up</router-link>
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
        email: '',
        emailRules: [
        v => !!v || 'Email address is required',
        v => /.+@.+/.test(v) || 'Email address must be valid',
        ],
        password: '',
        passRules: [
            v => !!v || 'Password is required',
        ],
        login_message: 'Not Logged In',
        logged_in: false
    }),
    methods: {
        login: function() {
            console.log(this.email)
            console.log(this.password)
            axios.post('/login', {
                email: this.email,
                password: this.password
            })
            .then(response => {
            // JSON responses are automatically parsed.
            console.log(response.data)
            if(response.data == "Valid User")
            {
                localStorage.user = response.data
                router.push('dashboard')
            }
            else
                this.login_message = response.data
            this.logged_in = true
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
  };
</script>

<style scoped>
#loginform {
    margin-top: 10%;
    width: min(90%, 500px);
    background-color: #1c1e1f;
}
#status{
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    text-align: center;
}
#loginmessage {
    color: #f44336;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
}
h1 {
    text-align: center;
    padding-bottom: 1em;
    color:rgb(219, 214, 214);
}
.btn-signin {
    width: 100%;
    height: 4em;
    min-height: 4em;
    margin-bottom: 1em;
    background-color: #1976d2;
    outline-color: goldenrod;
}
p {
    padding-top: 5em;
    color: rgb(219, 214, 214);
}
#copyright {
    text-align: center;
}
</style>