<template>
  <div class="home"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ListMain from "@/components/ListMain.vue";
import ListItem from "@/components/ListItem.vue";
import { dummyData as dummyDataObj } from "../data/dummyData";

const dummyData = ref(dummyDataObj);
</script>

<style scoped></style>
