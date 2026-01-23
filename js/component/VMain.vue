<template>
  <v-main
    :height="_height"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :width="_width"
    :tag="_tag"
    :scrollable="_scrollable"
  >
    {{ children }}
  </v-main>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _height = useModelState("height");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _width = useModelState("width");
const _tag = useModelState("tag");
const _scrollable = useModelState("scrollable");
</script>