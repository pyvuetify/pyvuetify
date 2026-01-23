<template>
  <v-responsive
    :height="_height"
    :width="_width"
    :inline="_inline"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :contentClass="_content_class"
    :aspectRatio="_aspect_ratio"
  >
    {{ children }}
  </v-responsive>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _height = useModelState("height");
const _width = useModelState("width");
const _inline = useModelState("inline");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _content_class = useModelState("content_class");
const _aspect_ratio = useModelState("aspect_ratio");
</script>