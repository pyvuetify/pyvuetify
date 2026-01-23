<template>
  <v-container
    :tag="_tag"
    :height="_height"
    :width="_width"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :fluid="_fluid"
  >
    {{ children }}
  </v-container>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _height = useModelState("height");
const _width = useModelState("width");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _fluid = useModelState("fluid");
</script>