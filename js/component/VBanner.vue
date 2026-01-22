<template>
  <v-banner
    :tag="tag"
    :height="height"
    :width="width"
    :location="location"
    :color="color"
    :density="density"
    :border="border"
    :elevation="elevation"
    :rounded="rounded"
    :tile="tile"
    :theme="theme"
    :text="text"
    :icon="icon"
    :maxHeight="maxHeight"
    :maxWidth="maxWidth"
    :minHeight="minHeight"
    :minWidth="minWidth"
    :avatar="avatar"
    :bgColor="bgColor"
    :stacked="stacked"
    :sticky="sticky"
    :mobile="mobile"
    :mobileBreakpoint="mobileBreakpoint"
    :position="position"
    :lines="lines"
  >
    {{ children }}
  </v-banner>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const tag = useModelState("tag");
const height = useModelState("height");
const width = useModelState("width");
const location = useModelState("location");
const color = useModelState("color");
const density = useModelState("density");
const border = useModelState("border");
const elevation = useModelState("elevation");
const rounded = useModelState("rounded");
const tile = useModelState("tile");
const theme = useModelState("theme");
const text = useModelState("text");
const icon = useModelState("icon");
const maxHeight = useModelState("max_height");
const maxWidth = useModelState("max_width");
const minHeight = useModelState("min_height");
const minWidth = useModelState("min_width");
const avatar = useModelState("avatar");
const bgColor = useModelState("bg_color");
const stacked = useModelState("stacked");
const sticky = useModelState("sticky");
const mobile = useModelState("mobile");
const mobileBreakpoint = useModelState("mobile_breakpoint");
const position = useModelState("position");
const lines = useModelState("lines");
</script>