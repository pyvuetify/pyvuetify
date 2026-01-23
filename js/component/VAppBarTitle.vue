<template>
  <v-app-bar-title
    :tag="_tag"
    :text="_text"
  >
    {{ children }}
  </v-app-bar-title>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _text = useModelState("text");
</script>