<template>
  <v-app-bar app color="secundary" dark>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <btn v-if="user"/>
          <v-icon v-else>mdi-information-variant</v-icon>
        </v-btn>
      </template>

      <v-list rounded>
        <v-list-item v-for="(item, i) in menuItems" :key="item.title"
          :to="item.link">
          <v-list-item-title><v-icon>{{ item.icon }}</v-icon> {{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-spacer />

    <v-btn target="_blank" text>
      <span v-if="user" class="mr-2">{{ user }}</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  export default {
   components: {
    /*Footer: () => import("./components/Footer.vue"),*/
    Btn: () => import("./Auth/btn-emit.vue"),
  },
    data: () => ({
      user: "", 
    }),
    computed: {
      menuItems () {
        let menuItems = [
          {icon: 'mdi-email-newsletter', title: 'Subscribre ', link: '/about'},
          {icon: 'mdi-account-cash-outline', title: 'Donate', link: '/donate'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
            {icon: 'room', title: 'Organize Meetup', link: '/meetup/new'},
            {icon: 'person', title: 'Profile', link: '/profile'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    }
  }
</script>

<style>

</style>