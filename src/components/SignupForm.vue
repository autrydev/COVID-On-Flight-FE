<template>
    <div>
        <v-container id="signupform">
            <div>
                <h1>COVID On-Flight</h1>
            </div>
            <v-form v-model="valid">
                <v-row>
                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email Address *"
                    outlined
                    required
                    ></v-text-field>
                </v-row>
                <v-row>
                    <v-text-field
                    v-model="password"
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
                    <router-link to="/signup-u">Don't have an account? Sign Up</router-link>
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
#signupform {
    margin-top: 10%;
    width: min(50%, 500px);
}
h1 {
    text-align: center;
    padding-bottom: 1em;
}
.btn-signin {
    width: 100%;
}
p {
    padding-top: 5em;
}
#copyright {
    text-align: center;
}
</style>