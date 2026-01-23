<template>
  <v-banner
    :tag="_tag"
    :height="_height"
    :width="_width"
    :location="_location"
    :color="_color"
    :density="_density"
    :border="_border"
    :elevation="_elevation"
    :rounded="_rounded"
    :tile="_tile"
    :theme="_theme"
    :text="_text"
    :icon="_icon"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :avatar="_avatar"
    :bgColor="_bg_color"
    :stacked="_stacked"
    :sticky="_sticky"
    :mobile="_mobile"
    :mobileBreakpoint="_mobile_breakpoint"
    :position="_position"
    :lines="_lines"
  >
    {{ children }}
  </v-banner>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _height = useModelState("height");
const _width = useModelState("width");
const _location = useModelState("location");
const _color = useModelState("color");
const _density = useModelState("density");
const _border = useModelState("border");
const _elevation = useModelState("elevation");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _theme = useModelState("theme");
const _text = useModelState("text");
const _icon = useModelState("icon");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _avatar = useModelState("avatar");
const _bg_color = useModelState("bg_color");
const _stacked = useModelState("stacked");
const _sticky = useModelState("sticky");
const _mobile = useModelState("mobile");
const _mobile_breakpoint = useModelState("mobile_breakpoint");
const _position = useModelState("position");
const _lines = useModelState("lines");
</script>