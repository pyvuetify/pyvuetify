<template>
  <v-app
    :theme="theme"
    :overlaps="overlaps"
  >
    {{ children }}
  </v-app>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const theme = useModelState("theme");
const overlaps = useModelState("overlaps");
</script>