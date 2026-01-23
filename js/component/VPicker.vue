<template>
  <v-picker
    :tag="_tag"
    :title="_title"
    :height="_height"
    :width="_width"
    :location="_location"
    :color="_color"
    :border="_border"
    :elevation="_elevation"
    :rounded="_rounded"
    :tile="_tile"
    :theme="_theme"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :bgColor="_bg_color"
    :position="_position"
    :divided="_divided"
    :hideHeader="_hide_header"
    :landscape="_landscape"
    :hideTitle="_hide_title"
  >
    {{ children }}
  </v-picker>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _title = useModelState("title");
const _height = useModelState("height");
const _width = useModelState("width");
const _location = useModelState("location");
const _color = useModelState("color");
const _border = useModelState("border");
const _elevation = useModelState("elevation");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _theme = useModelState("theme");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _bg_color = useModelState("bg_color");
const _position = useModelState("position");
const _divided = useModelState("divided");
const _hide_header = useModelState("hide_header");
const _landscape = useModelState("landscape");
const _hide_title = useModelState("hide_title");
</script>