<template>
  <v-breadcrumbs-divider
    :divider="_divider"
  >
    {{ children }}
  </v-breadcrumbs-divider>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _divider = useModelState("divider");
</script>