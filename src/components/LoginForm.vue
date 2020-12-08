<template>
    <div>
        <v-container id="loginform">
            <div>
                <h1>COVID On Flight</h1>
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
                    @keydown.enter="login"
                    ></v-text-field>
                </v-row>
                <v-row>
                    <v-text-field
                    v-model="password"
                    :dark="false"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="passRules"
                    :type="show1 ? 'text' : 'password'"
                    label="Password *"
                    outlined
                    required
                    @click:append="show1 = !show1"
                    @keydown.enter="login"
                    ></v-text-field>
                </v-row>
                <v-row id="status" v-if="login_error">
                    <v-col>
                        <p id="loginmessage">{{login_message}}</p>
                    </v-col>
                </v-row>
                <v-row>
                <v-btn
                v-on:click="login"
                :dark="false"
                :disabled="!valid"
                :loading="submitted"
                id="btn-signin"
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
                    <p>Copyright &#169; AwesomeBand {{ new Date().getFullYear() }}</p>
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
        login_error: false,
        submitted: false,
    }),

    created () {
        localStorage.clear()
    },

    methods: {
        login: function() {
            this.submitted = true;
            axios.post('/login', {
                email: this.email,
                password: this.password
            })
            .then(response => {
            // JSON responses are automatically parsed.
            console.log(response.status)
                localStorage.user = response.data.id
                localStorage.admin = response.data.staff_status
                router.push('dashboard')
            })
            .catch(e => {
                console.log(e)
                this.login_message = 'Invalid Email/Password'
                this.login_error = true;
                this.submitted = false;
            })
        }
    }
  };
</script>

<style scoped>
#loginform {
    margin-top: 10%;
    width: min(90%, 500px);
    /*background-color: #1c1e1f;*/
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
    /*color:rgb(219, 214, 214);*/
    color: rgb(20, 19, 19)
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