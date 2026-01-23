<template>
  <v-icon-btn
    :text="_text"
    :border="_border"
    :icon="_icon"
    :height="_height"
    :width="_width"
    :elevation="_elevation"
    :iconSizes="_icon_sizes"
    :iconSize="_icon_size"
    :rounded="_rounded"
    :tile="_tile"
    :tag="_tag"
    :theme="_theme"
    :color="_color"
    :variant="_variant"
    :disabled="_disabled"
    :size="_size"
    :active="_active"
    :activeColor="_active_color"
    :readonly="_readonly"
    :loading="_loading"
    :opacity="_opacity"
    :iconColor="_icon_color"
    :baseVariant="_base_variant"
    :hideOverlay="_hide_overlay"
    :rotate="_rotate"
    :sizes="_sizes"
    :activeIcon="_active_icon"
    :activeVariant="_active_variant"
  >
    {{ children }}
  </v-icon-btn>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _text = useModelState("text");
const _border = useModelState("border");
const _icon = useModelState("icon");
const _height = useModelState("height");
const _width = useModelState("width");
const _elevation = useModelState("elevation");
const _icon_sizes = useModelState("icon_sizes");
const _icon_size = useModelState("icon_size");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _tag = useModelState("tag");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _variant = useModelState("variant");
const _disabled = useModelState("disabled");
const _size = useModelState("size");
const _active = useModelState("active");
const _active_color = useModelState("active_color");
const _readonly = useModelState("readonly");
const _loading = useModelState("loading");
const _opacity = useModelState("opacity");
const _icon_color = useModelState("icon_color");
const _base_variant = useModelState("base_variant");
const _hide_overlay = useModelState("hide_overlay");
const _rotate = useModelState("rotate");
const _sizes = useModelState("sizes");
const _active_icon = useModelState("active_icon");
const _active_variant = useModelState("active_variant");
</script>