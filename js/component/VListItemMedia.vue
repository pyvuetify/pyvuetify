<template>
  <v-list-item-media
    :tag="_tag"
    :start="_start"
    :end="_end"
  >
    {{ children }}
  </v-list-item-media>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _start = useModelState("start");
const _end = useModelState("end");
</script>