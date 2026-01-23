<template>
  <v-treeview-item
    :title="_title"
    :replace="_replace"
    :link="_link"
    :border="_border"
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
    :value="_value"
    :active="_active"
    :activeColor="_active_color"
    :baseColor="_base_color"
    :prependIcon="_prepend_icon"
    :appendIcon="_append_icon"
    :slim="_slim"
    :ripple="_ripple"
    :loading="_loading"
    :href="_href"
    :exact="_exact"
    :to="_to"
    :subtitle="_subtitle"
    :activeClass="_active_class"
    :lines="_lines"
    :prependGap="_prepend_gap"
    :nav="_nav"
    :hideActions="_hide_actions"
    :appendAvatar="_append_avatar"
    :prependAvatar="_prepend_avatar"
    :hasCustomPrepend="_has_custom_prepend"
    :toggleIcon="_toggle_icon"
    :indentLines="_indent_lines"
  >
    {{ children }}
  </v-treeview-item>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _title = useModelState("title");
const _replace = useModelState("replace");
const _link = useModelState("link");
const _border = useModelState("border");
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
const _value = useModelState("value");
const _active = useModelState("active");
const _active_color = useModelState("active_color");
const _base_color = useModelState("base_color");
const _prepend_icon = useModelState("prepend_icon");
const _append_icon = useModelState("append_icon");
const _slim = useModelState("slim");
const _ripple = useModelState("ripple");
const _loading = useModelState("loading");
const _href = useModelState("href");
const _exact = useModelState("exact");
const _to = useModelState("to");
const _subtitle = useModelState("subtitle");
const _active_class = useModelState("active_class");
const _lines = useModelState("lines");
const _prepend_gap = useModelState("prepend_gap");
const _nav = useModelState("nav");
const _hide_actions = useModelState("hide_actions");
const _append_avatar = useModelState("append_avatar");
const _prepend_avatar = useModelState("prepend_avatar");
const _has_custom_prepend = useModelState("has_custom_prepend");
const _toggle_icon = useModelState("toggle_icon");
const _indent_lines = useModelState("indent_lines");
</script>