<template>
  <v-pagination
    :length="_length"
    :tag="_tag"
    :disabled="_disabled"
    :size="_size"
    :ariaLabel="_aria_label"
    :modelValue="_model_value"
    :start="_start"
    :color="_color"
    :density="_density"
    :border="_border"
    :elevation="_elevation"
    :rounded="_rounded"
    :tile="_tile"
    :theme="_theme"
    :variant="_variant"
    :activeColor="_active_color"
    :nextIcon="_next_icon"
    :prevIcon="_prev_icon"
    :firstIcon="_first_icon"
    :lastIcon="_last_icon"
    :totalVisible="_total_visible"
    :pageAriaLabel="_page_aria_label"
    :currentPageAriaLabel="_current_page_aria_label"
    :firstAriaLabel="_first_aria_label"
    :previousAriaLabel="_previous_aria_label"
    :nextAriaLabel="_next_aria_label"
    :lastAriaLabel="_last_aria_label"
    :ellipsis="_ellipsis"
    :showFirstLastPage="_show_first_last_page"
  >
    {{ children }}
  </v-pagination>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _length = useModelState("length");
const _tag = useModelState("tag");
const _disabled = useModelState("disabled");
const _size = useModelState("size");
const _aria_label = useModelState("aria_label");
const _model_value = useModelState("model_value");
const _start = useModelState("start");
const _color = useModelState("color");
const _density = useModelState("density");
const _border = useModelState("border");
const _elevation = useModelState("elevation");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _theme = useModelState("theme");
const _variant = useModelState("variant");
const _active_color = useModelState("active_color");
const _next_icon = useModelState("next_icon");
const _prev_icon = useModelState("prev_icon");
const _first_icon = useModelState("first_icon");
const _last_icon = useModelState("last_icon");
const _total_visible = useModelState("total_visible");
const _page_aria_label = useModelState("page_aria_label");
const _current_page_aria_label = useModelState("current_page_aria_label");
const _first_aria_label = useModelState("first_aria_label");
const _previous_aria_label = useModelState("previous_aria_label");
const _next_aria_label = useModelState("next_aria_label");
const _last_aria_label = useModelState("last_aria_label");
const _ellipsis = useModelState("ellipsis");
const _show_first_last_page = useModelState("show_first_last_page");
</script>