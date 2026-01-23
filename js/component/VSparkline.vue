<template>
  <v-sparkline
    :type="_type"
    :modelValue="_model_value"
    :fill="_fill"
    :height="_height"
    :width="_width"
    :color="_color"
    :labels="_labels"
    :max="_max"
    :min="_min"
    :id="_id"
    :itemValue="_item_value"
    :gradient="_gradient"
    :autoLineWidth="_auto_line_width"
    :autoDraw="_auto_draw"
    :autoDrawDuration="_auto_draw_duration"
    :autoDrawEasing="_auto_draw_easing"
    :gradientDirection="_gradient_direction"
    :labelSize="_label_size"
    :lineWidth="_line_width"
    :padding="_padding"
    :showLabels="_show_labels"
    :smooth="_smooth"
  >
    {{ children }}
  </v-sparkline>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _type = useModelState("type");
const _model_value = useModelState("model_value");
const _fill = useModelState("fill");
const _height = useModelState("height");
const _width = useModelState("width");
const _color = useModelState("color");
const _labels = useModelState("labels");
const _max = useModelState("max");
const _min = useModelState("min");
const _id = useModelState("id");
const _item_value = useModelState("item_value");
const _gradient = useModelState("gradient");
const _auto_line_width = useModelState("auto_line_width");
const _auto_draw = useModelState("auto_draw");
const _auto_draw_duration = useModelState("auto_draw_duration");
const _auto_draw_easing = useModelState("auto_draw_easing");
const _gradient_direction = useModelState("gradient_direction");
const _label_size = useModelState("label_size");
const _line_width = useModelState("line_width");
const _padding = useModelState("padding");
const _show_labels = useModelState("show_labels");
const _smooth = useModelState("smooth");
</script>