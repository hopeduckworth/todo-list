<script setup lang="ts">
import { defineProps } from "vue";

type ListItemProps = {
  /** this is the title of the to do list */
  title: string;
  /** this is an optional subtitle for the card */
  subtitle?: string;
};

defineProps<ListItemProps>();
</script>

<template>
  <div class="container">
    <p :class="[{ 'zero-margin': !subtitle }, 'large-text']">
      {{ title }}
    </p>

    <p v-if="subtitle" class="small-text">{{ subtitle }}</p>
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

p.zero-margin {
  margin-bottom: 0;
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
