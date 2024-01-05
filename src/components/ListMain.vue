<script setup lang="ts">
import { defineProps } from "vue";

type ListMainProps = {
  title: string;
  items: number;
};

defineProps<ListMainProps>();
</script>

<template>
  <div class="container">
    <p class="large-text">
      {{ title }}
    </p>

    <p class="small-text">{{ items }} items</p>
  </div>
</template>

<style scoped>
p {
  color: white;
  margin: 0;
}

p.small-text {
  font-size: 16px;
}

p.large-text {
  font-size: 20px;
  margin-bottom: 0.75rem;
}

.container {
  background-color: black;
  padding: 1.5rem 2rem;
  border-radius: 16px;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
}
</style>
