<template>
  <v-bottom-navigation
    :tag="_tag"
    :name="_name"
    :mode="_mode"
    :disabled="_disabled"
    :height="_height"
    :max="_max"
    :multiple="_multiple"
    :modelValue="_model_value"
    :absolute="_absolute"
    :color="_color"
    :density="_density"
    :border="_border"
    :elevation="_elevation"
    :rounded="_rounded"
    :tile="_tile"
    :theme="_theme"
    :order="_order"
    :bgColor="_bg_color"
    :baseColor="_base_color"
    :grow="_grow"
    :active="_active"
    :selectedClass="_selected_class"
    :mandatory="_mandatory"
  >
    {{ children }}
  </v-bottom-navigation>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _name = useModelState("name");
const _mode = useModelState("mode");
const _disabled = useModelState("disabled");
const _height = useModelState("height");
const _max = useModelState("max");
const _multiple = useModelState("multiple");
const _model_value = useModelState("model_value");
const _absolute = useModelState("absolute");
const _color = useModelState("color");
const _density = useModelState("density");
const _border = useModelState("border");
const _elevation = useModelState("elevation");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _theme = useModelState("theme");
const _order = useModelState("order");
const _bg_color = useModelState("bg_color");
const _base_color = useModelState("base_color");
const _grow = useModelState("grow");
const _active = useModelState("active");
const _selected_class = useModelState("selected_class");
const _mandatory = useModelState("mandatory");
</script>