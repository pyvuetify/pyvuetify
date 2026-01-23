<template>
  <v-fab
    :symbol="_symbol"
    :text="_text"
    :flat="_flat"
    :replace="_replace"
    :border="_border"
    :icon="_icon"
    :modelValue="_model_value"
    :density="_density"
    :height="_height"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :width="_width"
    :elevation="_elevation"
    :location="_location"
    :position="_position"
    :absolute="_absolute"
    :rounded="_rounded"
    :tile="_tile"
    :tag="_tag"
    :theme="_theme"
    :color="_color"
    :variant="_variant"
    :name="_name"
    :disabled="_disabled"
    :size="_size"
    :value="_value"
    :layout="_layout"
    :active="_active"
    :activeColor="_active_color"
    :baseColor="_base_color"
    :prependIcon="_prepend_icon"
    :appendIcon="_append_icon"
    :block="_block"
    :readonly="_readonly"
    :slim="_slim"
    :stacked="_stacked"
    :ripple="_ripple"
    :selectedClass="_selected_class"
    :loading="_loading"
    :href="_href"
    :exact="_exact"
    :to="_to"
    :offset="_offset"
    :transition="_transition"
    :app="_app"
    :appear="_appear"
    :extended="_extended"
    :order="_order"
  >
    {{ children }}
  </v-fab>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _symbol = useModelState("symbol");
const _text = useModelState("text");
const _flat = useModelState("flat");
const _replace = useModelState("replace");
const _border = useModelState("border");
const _icon = useModelState("icon");
const _model_value = useModelState("model_value");
const _density = useModelState("density");
const _height = useModelState("height");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _width = useModelState("width");
const _elevation = useModelState("elevation");
const _location = useModelState("location");
const _position = useModelState("position");
const _absolute = useModelState("absolute");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _tag = useModelState("tag");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _variant = useModelState("variant");
const _name = useModelState("name");
const _disabled = useModelState("disabled");
const _size = useModelState("size");
const _value = useModelState("value");
const _layout = useModelState("layout");
const _active = useModelState("active");
const _active_color = useModelState("active_color");
const _base_color = useModelState("base_color");
const _prepend_icon = useModelState("prepend_icon");
const _append_icon = useModelState("append_icon");
const _block = useModelState("block");
const _readonly = useModelState("readonly");
const _slim = useModelState("slim");
const _stacked = useModelState("stacked");
const _ripple = useModelState("ripple");
const _selected_class = useModelState("selected_class");
const _loading = useModelState("loading");
const _href = useModelState("href");
const _exact = useModelState("exact");
const _to = useModelState("to");
const _offset = useModelState("offset");
const _transition = useModelState("transition");
const _app = useModelState("app");
const _appear = useModelState("appear");
const _extended = useModelState("extended");
const _order = useModelState("order");
</script>