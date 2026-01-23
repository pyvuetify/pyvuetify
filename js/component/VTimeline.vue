<template>
  <v-timeline
    :tag="_tag"
    :align="_align"
    :size="_size"
    :density="_density"
    :theme="_theme"
    :direction="_direction"
    :iconColor="_icon_color"
    :justify="_justify"
    :lineThickness="_line_thickness"
    :lineColor="_line_color"
    :dotColor="_dot_color"
    :fillDot="_fill_dot"
    :hideOpposite="_hide_opposite"
    :lineInset="_line_inset"
    :side="_side"
    :truncateLine="_truncate_line"
  >
    {{ children }}
  </v-timeline>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _align = useModelState("align");
const _size = useModelState("size");
const _density = useModelState("density");
const _theme = useModelState("theme");
const _direction = useModelState("direction");
const _icon_color = useModelState("icon_color");
const _justify = useModelState("justify");
const _line_thickness = useModelState("line_thickness");
const _line_color = useModelState("line_color");
const _dot_color = useModelState("dot_color");
const _fill_dot = useModelState("fill_dot");
const _hide_opposite = useModelState("hide_opposite");
const _line_inset = useModelState("line_inset");
const _side = useModelState("side");
const _truncate_line = useModelState("truncate_line");
</script>