<template>
  <v-expansion-panel-title
    :height="_height"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :width="_width"
    :static="_static"
    :color="_color"
    :readonly="_readonly"
    :ripple="_ripple"
    :expandIcon="_expand_icon"
    :collapseIcon="_collapse_icon"
    :hideActions="_hide_actions"
    :focusable="_focusable"
  >
    {{ children }}
  </v-expansion-panel-title>
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
const _static = useModelState("static");
const _color = useModelState("color");
const _readonly = useModelState("readonly");
const _ripple = useModelState("ripple");
const _expand_icon = useModelState("expand_icon");
const _collapse_icon = useModelState("collapse_icon");
const _hide_actions = useModelState("hide_actions");
const _focusable = useModelState("focusable");
</script>