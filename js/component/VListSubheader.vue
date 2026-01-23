<template>
  <v-list-subheader
    :title="_title"
    :sticky="_sticky"
    :tag="_tag"
    :color="_color"
    :inset="_inset"
  >
    {{ children }}
  </v-list-subheader>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _title = useModelState("title");
const _sticky = useModelState("sticky");
const _tag = useModelState("tag");
const _color = useModelState("color");
const _inset = useModelState("inset");
</script>