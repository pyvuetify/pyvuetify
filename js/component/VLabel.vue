<template>
  <v-label
    :theme="_theme"
    :text="_text"
  >
    {{ children }}
  </v-label>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _theme = useModelState("theme");
const _text = useModelState("text");
</script>