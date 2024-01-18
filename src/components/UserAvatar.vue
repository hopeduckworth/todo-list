<script setup lang="ts">
import { defineProps } from "vue";

type UserAvatarSize = "small" | "medium" | "large";

type UserAvatarProps = {
  /** this prop is for the size of the avatar */
  avatarSize: UserAvatarSize;
  /** this prop is for the image that makes up a user's avatar */
  avatarUrl: string;
};

defineProps<UserAvatarProps>();
</script>

<template>
  <div
    class="avatar-container"
    :class="{
      small: avatarSize === 'small',
      medium: avatarSize === 'medium',
      large: avatarSize === 'large',
    }"
  />
</template>

<style scoped>
.avatar-container {
  background-color: darkorchid;
  border-radius: 50%;
}

.small {
  width: 2.75rem;
  height: 2.75rem;
}

.medium {
  width: 3.75rem;
  height: 3.75rem;
}

.large {
  width: 4.75rem;
  height: 4.75rem;
}
</style>
