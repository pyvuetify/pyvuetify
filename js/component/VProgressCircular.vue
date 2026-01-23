<template>
  <v-progress-circular
    :tag="_tag"
    :indeterminate="_indeterminate"
    :size="_size"
    :width="_width"
    :modelValue="_model_value"
    :color="_color"
    :rounded="_rounded"
    :theme="_theme"
    :bgColor="_bg_color"
    :rotate="_rotate"
  >
    {{ children }}
  </v-progress-circular>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _indeterminate = useModelState("indeterminate");
const _size = useModelState("size");
const _width = useModelState("width");
const _model_value = useModelState("model_value");
const _color = useModelState("color");
const _rounded = useModelState("rounded");
const _theme = useModelState("theme");
const _bg_color = useModelState("bg_color");
const _rotate = useModelState("rotate");
</script>