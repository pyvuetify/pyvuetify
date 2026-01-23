<template>
  <v-skeleton-loader
    :type="_type"
    :height="_height"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :width="_width"
    :elevation="_elevation"
    :theme="_theme"
    :color="_color"
    :loading="_loading"
    :boilerplate="_boilerplate"
    :loadingText="_loading_text"
  >
    {{ children }}
  </v-skeleton-loader>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _type = useModelState("type");
const _height = useModelState("height");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _width = useModelState("width");
const _elevation = useModelState("elevation");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _loading = useModelState("loading");
const _boilerplate = useModelState("boilerplate");
const _loading_text = useModelState("loading_text");
</script>