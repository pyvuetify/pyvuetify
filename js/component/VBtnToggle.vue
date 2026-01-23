<template>
  <v-btn-toggle
    :tag="_tag"
    :disabled="_disabled"
    :max="_max"
    :multiple="_multiple"
    :modelValue="_model_value"
    :color="_color"
    :density="_density"
    :border="_border"
    :elevation="_elevation"
    :rounded="_rounded"
    :tile="_tile"
    :theme="_theme"
    :variant="_variant"
    :baseColor="_base_color"
    :selectedClass="_selected_class"
    :mandatory="_mandatory"
    :divided="_divided"
    :direction="_direction"
  >
    {{ children }}
  </v-btn-toggle>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _disabled = useModelState("disabled");
const _max = useModelState("max");
const _multiple = useModelState("multiple");
const _model_value = useModelState("model_value");
const _color = useModelState("color");
const _density = useModelState("density");
const _border = useModelState("border");
const _elevation = useModelState("elevation");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _theme = useModelState("theme");
const _variant = useModelState("variant");
const _base_color = useModelState("base_color");
const _selected_class = useModelState("selected_class");
const _mandatory = useModelState("mandatory");
const _divided = useModelState("divided");
const _direction = useModelState("direction");
</script>