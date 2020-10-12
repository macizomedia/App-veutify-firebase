<template>
  <v-main>
    <ToolBar />

    <v-container
      align-center
      align-content-center
      align-end
      align-start
      fill-height
      d-flex
      fluid
      id="Content"
      tag="div"
      wrap
    >
      <v-avatar size="56"
        ><img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"
      /></v-avatar>
    </v-container>
    <Nav />
  </v-main>
</template>

<script>
// @ is an alias to /src
import ToolBar from "@/components/ToolBar";
import Nav from "@/components/Nav";
export default {
  name: "users",
  components: {
    Nav,
    ToolBar
  }
};
</script>

<style>
</style>