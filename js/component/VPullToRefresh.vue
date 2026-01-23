<template>
  <v-pull-to-refresh
    :disabled="_disabled"
    :pullDownThreshold="_pull_down_threshold"
  >
    {{ children }}
  </v-pull-to-refresh>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _disabled = useModelState("disabled");
const _pull_down_threshold = useModelState("pull_down_threshold");
</script>