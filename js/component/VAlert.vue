<template>
  <v-alert
    :style="_style"
    :title="_title"
    :text="_text"
    :border="_border"
    :border-color="_border_color"
    :closable="_closable"
    :close-icon="_close_icon"
    :type="_type"
    :close-label="_close_label"
    :icon="_icon"
    :model-value="_model_value"
    :prominent="_prominent"
    :density="_density"
    :height="_height"
    :max-height="_max_height"
    :max-width="_max_width"
    :min-height="_min_height"
    :min-width="_min_width"
    :width="_width"
    :elevation="_elevation"
    :icon-sizes="_icon_sizes"
    :icon-size="_icon_size"
    :location="_location"
    :position="_position"
    :rounded="_rounded"
    :tile="_tile"
    :tag="_tag"
    :theme="_theme"
    :color="_color"
    :variant="_variant"
  >
    {{ _children }}
  </v-alert>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const _children = useModelState("children");
const _style = useModelState("style");
const _title = useModelState("title");
const _text = useModelState("text");
const _border = useModelState("border");
const _border_color = useModelState("border_color");
const _closable = useModelState("closable");
const _close_icon = useModelState("close_icon");
const _type = useModelState("type");
const _close_label = useModelState("close_label");
const _icon = useModelState("icon");
const _model_value = useModelState("model_value");
const _prominent = useModelState("prominent");
const _density = useModelState("density");
const _height = useModelState("height");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _width = useModelState("width");
const _elevation = useModelState("elevation");
const _icon_sizes = useModelState("icon_sizes");
const _icon_size = useModelState("icon_size");
const _location = useModelState("location");
const _position = useModelState("position");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _tag = useModelState("tag");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _variant = useModelState("variant");
</script>