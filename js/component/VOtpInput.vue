<template>
  <v-otp-input
    :length="_length"
    :type="_type"
    :error="_error"
    :label="_label"
    :disabled="_disabled"
    :height="_height"
    :placeholder="_placeholder"
    :width="_width"
    :autofocus="_autofocus"
    :modelValue="_model_value"
    :color="_color"
    :rounded="_rounded"
    :theme="_theme"
    :variant="_variant"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :bgColor="_bg_color"
    :baseColor="_base_color"
    :divider="_divider"
    :loading="_loading"
    :focused="_focused"
    :focusAll="_focus_all"
  >
    {{ children }}
  </v-otp-input>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _length = useModelState("length");
const _type = useModelState("type");
const _error = useModelState("error");
const _label = useModelState("label");
const _disabled = useModelState("disabled");
const _height = useModelState("height");
const _placeholder = useModelState("placeholder");
const _width = useModelState("width");
const _autofocus = useModelState("autofocus");
const _model_value = useModelState("model_value");
const _color = useModelState("color");
const _rounded = useModelState("rounded");
const _theme = useModelState("theme");
const _variant = useModelState("variant");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _bg_color = useModelState("bg_color");
const _base_color = useModelState("base_color");
const _divider = useModelState("divider");
const _loading = useModelState("loading");
const _focused = useModelState("focused");
const _focus_all = useModelState("focus_all");
</script>