<template>
  <v-progress-linear
    :modelValue="_model_value"
    :reverse="_reverse"
    :height="_height"
    :location="_location"
    :absolute="_absolute"
    :rounded="_rounded"
    :tile="_tile"
    :tag="_tag"
    :theme="_theme"
    :color="_color"
    :indeterminate="_indeterminate"
    :max="_max"
    :active="_active"
    :bgColor="_bg_color"
    :opacity="_opacity"
    :stream="_stream"
    :bgOpacity="_bg_opacity"
    :bufferValue="_buffer_value"
    :bufferColor="_buffer_color"
    :bufferOpacity="_buffer_opacity"
    :clickable="_clickable"
    :striped="_striped"
    :roundedBar="_rounded_bar"
    :chunkCount="_chunk_count"
    :chunkWidth="_chunk_width"
    :chunkGap="_chunk_gap"
  >
    {{ children }}
  </v-progress-linear>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _model_value = useModelState("model_value");
const _reverse = useModelState("reverse");
const _height = useModelState("height");
const _location = useModelState("location");
const _absolute = useModelState("absolute");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _tag = useModelState("tag");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _indeterminate = useModelState("indeterminate");
const _max = useModelState("max");
const _active = useModelState("active");
const _bg_color = useModelState("bg_color");
const _opacity = useModelState("opacity");
const _stream = useModelState("stream");
const _bg_opacity = useModelState("bg_opacity");
const _buffer_value = useModelState("buffer_value");
const _buffer_color = useModelState("buffer_color");
const _buffer_opacity = useModelState("buffer_opacity");
const _clickable = useModelState("clickable");
const _striped = useModelState("striped");
const _rounded_bar = useModelState("rounded_bar");
const _chunk_count = useModelState("chunk_count");
const _chunk_width = useModelState("chunk_width");
const _chunk_gap = useModelState("chunk_gap");
</script>