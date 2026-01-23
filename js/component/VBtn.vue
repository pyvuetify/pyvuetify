<template>
  <v-btn
    :symbol="_symbol"
    :flat="_flat"
    :replace="_replace"
    :tag="_tag"
    :disabled="_disabled"
    :height="_height"
    :size="_size"
    :value="_value"
    :width="_width"
    :location="_location"
    :color="_color"
    :density="_density"
    :border="_border"
    :elevation="_elevation"
    :rounded="_rounded"
    :tile="_tile"
    :theme="_theme"
    :text="_text"
    :icon="_icon"
    :variant="_variant"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :stacked="_stacked"
    :position="_position"
    :baseColor="_base_color"
    :active="_active"
    :selectedClass="_selected_class"
    :block="_block"
    :activeColor="_active_color"
    :href="_href"
    :to="_to"
    :exact="_exact"
    :prependIcon="_prepend_icon"
    :appendIcon="_append_icon"
    :readonly="_readonly"
    :slim="_slim"
    :ripple="_ripple"
    :loading="_loading"
    :spaced="_spaced"
  >
    {{ children }}
  </v-btn>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _symbol = useModelState("symbol");
const _flat = useModelState("flat");
const _replace = useModelState("replace");
const _tag = useModelState("tag");
const _disabled = useModelState("disabled");
const _height = useModelState("height");
const _size = useModelState("size");
const _value = useModelState("value");
const _width = useModelState("width");
const _location = useModelState("location");
const _color = useModelState("color");
const _density = useModelState("density");
const _border = useModelState("border");
const _elevation = useModelState("elevation");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _theme = useModelState("theme");
const _text = useModelState("text");
const _icon = useModelState("icon");
const _variant = useModelState("variant");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _stacked = useModelState("stacked");
const _position = useModelState("position");
const _base_color = useModelState("base_color");
const _active = useModelState("active");
const _selected_class = useModelState("selected_class");
const _block = useModelState("block");
const _active_color = useModelState("active_color");
const _href = useModelState("href");
const _to = useModelState("to");
const _exact = useModelState("exact");
const _prepend_icon = useModelState("prepend_icon");
const _append_icon = useModelState("append_icon");
const _readonly = useModelState("readonly");
const _slim = useModelState("slim");
const _ripple = useModelState("ripple");
const _loading = useModelState("loading");
const _spaced = useModelState("spaced");
</script>