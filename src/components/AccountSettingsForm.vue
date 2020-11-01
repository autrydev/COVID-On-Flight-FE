<template>
  <v-top-navigation
    :value="value"
    color="primary"
  >
    <v-btn elevation="5" x-large color="accent" >
        <span>Dashboard</span>

        <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn x-large outlined>
      <span>COVID-19 Information</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn x-large outlined>
      <span>My Covid Status</span>

      <v-icon>mdi-alert</v-icon>
    </v-btn>

    <v-btn x-large outlined>

      <span>Account Settings</span>
      <v-icon>mdi-account-edit</v-icon>


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
            <v-flex xs12 sm6 offset-sm2 class="text-xs-center" mt-5>
                <v-btn color="primary" to="/signup">Dashboard<v-icon>mdi-history</v-icon></v-btn>
                <v-btn to="/signin">Covid-19 Information<v-icon>mdi-heart</v-icon></v-btn>
                <v-btn to="/signup">My Covid Status <v-icon>mdi-alert</v-icon></v-btn>
                <v-btn to="/signin">Account Settings<v-icon>mdi-account-edit</v-icon></v-btn>
            </v-flex>

        </v-layout>
    </v-container>

    </v-btn>
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
