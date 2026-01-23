<template>
  <v-breadcrumbs
    :tag="_tag"
    :disabled="_disabled"
    :color="_color"
    :density="_density"
    :rounded="_rounded"
    :tile="_tile"
    :icon="_icon"
    :bgColor="_bg_color"
    :divider="_divider"
    :activeClass="_active_class"
    :activeColor="_active_color"
    :items="_items"
  >
    {{ children }}
  </v-breadcrumbs>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _disabled = useModelState("disabled");
const _color = useModelState("color");
const _density = useModelState("density");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _icon = useModelState("icon");
const _bg_color = useModelState("bg_color");
const _divider = useModelState("divider");
const _active_class = useModelState("active_class");
const _active_color = useModelState("active_color");
const _items = useModelState("items");
</script>