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
                <v-row>
                <v-btn
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
      ]
    }),
  };
</script>

<style scoped>
#loginform {
    margin-top: 10%;
    width: min(90%, 500px);
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