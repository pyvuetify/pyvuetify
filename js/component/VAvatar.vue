<template>
  <v-avatar
    :tag="tag"
    :size="size"
    :image="image"
    :start="start"
    :end="end"
    :color="color"
    :density="density"
    :border="border"
    :rounded="rounded"
    :tile="tile"
    :theme="theme"
    :text="text"
    :icon="icon"
    :variant="variant"
  >
    {{ children }}
  </v-avatar>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const tag = useModelState("tag");
const size = useModelState("size");
const image = useModelState("image");
const start = useModelState("start");
const end = useModelState("end");
const color = useModelState("color");
const density = useModelState("density");
const border = useModelState("border");
const rounded = useModelState("rounded");
const tile = useModelState("tile");
const theme = useModelState("theme");
const text = useModelState("text");
const icon = useModelState("icon");
const variant = useModelState("variant");
</script>