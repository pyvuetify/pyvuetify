<template>
  <v-dialog-transition
    :target="_target"
  >
    {{ children }}
  </v-dialog-transition>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _target = useModelState("target");
</script>