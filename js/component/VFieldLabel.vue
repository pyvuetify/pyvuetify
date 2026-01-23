<template>
  <v-field-label
    :floating="_floating"
  >
    {{ children }}
  </v-field-label>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _floating = useModelState("floating");
</script>