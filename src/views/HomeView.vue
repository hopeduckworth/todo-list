<template>
  <TopNavBar :isAuthenticated="true" avatarUrl="testavatar" />
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="This is a test message" /> -->
    <ListMain
      title="Test Title"
      subtitle="test main subtitle"
      @onAdd="() => console.log('testing add button')"
      @onTrash="() => console.log('testing trash')"
    />
    <ListItem
      title="Test List"
      subtitle="test subtitle"
      @onComplete="() => console.log('this is done')"
    />
    <ListItem title="Test List" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import ListMain from "@/components/ListMain.vue";
import ListItem from "@/components/ListItem.vue";
import TopNavBar from "@/components/TopNavBar.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    // HelloWorld,
    ListMain,
    ListItem,
    TopNavBar,
  },
});
</script>

<!-- <div id="container">
    <img src="img.png">
</div> -->
