<template>
  <v-main>
    <ToolBar />
    <v-container align-center>
      <Welcome />
    </v-container>
    <Nav />
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