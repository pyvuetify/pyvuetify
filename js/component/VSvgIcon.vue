<template>
  <v-svg-icon
    :icon="_icon"
    :tag="_tag"
  >
    {{ children }}
  </v-svg-icon>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _icon = useModelState("icon");
const _tag = useModelState("tag");
</script>