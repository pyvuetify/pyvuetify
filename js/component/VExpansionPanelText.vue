<template>
  <v-expansion-panel-text
    :eager="_eager"
  >
    {{ children }}
  </v-expansion-panel-text>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _eager = useModelState("eager");
</script>