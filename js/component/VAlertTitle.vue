<template>
  <v-alert-title
    :tag="tag"
  >
    {{ children }}
  </v-alert-title>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const tag = useModelState("tag");
</script>