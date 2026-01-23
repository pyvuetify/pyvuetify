<template>
  <v-app
    :theme="_theme"
    :overlaps="_overlaps"
  >
    {{ children }}
  </v-app>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _theme = useModelState("theme");
const _overlaps = useModelState("overlaps");
</script>