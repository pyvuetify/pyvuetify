<template>
  <v-app-bar-nav-icon
    :symbol="symbol"
    :text="text"
    :flat="flat"
    :replace="replace"
    :border="border"
    :icon="icon"
    :density="density"
    :height="height"
    :maxHeight="maxHeight"
    :maxWidth="maxWidth"
    :minHeight="minHeight"
    :minWidth="minWidth"
    :width="width"
    :elevation="elevation"
    :location="location"
    :position="position"
    :rounded="rounded"
    :tile="tile"
    :tag="tag"
    :theme="theme"
    :color="color"
    :variant="variant"
    :disabled="disabled"
    :size="size"
    :value="value"
    :active="active"
    :activeColor="activeColor"
    :baseColor="baseColor"
    :prependIcon="prependIcon"
    :appendIcon="appendIcon"
    :block="block"
    :readonly="readonly"
    :slim="slim"
    :stacked="stacked"
    :ripple="ripple"
    :selectedClass="selectedClass"
    :loading="loading"
    :href="href"
    :exact="exact"
    :to="to"
  >
    {{ children }}
  </v-app-bar-nav-icon>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const symbol = useModelState("symbol");
const text = useModelState("text");
const flat = useModelState("flat");
const replace = useModelState("replace");
const border = useModelState("border");
const icon = useModelState("icon");
const density = useModelState("density");
const height = useModelState("height");
const maxHeight = useModelState("max_height");
const maxWidth = useModelState("max_width");
const minHeight = useModelState("min_height");
const minWidth = useModelState("min_width");
const width = useModelState("width");
const elevation = useModelState("elevation");
const location = useModelState("location");
const position = useModelState("position");
const rounded = useModelState("rounded");
const tile = useModelState("tile");
const tag = useModelState("tag");
const theme = useModelState("theme");
const color = useModelState("color");
const variant = useModelState("variant");
const disabled = useModelState("disabled");
const size = useModelState("size");
const value = useModelState("value");
const active = useModelState("active");
const activeColor = useModelState("active_color");
const baseColor = useModelState("base_color");
const prependIcon = useModelState("prepend_icon");
const appendIcon = useModelState("append_icon");
const block = useModelState("block");
const readonly = useModelState("readonly");
const slim = useModelState("slim");
const stacked = useModelState("stacked");
const ripple = useModelState("ripple");
const selectedClass = useModelState("selected_class");
const loading = useModelState("loading");
const href = useModelState("href");
const exact = useModelState("exact");
const to = useModelState("to");
</script>