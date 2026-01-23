<template>
  <v-toolbar-items
    :color="_color"
    :variant="_variant"
  >
    {{ children }}
  </v-toolbar-items>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _color = useModelState("color");
const _variant = useModelState("variant");
</script>