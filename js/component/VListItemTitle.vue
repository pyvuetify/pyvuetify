<template>
  <v-list-item-title
    :tag="_tag"
  >
    {{ children }}
  </v-list-item-title>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
</script>