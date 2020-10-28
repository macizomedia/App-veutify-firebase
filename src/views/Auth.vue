<template>
  <v-main>
    <ToolBar v-if="login" />
    <v-snackbar v-model="snackbar" :timeout="4000" top color="error">
      <span>{{ snackbarText }}</span>
      <v-btn color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm6 md2>
          <v-card class="pa-2" outlined>
            <v-toolbar dark color="--text-red">
              <v-toolbar-title v-if="login">Sign in</v-toolbar-title>
              <v-toolbar-title v-if="!login">Welcome</v-toolbar-title>
            </v-toolbar>
            <v-col cols="12">
              <h2 class="red--text text--lighten-1">
                <strong>Hello, I am</strong>
              </h2>
            </v-col>
            <v-col class="mb-2" cols="12">
              <v-row justify="center">
                <v-img
                  src="@/assets/Chameleon_mumu.jpg"
                  aspect-ratio="0.7"
                  max-height="220"
                  max-width="250 "
                ></v-img>
              </v-row>
            </v-col>
            <v-col v-if="user" class="mb-2">
              <p class="subheading font-weight-regular">
                For help and collaboration with this project
                <br />please join our
                <v-icon color="secundary" size="24px">
                  mdi-slack
                </v-icon>
                slack channel
              </p>
            </v-col>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                v-if="login"
                type="submit"
                form="login-form"
                :loading="loading"
                >Login</v-btn
              >
              <v-btn
                color="primary"
                v-if="!login"
                type="submit"
                form="login-form"
                :loading="loading"
                >Sing up</v-btn
              >
            </v-card-actions>
          </v-card>
          <v-card class="pa-2" v-if="!loading" outlined>
            <v-card-text>
              <v-form
                @submit.prevent="login ? signin() : signup()"
                id="login-form"
              >
                <v-text-field
                  prepend-icon="mdi-account-circle"
                  name="name"
                  v-model="name"
                  label="Name"
                  type="text"
                  :rules="nameRules"
                  v-if="!login"
                ></v-text-field>
                <v-text-field
                  prepend-icon="mdi-email"
                  name="email"
                  v-model="email"
                  label="Email"
                  type="text"
                  :rules="emailRules"
                ></v-text-field>
                <v-text-field
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  name="password"
                  v-model="password"
                  label="Password"
                  id="password"
                  :type="showPassword ? 'text' : 'password'"
                  :rules="passwordRules"
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
              </v-form>
              <p
                class="text-xs-center primary--text"
                @click="login = true"
                v-if="!login"
              >
                <a>Already have an account? Sign in</a>
              </p>
              <p
                class="text-xs-center primary--text"
                @click="login = false"
                v-if="login"
              >
                <a>Don't have an account? Sign up</a>
              </p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                v-if="login"
                type="submit"
                form="login-form"
                :loading="loading"
                >Login</v-btn
              >
              <v-btn
                color="primary"
                v-if="!login"
                type="submit"
                form="login-form"
                :loading="loading"
                >Sing up</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <Nav v-if="login" />
  </v-main>
</template>

<script>
import firebase from "firebase";
import ToolBar from "@/components/ToolBar";
import Nav from "@/components/Nav";
export default {
  name: "Auth",
  components: {
    Nav,
    ToolBar,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      showPassword: false,
      loading: false,
      login: false,
      nameRules: [
        (v) => {
          return v.length >= 2 || "Too short";
        },
      ],
      emailRules: [
        (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid email.";
        },
      ],
      passwordRules: [
        (value) => {
          return value.length >= 5 || "Too short.";
        },
      ],
      snackbar: false,
      snackbarText: "",
    };
  },
  methods: {
    signup() {
      if (this.name.length >= 2) {
        this.loading = true;
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            user = firebase.auth().currentUser;
            if (user) {
              user
                .updateProfile({
                  displayName: this.name,
                })
                .then(() => {
                  this.loading = false;
                  this.$router.replace("/dashboard");
                });
            }
          })
          .catch((error) => {
            // Handle Errors here.
            var errorMessage = error.message;
            this.loading = false;
            if (errorMessage.length > 0) {
              this.snackbarText = errorMessage;
              this.snackbar = true;
            }
          });
      } else {
        this.snackbarText = "Name too short";
        this.snackbar = true;
      }
    },
    signin() {
      this.loading = true;

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.loading = false;
          this.$router.replace("/dashboard");
        })
        .catch(function(error) {
          return error.message;
        })
        .then((error) => {
          this.loading = false;
          this.snackbarText = error;
          this.snackbar = true;
        });
    },
  },
};
</script>

<style>
@media only screen and (max-width: 768px) {
  .v-content {
    margin: 0;
  }
}
</style>
