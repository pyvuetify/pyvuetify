<template>
  <v-badge
    :tag="_tag"
    :label="_label"
    :height="_height"
    :max="_max"
    :width="_width"
    :modelValue="_model_value"
    :location="_location"
    :color="_color"
    :floating="_floating"
    :rounded="_rounded"
    :tile="_tile"
    :theme="_theme"
    :icon="_icon"
    :bordered="_bordered"
    :content="_content"
    :dot="_dot"
    :inline="_inline"
    :offsetX="_offset_x"
    :offsetY="_offset_y"
    :textColor="_text_color"
    :transition="_transition"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
  >
    {{ children }}
  </v-badge>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _label = useModelState("label");
const _height = useModelState("height");
const _max = useModelState("max");
const _width = useModelState("width");
const _model_value = useModelState("model_value");
const _location = useModelState("location");
const _color = useModelState("color");
const _floating = useModelState("floating");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _theme = useModelState("theme");
const _icon = useModelState("icon");
const _bordered = useModelState("bordered");
const _content = useModelState("content");
const _dot = useModelState("dot");
const _inline = useModelState("inline");
const _offset_x = useModelState("offset_x");
const _offset_y = useModelState("offset_y");
const _text_color = useModelState("text_color");
const _transition = useModelState("transition");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
</script>