<template>
  <v-breadcrumbs-item
    :replace="_replace"
    :tag="_tag"
    :title="_title"
    :disabled="_disabled"
    :width="_width"
    :color="_color"
    :maxWidth="_max_width"
    :active="_active"
    :activeClass="_active_class"
    :activeColor="_active_color"
    :href="_href"
    :to="_to"
    :exact="_exact"
  >
    {{ children }}
  </v-breadcrumbs-item>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _replace = useModelState("replace");
const _tag = useModelState("tag");
const _title = useModelState("title");
const _disabled = useModelState("disabled");
const _width = useModelState("width");
const _color = useModelState("color");
const _max_width = useModelState("max_width");
const _active = useModelState("active");
const _active_class = useModelState("active_class");
const _active_color = useModelState("active_color");
const _href = useModelState("href");
const _to = useModelState("to");
const _exact = useModelState("exact");
</script>