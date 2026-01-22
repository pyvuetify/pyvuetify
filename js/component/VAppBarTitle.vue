<template>
  <v-app-bar-title
    :tag="tag"
    :text="text"
  >
    {{ children }}
  </v-app-bar-title>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const tag = useModelState("tag");
const text = useModelState("text");
</script>