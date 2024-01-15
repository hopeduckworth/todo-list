<script setup lang="ts">
import { defineProps } from "vue";
import UserAvatar from "./UserAvatar.vue";
import StandardButton from "./StandardButton.vue";

type TopNavBarProps = {
  /** this prop is for whether a user is logged in */
  isAuthenticated: boolean;
  /** this prop is for the image that makes up a user's avatar */
  avatarUrl: string;
};

defineProps<TopNavBarProps>();
</script>

<template>
  <div class="header-container">
    <h1>To-do Lists</h1>
    <div class="user-container">
      <div class="button-container">
        <StandardButton
          title="testbutton"
          @on-click="() => console.log('you clicked me')"
        />
      </div>
      <UserAvatar avatar-size="medium" avatar-url="test" />
    </div>
  </div>
</template>

<style scoped>
.header-container {
  background-color: #d9d9d9;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.75rem;
  margin: 0 -0.5rem;
}

.user-container {
  display: flex;
  align-items: center;
}

.button-container {
  margin-right: 2rem;
}
</style>
