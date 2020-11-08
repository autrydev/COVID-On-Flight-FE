<template>
  <v-top-navigation
    :value="value"
    color="primary"
  >
    <v-container fluid>
        <v-flex xs12 class="text-xl-center" mt-5>
            <v-btn to="/dashboard"  x-large outlined> Dashboard<v-icon>mdi-history</v-icon></v-btn>
            <v-btn class="white--text" color="#2962FF" elevation="5" to="/covid19informaion" x-large>COVID-19 Information<v-icon>mdi-heart</v-icon></v-btn>
            <v-btn to="/mycovidstatus" x-large outlined>My Covid Status<v-icon>mdi-alert</v-icon></v-btn>
            <v-btn to="/accountsettings" x-large outlined>Account Settings<v-icon>mdi-account-edit</v-icon></v-btn>
        </v-flex>
    </v-container>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12 class="text-xl-center" mt-5>
                <h1>User Dashboard</h1>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3 mt-3>
                <blockquote class="blockquote text-xs-center">
                    It's a basic Single Page application <br>
                    with Google Firebase authentication
                </blockquote>
            </v-flex>


        </v-layout>
    </v-container>


  </v-top-navigation>
</template>
<script>

  export default {

    data: () => ({
        valid: false,
        show1: false,
        show2: false,
        firstName: '',
        firstNameRules: {
            required: v => !!v || 'First namasdsade is required', /*If value is falsey (empty string), then output message*/
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
        }
        }),
    computed: {
        checkPasswords() {
            return this.password1 === this.password2 || 'Passwords must match';
        },
    }
  };
</script>

<style scoped>
#container {
}
#signup-card {
    width: min(50%, 500px);
    background-color: #FFFFFF;
}
#signup-form {
    margin-top: 5%;
    background-color: #FFFFFF;
    padding: 2em;
}
h1 {
    text-align: center;
    padding-bottom: 1em;
    color: rgb(219, 214, 214);
}
#names {
    padding-bottom: 0;
    margin-bottom: 0;
    height: 100px;
}
#first-name {
    padding-left: 0;
}
#last-name {
    padding-right: 0;
    padding-bottom: 0;
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
