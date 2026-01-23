<template>
  <v-class-icon
    :tag="_tag"
    :icon="_icon"
  >
    {{ children }}
  </v-class-icon>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _icon = useModelState("icon");
</script>