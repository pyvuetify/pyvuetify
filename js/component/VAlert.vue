<template>
  <v-alert
    :title="title"
    :text="text"
    :border="border"
    :borderColor="borderColor"
    :closable="closable"
    :closeIcon="closeIcon"
    :type="type"
    :closeLabel="closeLabel"
    :icon="icon"
    :modelValue="modelValue"
    :prominent="prominent"
    :density="density"
    :height="height"
    :maxHeight="maxHeight"
    :maxWidth="maxWidth"
    :minHeight="minHeight"
    :minWidth="minWidth"
    :width="width"
    :elevation="elevation"
    :iconSizes="iconSizes"
    :iconSize="iconSize"
    :location="location"
    :position="position"
    :rounded="rounded"
    :tile="tile"
    :tag="tag"
    :theme="theme"
    :color="color"
    :variant="variant"
  >
    {{ children }}
  </v-alert>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const title = useModelState("title");
const text = useModelState("text");
const border = useModelState("border");
const borderColor = useModelState("border_color");
const closable = useModelState("closable");
const closeIcon = useModelState("close_icon");
const type = useModelState("type");
const closeLabel = useModelState("close_label");
const icon = useModelState("icon");
const modelValue = useModelState("model_value");
const prominent = useModelState("prominent");
const density = useModelState("density");
const height = useModelState("height");
const maxHeight = useModelState("max_height");
const maxWidth = useModelState("max_width");
const minHeight = useModelState("min_height");
const minWidth = useModelState("min_width");
const width = useModelState("width");
const elevation = useModelState("elevation");
const iconSizes = useModelState("icon_sizes");
const iconSize = useModelState("icon_size");
const location = useModelState("location");
const position = useModelState("position");
const rounded = useModelState("rounded");
const tile = useModelState("tile");
const tag = useModelState("tag");
const theme = useModelState("theme");
const color = useModelState("color");
const variant = useModelState("variant");
</script>