<template>
  <v-spacer
    :tag="_tag"
  >
    {{ children }}
  </v-spacer>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
</script>