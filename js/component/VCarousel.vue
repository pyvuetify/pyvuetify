<template>
  <v-carousel
    :tag="_tag"
    :reverse="_reverse"
    :progress="_progress"
    :disabled="_disabled"
    :height="_height"
    :modelValue="_model_value"
    :color="_color"
    :theme="_theme"
    :selectedClass="_selected_class"
    :mandatory="_mandatory"
    :direction="_direction"
    :interval="_interval"
    :cycle="_cycle"
    :delimiterIcon="_delimiter_icon"
    :hideDelimiters="_hide_delimiters"
    :hideDelimiterBackground="_hide_delimiter_background"
    :continuous="_continuous"
    :nextIcon="_next_icon"
    :prevIcon="_prev_icon"
    :showArrows="_show_arrows"
    :touch="_touch"
    :crossfade="_crossfade"
    :transitionDuration="_transition_duration"
    :verticalArrows="_vertical_arrows"
    :verticalDelimiters="_vertical_delimiters"
  >
    {{ children }}
  </v-carousel>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _reverse = useModelState("reverse");
const _progress = useModelState("progress");
const _disabled = useModelState("disabled");
const _height = useModelState("height");
const _model_value = useModelState("model_value");
const _color = useModelState("color");
const _theme = useModelState("theme");
const _selected_class = useModelState("selected_class");
const _mandatory = useModelState("mandatory");
const _direction = useModelState("direction");
const _interval = useModelState("interval");
const _cycle = useModelState("cycle");
const _delimiter_icon = useModelState("delimiter_icon");
const _hide_delimiters = useModelState("hide_delimiters");
const _hide_delimiter_background = useModelState("hide_delimiter_background");
const _continuous = useModelState("continuous");
const _next_icon = useModelState("next_icon");
const _prev_icon = useModelState("prev_icon");
const _show_arrows = useModelState("show_arrows");
const _touch = useModelState("touch");
const _crossfade = useModelState("crossfade");
const _transition_duration = useModelState("transition_duration");
const _vertical_arrows = useModelState("vertical_arrows");
const _vertical_delimiters = useModelState("vertical_delimiters");
</script>