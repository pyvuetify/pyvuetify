<template>
  <v-no-ssr
  >
    {{ children }}
  </v-no-ssr>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
</script>