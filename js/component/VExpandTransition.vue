<template>
  <v-expand-transition
    :disabled="_disabled"
    :mode="_mode"
    :group="_group"
  >
    {{ children }}
  </v-expand-transition>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _disabled = useModelState("disabled");
const _mode = useModelState("mode");
const _group = useModelState("group");
</script>