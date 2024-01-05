<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="This is a test message" /> -->
    <ListMain title="Test Title" :items="5" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import ListMain from "@/components/ListMain.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    // HelloWorld,
    ListMain,
  },
});
</script>
