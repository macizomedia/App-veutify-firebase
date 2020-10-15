<template>
  <v-main>
    <ToolBar v-if="user"/>
    <v-container align-center>
      <Welcome />
    </v-container>
    <Nav v-if="user" />
  </v-main>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";
import ToolBar from "@/components/ToolBar";
import Nav from "@/components/Nav";
import Welcome from "@/components/Welcome";

export default {
  name: "Home",
  components: {
    Welcome,
    Nav,
    ToolBar
  },
  data () {
    return {
      user: false
      //
    }
  },
  computed: {
    show () {
      return this.$route.path != '/auth'; 
    }
  }
};
</script>