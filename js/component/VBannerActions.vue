<template>
  <v-banner-actions
    :color="color"
    :density="density"
  >
    {{ children }}
  </v-banner-actions>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const color = useModelState("color");
const density = useModelState("density");
</script>