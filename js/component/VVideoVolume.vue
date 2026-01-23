<template>
  <v-video-volume
    :modelValue="_model_value"
    :label="_label"
    :menuProps="_menu_props"
    :direction="_direction"
    :inline="_inline"
    :sliderProps="_slider_props"
  >
    {{ children }}
  </v-video-volume>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _model_value = useModelState("model_value");
const _label = useModelState("label");
const _menu_props = useModelState("menu_props");
const _direction = useModelState("direction");
const _inline = useModelState("inline");
const _slider_props = useModelState("slider_props");
</script>