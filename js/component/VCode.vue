<template>
  <v-code
    :tag="_tag"
  >
    {{ children }}
  </v-code>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
</script>