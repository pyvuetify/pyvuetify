<template>
  <v-banner-actions
    :color="_color"
    :density="_density"
  >
    {{ children }}
  </v-banner-actions>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _color = useModelState("color");
const _density = useModelState("density");
</script>