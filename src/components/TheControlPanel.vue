<template>
  <div>
    <p>Max width: {{cs.maxWidth}}</p>
    <p>Current width: {{cs.width}}</p>
    <p>Offset X: {{cs.leftOffset}}</p>
    <input type="color" id="skin-color" name="skin-color"
           :value="cs.skinColor"
           @input="onColorChange">
    <label for="skin-color">Skin color [{{cs.skinColor}}]</label>
  </div>
  <div>
    <input type="range" id="headRadius" name="headRadius"
           :min="cs.headMinRadius"
           :max="cs.headMaxRadius"
           :value="cs.headRadius"
           @input="onHeadRadiusChange">
    <label for="headRadius">Head width [{{cs.headRadius * 2}}]</label>
  </div>
  <div>
    <input type="range" id="bodyWidth" name="bodyWidth"
           :min="cs.bodyMinWidth"
           :max="cs.bodyMaxWidth"
           :value="cs.bodyWidth"
           @input="onBodyWidthChange">
    <label for="bodyWidth">Body width [{{cs.bodyWidth}}]</label>
  </div>
  <div>
    <input type="range" id="bodyHeight" name="bodyHeight"
           :min="cs.bodyMinHeight"
           :max="cs.bodyMaxHeight"
           :value="cs.bodyHeight"
           @input="onBodyHeightChange">
    <label for="bodyHeight">Body height</label>
  </div>

  <div>
    <input type="range" id="handXOffset" name="handXOffset"
           :min="cs.handMinXOffset"
           :max="cs.handMaxXOffset"
           :value="cs.handXOffset"
           @input="onHandXOffsetChange">
    <label for="handXOffset">Hand horizontal offset</label>
  </div>

  <div>
    <input type="range" id="handYOffset" name="handYOffset"
           :min="cs.handMinYOffset"
           :max="cs.handMaxYOffset"
           :value="cs.handYOffset"
           @input="onHandYOffsetChange">
    <label for="handYOffset">Hand vertical offset [{{cs.handYOffset}}]</label>
  </div>

  <div>
    <input type="range" id="handMinHeight" name="handMinHeight"
           :min="cs.handMinHeight"
           :max="cs.handMaxHeight"
           :value="cs.handHeight"
           @input="onHandHeightChange">
    <label for="handMinHeight">Hand height</label>
  </div>

  <div>
    <input type="range" id="handWidth" name="handWidth"
           :min="cs.handMinWidth"
           :max="cs.handMaxWidth"
           :value="cs.handWidth"
           @input="onHandWidthChange">
    <label for="handWidth">Hand width</label>
  </div>

  <div>
    <input type="range" id="legWidth" name="legWidth"
           :min="cs.legMinWidth"
           :max="cs.legMaxWidth"
           :value="cs.legWidth"
           @input="onLegWidthChange">
    <label for="legWidth">leg width</label>
  </div>
  <div>
    <input type="range" id="legHeight" name="legHeight"
           :min="cs.legMinHeight"
           :max="cs.legMaxHeight"
           :value="cs.legHeight"
           @input="onLegHeightChange">
    <label for="legHeight">leg height</label>
  </div>

</template>
<script setup lang="ts">
  import {useCharacterStore} from "../stores/useCharacterStore";

  const cs = useCharacterStore();

  function onColorChange(event: Event) {
    cs.skinColor = (event.target as HTMLInputElement).value;
  }
  function onBodyWidthChange(event: Event) {
    cs.bodyWidth = +(event.target as HTMLInputElement).value;
  }
  function onHeadRadiusChange(event: Event) {
    cs.headRadius = +(event.target as HTMLInputElement).value;
  }

  function onBodyHeightChange(event: Event) {
    cs.bodyHeight = +(event.target as HTMLInputElement).value;
  }
  function onHandXOffsetChange(event: Event) {
    cs.handXOffset = +(event.target as HTMLInputElement).value;
  }

  function onHandYOffsetChange(event: Event) {
    cs.handYOffset = +(event.target as HTMLInputElement).value;
  }
  function onHandHeightChange(event: Event) {
    cs.handHeight = +(event.target as HTMLInputElement).value;
  }

  function onHandWidthChange(event: Event) {
    cs.handWidth = +(event.target as HTMLInputElement).value;
  }
  function onLegWidthChange(event: Event) {
    cs.legWidth = +(event.target as HTMLInputElement).value;
  }

  function onLegHeightChange(event: Event) {
    cs.legHeight = +(event.target as HTMLInputElement).value;
  }
</script>
