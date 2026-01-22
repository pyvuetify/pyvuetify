<template>
  <v-badge
    :tag="tag"
    :label="label"
    :height="height"
    :max="max"
    :width="width"
    :modelValue="modelValue"
    :location="location"
    :color="color"
    :floating="floating"
    :rounded="rounded"
    :tile="tile"
    :theme="theme"
    :icon="icon"
    :bordered="bordered"
    :content="content"
    :dot="dot"
    :inline="inline"
    :offsetX="offsetX"
    :offsetY="offsetY"
    :textColor="textColor"
    :transition="transition"
    :maxHeight="maxHeight"
    :maxWidth="maxWidth"
    :minHeight="minHeight"
    :minWidth="minWidth"
  >
    {{ children }}
  </v-badge>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const tag = useModelState("tag");
const label = useModelState("label");
const height = useModelState("height");
const max = useModelState("max");
const width = useModelState("width");
const modelValue = useModelState("model_value");
const location = useModelState("location");
const color = useModelState("color");
const floating = useModelState("floating");
const rounded = useModelState("rounded");
const tile = useModelState("tile");
const theme = useModelState("theme");
const icon = useModelState("icon");
const bordered = useModelState("bordered");
const content = useModelState("content");
const dot = useModelState("dot");
const inline = useModelState("inline");
const offsetX = useModelState("offset_x");
const offsetY = useModelState("offset_y");
const textColor = useModelState("text_color");
const transition = useModelState("transition");
const maxHeight = useModelState("max_height");
const maxWidth = useModelState("max_width");
const minHeight = useModelState("min_height");
const minWidth = useModelState("min_width");
</script>