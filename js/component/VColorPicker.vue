<template>
  <v-color-picker
    :title="_title"
    :border="_border"
    :modelValue="_model_value"
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
    :disabled="_disabled"
    :bgColor="_bg_color"
    :mode="_mode"
    :canvasHeight="_canvas_height"
    :dotSize="_dot_size"
    :hideCanvas="_hide_canvas"
    :hideSliders="_hide_sliders"
    :hideInputs="_hide_inputs"
    :modes="_modes"
    :showSwatches="_show_swatches"
    :swatchesMaxHeight="_swatches_max_height"
    :divided="_divided"
    :landscape="_landscape"
    :hideHeader="_hide_header"
    :hideTitle="_hide_title"
    :hideEyeDropper="_hide_eye_dropper"
    :eyeDropperIcon="_eye_dropper_icon"
    :swatches="_swatches"
  >
    {{ children }}
  </v-color-picker>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _title = useModelState("title");
const _border = useModelState("border");
const _model_value = useModelState("model_value");
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
const _disabled = useModelState("disabled");
const _bg_color = useModelState("bg_color");
const _mode = useModelState("mode");
const _canvas_height = useModelState("canvas_height");
const _dot_size = useModelState("dot_size");
const _hide_canvas = useModelState("hide_canvas");
const _hide_sliders = useModelState("hide_sliders");
const _hide_inputs = useModelState("hide_inputs");
const _modes = useModelState("modes");
const _show_swatches = useModelState("show_swatches");
const _swatches_max_height = useModelState("swatches_max_height");
const _divided = useModelState("divided");
const _landscape = useModelState("landscape");
const _hide_header = useModelState("hide_header");
const _hide_title = useModelState("hide_title");
const _hide_eye_dropper = useModelState("hide_eye_dropper");
const _eye_dropper_icon = useModelState("eye_dropper_icon");
const _swatches = useModelState("swatches");
</script>