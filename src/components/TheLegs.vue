<template>
  <rect
      :x="characterStore.leftLeg"
      :y="0" :width="characterStore.legWidth"
      :height="characterStore.legHeight"
      :fill="characterStore.skinColor"
  />
  <rect
      :x="characterStore.rightLeg"
      :y="0" :width="characterStore.legWidth"
      :height="characterStore.legHeight"
      :fill="characterStore.skinColor"
  />
</template>
<script setup>
import { useCharacterStore } from "../stores/useCharacterStore";
const characterStore = useCharacterStore();
</script>

<style scoped>
.my-svg-component {
  /* Scoped CSS here */
}
</style>
