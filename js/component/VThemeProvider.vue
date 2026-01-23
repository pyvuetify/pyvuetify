<template>
  <v-theme-provider
    :tag="_tag"
    :theme="_theme"
    :withBackground="_with_background"
  >
    {{ children }}
  </v-theme-provider>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _theme = useModelState("theme");
const _with_background = useModelState("with_background");
</script>