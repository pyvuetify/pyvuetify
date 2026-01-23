<template>
  <v-item
    :disabled="_disabled"
    :value="_value"
    :selectedClass="_selected_class"
  >
    {{ children }}
  </v-item>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _disabled = useModelState("disabled");
const _value = useModelState("value");
const _selected_class = useModelState("selected_class");
</script>