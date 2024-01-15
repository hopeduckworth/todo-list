<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

type StandardButtonProps = {
  title: string;
};

defineProps<StandardButtonProps>();
defineEmits(["onClick"]);
</script>

<template>
  <button class="button" @click="$emit('onClick')">{{ title }}</button>
</template>

<style scoped>
.button {
  border-radius: 6.25rem;
  background: #7972cd;
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  border: none;
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: 0.2s;
  cursor: pointer;
}

.button:hover {
  opacity: 0.8;
}
</style>
