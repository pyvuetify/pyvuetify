<template>
  <v-alert
    :title="_title"
    :text="_text"
    :border="_border"
    :borderColor="_border_color"
    :closable="_closable"
    :closeIcon="_close_icon"
    :type="_type"
    :closeLabel="_close_label"
    :icon="_icon"
    :modelValue="_model_value"
    :prominent="_prominent"
    :density="_density"
    :height="_height"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :width="_width"
    :elevation="_elevation"
    :iconSizes="_icon_sizes"
    :iconSize="_icon_size"
    :location="_location"
    :position="_position"
    :rounded="_rounded"
    :tile="_tile"
    :tag="_tag"
    :theme="_theme"
    :color="_color"
    :variant="_variant"
  >
    {{ children }}
  </v-alert>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
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