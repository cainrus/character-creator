<template>
    <circle
        :cx="characterStore.center"
        :cy="characterStore.headRadius"
        :r="characterStore.headRadius"
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
