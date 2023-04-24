<template>

  <rect
      :x="characterStore.bodyLeft"
      :y="0"

      :width="characterStore.bodyWidth"
      :height="characterStore.bodyHeight"
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
