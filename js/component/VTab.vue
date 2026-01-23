<template>
  <v-tab
    :text="_text"
    :replace="_replace"
    :fixed="_fixed"
    :border="_border"
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
    :theme="_theme"
    :color="_color"
    :variant="_variant"
    :disabled="_disabled"
    :size="_size"
    :value="_value"
    :activeColor="_active_color"
    :baseColor="_base_color"
    :prependIcon="_prepend_icon"
    :appendIcon="_append_icon"
    :readonly="_readonly"
    :slim="_slim"
    :stacked="_stacked"
    :ripple="_ripple"
    :selectedClass="_selected_class"
    :loading="_loading"
    :href="_href"
    :exact="_exact"
    :to="_to"
    :spaced="_spaced"
    :direction="_direction"
    :inset="_inset"
    :sliderColor="_slider_color"
    :sliderTransitionDuration="_slider_transition_duration"
    :hideSlider="_hide_slider"
    :sliderTransition="_slider_transition"
  >
    {{ children }}
  </v-tab>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _text = useModelState("text");
const _replace = useModelState("replace");
const _fixed = useModelState("fixed");
const _border = useModelState("border");
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
const _theme = useModelState("theme");
const _color = useModelState("color");
const _variant = useModelState("variant");
const _disabled = useModelState("disabled");
const _size = useModelState("size");
const _value = useModelState("value");
const _active_color = useModelState("active_color");
const _base_color = useModelState("base_color");
const _prepend_icon = useModelState("prepend_icon");
const _append_icon = useModelState("append_icon");
const _readonly = useModelState("readonly");
const _slim = useModelState("slim");
const _stacked = useModelState("stacked");
const _ripple = useModelState("ripple");
const _selected_class = useModelState("selected_class");
const _loading = useModelState("loading");
const _href = useModelState("href");
const _exact = useModelState("exact");
const _to = useModelState("to");
const _spaced = useModelState("spaced");
const _direction = useModelState("direction");
const _inset = useModelState("inset");
const _slider_color = useModelState("slider_color");
const _slider_transition_duration = useModelState("slider_transition_duration");
const _hide_slider = useModelState("hide_slider");
const _slider_transition = useModelState("slider_transition");
</script>