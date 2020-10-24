<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email Address"
                outlined
                required
                ></v-text-field>
            </v-row>
            <v-row>
                <v-text-field
                v-model="password"
                :rules="passRules"
                label="Password"
                outlined
                required
                ></v-text-field>
            </v-row>
            <v-btn
            :disabled="!valid"
            class="mr-4"
            @click="validate"
            >
            SIGN IN
            </v-btn>
        </v-container>
    </v-form>
</template>

<script>

  export default {

    data: () => ({
      valid: false,
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
</style>