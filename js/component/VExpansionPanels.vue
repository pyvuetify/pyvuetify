<template>
  <v-expansion-panels
    :flat="_flat"
    :modelValue="_model_value"
    :elevation="_elevation"
    :static="_static"
    :rounded="_rounded"
    :tile="_tile"
    :tag="_tag"
    :theme="_theme"
    :color="_color"
    :variant="_variant"
    :disabled="_disabled"
    :max="_max"
    :multiple="_multiple"
    :readonly="_readonly"
    :ripple="_ripple"
    :selectedClass="_selected_class"
    :eager="_eager"
    :bgColor="_bg_color"
    :expandIcon="_expand_icon"
    :collapseIcon="_collapse_icon"
    :mandatory="_mandatory"
    :hideActions="_hide_actions"
    :focusable="_focusable"
  >
    {{ children }}
  </v-expansion-panels>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _flat = useModelState("flat");
const _model_value = useModelState("model_value");
const _elevation = useModelState("elevation");
const _static = useModelState("static");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _tag = useModelState("tag");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _variant = useModelState("variant");
const _disabled = useModelState("disabled");
const _max = useModelState("max");
const _multiple = useModelState("multiple");
const _readonly = useModelState("readonly");
const _ripple = useModelState("ripple");
const _selected_class = useModelState("selected_class");
const _eager = useModelState("eager");
const _bg_color = useModelState("bg_color");
const _expand_icon = useModelState("expand_icon");
const _collapse_icon = useModelState("collapse_icon");
const _mandatory = useModelState("mandatory");
const _hide_actions = useModelState("hide_actions");
const _focusable = useModelState("focusable");
</script>