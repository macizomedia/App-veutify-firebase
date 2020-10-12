<template>
  <v-container>
    <v-row class="text-center" >
      <v-col cols="12" >
        <h1>Welcome Bsafe</h1>
        <br/>
      </v-col>
      <v-col class="mb-5" cols="12">
         <v-row justify="center">
        <v-img src="@/assets/Chameleon.svg" aspect-ratio="1.7" max-height="150" max-width="200"></v-img>
        </v-row>
       </v-col>
      <v-col class="mb-4">
        <p class="subheading font-weight-regular">
          For help and collaboration with this project
          <br />please join our
          <v-icon color="secundary" size="24px">
            mdi-slack
          </v-icon>
          slack channel
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-row align="center" justify="space-around">
          <br />
          <v-btn>SignIn</v-btn>
          <v-btn color="secondary">
            SignUp
          </v-btn>
          <br />
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          News
        </h2>

        <v-row justify="center">
          <a v-for="(eco, i) in ecosystem" :key="i" :href="eco.href" class="subheading mx-3" target="_blank">
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>

      <v-col>
        <h2 class="headline font-weight-bold mb-3">
          Roadmap
        </h2>

        
          <v-switch v-model="reverse" label="Toggle reverse"></v-switch>
          <v-timeline :reverse="reverse" :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item v-for="post in ecosystem" :key="post.id">
              <span slot="opposite" :class="`headline font-weight-bold ${post.color}--text`" v-text="post.year"></span>
              <v-card class="elevation-2">
                <v-card-title >
                  <h4 :class="`font-weight-light ${post.color}--text`" >
                    {{post.text}}
                  </h4>
                </v-card-title>
                <v-card-text>
                  {{post.msg}}
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "Welcome",

    data: () => ({
      reverse: true,
      ecosystem: [{
          id: "1",
          text: "Crowdfunding",
          msg: "loream",
          color: "cyan",
          year: "1960"
        },
        {
          id: "2",
          text: "Become a Sponser",
          msg: "Blah",
          color: "orange",
          year: "2000"
        },
        {
          id: "3",
          text: "Other News",
          msg: "Arepa",
          color: "pink",
          year: "1980"
        }
      ],
      importantLinks: [{
          text: "Documentation",
          href: "https://vuetifyjs.com"
        },
        {
          text: "Chat",
          href: "https://community.vuetifyjs.com"
        },
        {
          text: "Made with Vuetify",
          href: "https://madewithvuejs.com/vuetify"
        },
        {
          text: "Twitter",
          href: "https://twitter.com/vuetifyjs"
        },
        {
          text: "Articles",
          href: "https://medium.com/vuetify"
        }
      ],
      whatsNext: [{
          text: "Explore components",
          href: "https://vuetifyjs.com/components/api-explorer"
        },
        {
          text: "Select a layout",
          href: "https://vuetifyjs.com/getting-started/pre-made-layouts"
        },
        {
          text: "Frequently Asked Questions",
          href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
        }
      ]
    })
  };
</script>