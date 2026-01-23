<template>
  <v-date-picker-header
    :color="_color"
    :appendIcon="_append_icon"
    :header="_header"
    :transition="_transition"
  >
    {{ children }}
  </v-date-picker-header>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _color = useModelState("color");
const _append_icon = useModelState("append_icon");
const _header = useModelState("header");
const _transition = useModelState("transition");
</script>