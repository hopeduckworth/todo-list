<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import DeleteCircleIcon from "vue-material-design-icons/DeleteCircle.vue";
import PlusCircleOutlineIcon from "vue-material-design-icons/PlusCircleOutline.vue";

type ListMainProps = {
  /** this is the title of the to do list */
  title: string;
  /** this is the number of items in the to do list */
  subtitle?: string;
};

defineProps<ListMainProps>();
defineEmits(["onTrash", "onAdd"]);
</script>

<template>
  <div class="container">
    <div class="text-container">
      <p :class="[{ 'zero-margin': !subtitle }, 'large-text']">
        {{ title }}
      </p>

      <p v-if="subtitle" class="small-text">{{ subtitle }}</p>
    </div>
    <div class="icon-container">
      <button class="icon-button">
        <plus-circle-outline-icon
          style="margin-right: 0.5rem; color: greenyellow"
          @click="$emit('onAdd')"
        />
        <delete-circle-icon
          style="margin-right: 0.5rem; color: greenyellow"
          @click="$emit('onTrash')"
        />
      </button>
    </div>
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
  text-align: left;
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
  flex-direction: row;
  display: flex;
  max-width: 600px;
  border-radius: 0.5rem;
  border: 1px solid #fff;
  justify-content: space-between;
}
.text-container {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.icon-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon-button {
  background-color: transparent;
  border: none;
}
</style>
