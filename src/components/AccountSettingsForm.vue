<template>
  <div id="container">
    <v-container id="account-settings">
      <v-form v-model="valid" :readonly="!responsive" ref="form">
        <v-row>
          <v-col cols="4">
            <v-subheader :dark="false" class="prefix">First Name</v-subheader>
          </v-col>
          <v-col cols="6" class="text-box">
            <v-text-field
              v-model="firstName"
              :dark="false"
              outlined
              :required="responsive"
              :rules="[firstNameRules.required]"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-subheader :dark="false" class="prefix">Last Name</v-subheader>
          </v-col>
          <v-col cols="6" class="text-box">
            <v-text-field
              v-model="lastName"
              :dark="false"
              outlined
              :required="responsive"
              :rules="[lastNameRules.required]"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-subheader :dark="false" class="prefix">Email Address</v-subheader>
          </v-col>
          <v-col cols="6" class="text-box">
            <v-text-field
              v-model="email"
              :dark="false"
              outlined
              :required="responsive"
              :rules="[emailRules.required, emailRules.valid]"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-subheader :dark="false" class="prefix">Phone Number</v-subheader>
          </v-col>
          <v-col cols="6" class="text-box">
            <v-text-field
              v-model="phoneNumber"
              :dark="false"
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
            <v-btn :dark="true" id="update-settings" @click="updateAccountInfo()"
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
import axios from 'axios'

export default {
  data: () => ({
    responsive: false,
    valid: false,
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
    cancelChanges() {
      this.responsive = false;
      this.fetchAccountInfo();
    },
    checkPasswords() {
      return this.password1 === this.password2 || "Passwords must match";
    },
    fetchAccountInfo() {
      axios.post('/accountsettings', {
            id: localStorage.user,
            })
            .then(response => {
              // JSON responses are automatically parsed.
              this.firstName = response.data["firstName"]
              this.lastName = response.data["lastName"]
              this.email = response.data["email"]
              this.phoneNumber = response.data["phoneNumber"]
            })
            .catch(e => {
                console.log(e)
            })
    },
    updateAccountInfo() {
      if (this.$refs.form.validate() === true) {
          this.responsive = false;
          axios.post('/accountsettings', {
              id: localStorage.user,
              first_name: this.firstName,
              last_name: this.lastName,
              email: this.email,
              phone_number: this.phoneNumber,
          })
          .then(response => {
              this.firstName = response.data["firstName"]
              this.lastName = response.data["lastName"]
              this.email = response.data["email"]
              this.phoneNumber = response.data["phoneNumber"]
              window.location.reload()
          })
          .catch(e => {
              console.log(e)
          })
      }
    }
  },
  beforeMount() {
    this.fetchAccountInfo()
  },
};
</script>

<style scoped>
#account-settings {
  margin-top: 5%;
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
