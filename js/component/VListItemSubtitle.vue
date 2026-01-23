<template>
  <v-list-item-subtitle
    :tag="_tag"
    :opacity="_opacity"
  >
    {{ children }}
  </v-list-item-subtitle>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _opacity = useModelState("opacity");
</script>