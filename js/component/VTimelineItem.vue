<template>
  <v-timeline-item
    :icon="_icon"
    :density="_density"
    :height="_height"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :width="_width"
    :elevation="_elevation"
    :rounded="_rounded"
    :tile="_tile"
    :tag="_tag"
    :size="_size"
    :iconColor="_icon_color"
    :side="_side"
    :dotColor="_dot_color"
    :fillDot="_fill_dot"
    :hideDot="_hide_dot"
    :hideOpposite="_hide_opposite"
    :lineInset="_line_inset"
  >
    {{ children }}
  </v-timeline-item>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _icon = useModelState("icon");
const _density = useModelState("density");
const _height = useModelState("height");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _width = useModelState("width");
const _elevation = useModelState("elevation");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _tag = useModelState("tag");
const _size = useModelState("size");
const _icon_color = useModelState("icon_color");
const _side = useModelState("side");
const _dot_color = useModelState("dot_color");
const _fill_dot = useModelState("fill_dot");
const _hide_dot = useModelState("hide_dot");
const _hide_opposite = useModelState("hide_opposite");
const _line_inset = useModelState("line_inset");
</script>