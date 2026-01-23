<template>
  <v-parallax
    :scale="_scale"
  >
    {{ children }}
  </v-parallax>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _scale = useModelState("scale");
</script>