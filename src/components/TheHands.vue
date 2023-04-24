<template>
  <rect
      :x="characterStore.leftHand"
      :y="0"
      :width="characterStore.handWidth"
      :height="characterStore.handHeight"
      :fill="characterStore.skinColor"
  />
  <rect
      :x="characterStore.rightHand"
      :y="0"
      :width="characterStore.handWidth"
      :height="characterStore.handHeight"
      :fill="characterStore.skinColor"
  />
</template>
<script setup lang="ts">
  import { useCharacterStore } from "../stores/useCharacterStore";
  const characterStore = useCharacterStore();
</script>

<style scoped>
.my-svg-component {
  /* Scoped CSS here */
}
</style>
