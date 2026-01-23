<template>
  <v-icon
    :end="_end"
    :start="_start"
    :icon="_icon"
    :tag="_tag"
    :theme="_theme"
    :color="_color"
    :disabled="_disabled"
    :size="_size"
    :opacity="_opacity"
  >
    {{ children }}
  </v-icon>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _end = useModelState("end");
const _start = useModelState("start");
const _icon = useModelState("icon");
const _tag = useModelState("tag");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _disabled = useModelState("disabled");
const _size = useModelState("size");
const _opacity = useModelState("opacity");
</script>