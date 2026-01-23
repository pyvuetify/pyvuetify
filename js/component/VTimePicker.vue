<template>
  <v-time-picker
    :title="_title"
    :border="_border"
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
    :rounded="_rounded"
    :tile="_tile"
    :tag="_tag"
    :theme="_theme"
    :color="_color"
    :variant="_variant"
    :disabled="_disabled"
    :max="_max"
    :min="_min"
    :readonly="_readonly"
    :bgColor="_bg_color"
    :divided="_divided"
    :hideHeader="_hide_header"
    :hideTitle="_hide_title"
    :viewMode="_view_mode"
    :scrollable="_scrollable"
    :format="_format"
    :period="_period"
    :useSeconds="_use_seconds"
    :allowedHours="_allowed_hours"
    :allowedMinutes="_allowed_minutes"
    :allowedSeconds="_allowed_seconds"
  >
    {{ children }}
  </v-time-picker>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _title = useModelState("title");
const _border = useModelState("border");
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
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _tag = useModelState("tag");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _variant = useModelState("variant");
const _disabled = useModelState("disabled");
const _max = useModelState("max");
const _min = useModelState("min");
const _readonly = useModelState("readonly");
const _bg_color = useModelState("bg_color");
const _divided = useModelState("divided");
const _hide_header = useModelState("hide_header");
const _hide_title = useModelState("hide_title");
const _view_mode = useModelState("view_mode");
const _scrollable = useModelState("scrollable");
const _format = useModelState("format");
const _period = useModelState("period");
const _use_seconds = useModelState("use_seconds");
const _allowed_hours = useModelState("allowed_hours");
const _allowed_minutes = useModelState("allowed_minutes");
const _allowed_seconds = useModelState("allowed_seconds");
</script>