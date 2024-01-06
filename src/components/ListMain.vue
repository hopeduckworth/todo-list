<script setup lang="ts">
import { defineProps } from "vue";

type ListMainProps = {
  /** this is the title of the to do list */
  title: string;
  /** this is the number of items in the to do list */
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
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  font-family: Poppins;
}

p.small-text {
  font-size: 1rem;
}

p.large-text {
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
}

.container {
  background-color: black;
  padding: 1.5rem 2rem;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  max-width: 600px;
  border-radius: 0.5rem;
  border: 1px solid #fff;
}
</style>
