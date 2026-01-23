<template>
  <v-divider
    :length="_length"
    :theme="_theme"
    :color="_color"
    :variant="_variant"
    :opacity="_opacity"
    :vertical="_vertical"
    :gradient="_gradient"
    :inset="_inset"
    :thickness="_thickness"
    :contentOffset="_content_offset"
  >
    {{ children }}
  </v-divider>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _length = useModelState("length");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _variant = useModelState("variant");
const _opacity = useModelState("opacity");
const _vertical = useModelState("vertical");
const _gradient = useModelState("gradient");
const _inset = useModelState("inset");
const _thickness = useModelState("thickness");
const _content_offset = useModelState("content_offset");
</script>