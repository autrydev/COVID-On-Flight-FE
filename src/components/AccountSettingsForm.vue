<template>
  <div id="container">
    <v-container id="account-settings">
      <v-form v-model="valid" :disabled="!responsive" ref="form">
        <v-row>
          <v-col cols="4">
            <v-subheader :dark="true" class="prefix">First Name</v-subheader>
          </v-col>
          <v-col cols="6" class="text-box">
            <v-text-field
              v-model="firstName"
              :dark="true"
              placeholder="FETCH_FIRST_NAME"
              outlined
              :required="responsive"
              :rules="[firstNameRules.required]"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-subheader :dark="true" class="prefix">Last Name</v-subheader>
          </v-col>
          <v-col cols="6" class="text-box">
            <v-text-field
              v-model="lastName"
              :dark="true"
              placeholder="FETCH_LAST_NAME"
              outlined
              :required="responsive"
              :rules="[lastNameRules.required]"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-subheader :dark="true" class="prefix">Email Address</v-subheader>
          </v-col>
          <v-col cols="6" class="text-box">
            <v-text-field
              v-model="email"
              :dark="true"
              placeholder="FETCH_EMAIL"
              outlined
              :required="responsive"
              :rules="[emailRules.required, emailRules.valid]"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-subheader :dark="true" class="prefix">Phone Number</v-subheader>
          </v-col>
          <v-col cols="6" class="text-box">
            <v-text-field
              v-model="phoneNumber"
              :dark="true"
              placeholder="FETCH_NUMBER"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-show="!responsive">
          <v-col>
            <v-btn :dark="true" id="change-settings" @click="openForm()"
              >Update Settings</v-btn
            >
          </v-col>
        </v-row>
        <v-row v-show="responsive">
          <v-col>
            <v-btn :dark="true" id="update-settings" @click="updateSettings()"
              >Save changes</v-btn
            >
          </v-col>
          <v-col>
            <v-btn :dark="true" id="cancel-settings" @click="cancelChanges()"
              >Cancel changes</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    responsive: false,
    valid: false,
    show1: false,
    show2: false,
    firstName: "",
    firstNameRules: {
      required: (v) =>
        !!v ||
        "First name is required" /*If value is falsey (empty string), then output message*/,
    },
    lastName: "",
    lastNameRules: {
      required: (v) => !!v || "Last name is required",
    },
    email: "",
    emailRules: {
      required: (v) => !!v || "Email address is required",
      valid: (v) => /.+@.+/.test(v) || "Email address must be valid",
    },
    phoneNumber: "",
  }),
  methods: {
    openForm() {
      this.responsive = true;
    },
    updateSettings() {
      if (this.$refs.form.validate() === true) {
        this.responsive = false;
        //submit changes
      }
    },
    cancelChanges() {
      this.responsive = false;
      this.$refs.form.reset();
    },
    checkPasswords() {
      return this.password1 === this.password2 || "Passwords must match";
    },
  },
};
</script>

<style scoped>
#account-settings {
  margin-top: 5%;
  background-color: #1c1e1f;
  width: min(50%, 500px);
}
#change-settings {
  width: 100%;
  height: 4em;
  margin-bottom: 1em;
  background-color: rgb(7, 61, 161);
}
#update-settings {
  width: 100%;
  height: 4em;
  margin-bottom: 1em;
  background-color: #006600;
}
#cancel-settings {
  width: 100%;
  height: 4em;
  margin-bottom: 1em;
  background-color: rgb(141, 16, 16);
}
</style>
