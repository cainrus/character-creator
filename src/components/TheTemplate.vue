<template>
  <svg class="template" :style="`width: ${characterStore.maxWidth}`">
    <g class="main-group" :transform="`translate(${characterStore.leftOffset}, 0)`">
      <g :transform="`translate(${0}, 0)`">
        <TheHead/>
      </g>
      <g :transform="`translate(${0}, ${characterStore.bodyTop})`">
        <TheBody/>
      </g>
      <g :transform="`translate(${0}, ${characterStore.handsTop})`">
        <TheHands/>
      </g>
      <g :transform="`translate(${0}, ${characterStore.legsTop})`">
        <TheLegs/>
      </g>
    </g>
  </svg>
</template>
<script setup lang="ts">

import {useCharacterStore} from '../stores/useCharacterStore';
import TheHead from './TheHead.vue';
import TheBody from './TheBody.vue';
import TheLegs from './TheLegs.vue';
import TheHands from './TheHands.vue';

const characterStore = useCharacterStore()

</script>

<style scoped>
.main-group {
  outline: 1px solid red;
}
.template {
  outline: 1px solid green;

  min-height: 100vh;
}
</style>
