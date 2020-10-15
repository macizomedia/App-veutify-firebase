<template>
  <v-container py-10>
    <v-row py-10 class="text-center">
      <v-col cols="12">
        <h2 v-if="login" class="red--text text--lighten-1">
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
        <TheForm />
      </v-col>

      <v-layout class="justify-center">
        <v-card flat tile class="d-flex align-center flex-column mb-6">
          <v-btn
            v-if="login"
            type="submit"
            form="login-form"
            :loading="loading"
            @click.stop="user = !user"
            width="289"
            rounded
            large
            color="secondary"
          >
            Sign In
          </v-btn>
          <br />

          <hr style="width:50%;text-align:left;margin-left:0" />

          <br />
          <v-btn rounded large>
            <v-icon size="24" left>mdi-facebook </v-icon>| Sign In with Facebook
          </v-btn>
          <br />
          <v-btn width="289" rounded large color="secondary">
            <v-icon dense left>mdi-google</v-icon>| Sign In with Google
          </v-btn>
          <v-container px-8 py-10>
            <p class="font-weight-thin text--secondary">
              <small>
                By signing up you accept our
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <a target="_blank" href="#" @click.stop v-on="on">
                      Term of Service
                    </a>
                  </template>
                  Opens in new window
                </v-tooltip>
                and
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <a target="_blank" href="#" @click.stop v-on="on">
                      Privacy Policiy
                    </a>
                  </template>
                  Opens in new window
                </v-tooltip></small
              >
            </p>
          </v-container>
        </v-card>
      </v-layout>

      <v-col v-if="login" class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          News
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>

      <v-col v-if="login">
        <h2 class="headline font-weight-bold mb-3">
          Roadmap
        </h2>

        <v-switch v-model="reverse" label="Toggle reverse"></v-switch>
        <v-timeline :reverse="reverse" :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item v-for="post in ecosystem" :key="post.id">
            <span
              slot="opposite"
              :class="`headline font-weight-bold ${post.color}--text`"
              v-text="post.year"
            ></span>
            <v-card class="elevation-2">
              <v-card-title>
                <h4 :class="`font-weight-light ${post.color}--text`">
                  {{ post.text }}
                </h4>
              </v-card-title>
              <v-card-text>
                {{ post.msg }}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TheForm from "@/components/Auth/BaseForm";
export default {
  name: "Welcome",
  components: {
    TheForm,
  },

  data: () => ({
    value: 1,
    login: true,
    user: true,
    reverse: true,
    ecosystem: [
      {
        id: "1",
        text: "Crowdfunding",
        msg: "loream",
        color: "cyan",
        year: "1960",
      },
      {
        id: "2",
        text: "Become a Sponser",
        msg: "Blah",
        color: "orange",
        year: "2000",
      },
      {
        id: "3",
        text: "Other News",
        msg: "Arepa",
        color: "pink",
        year: "1980",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href:
          "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
