<template>
  <v-chip
    :filter="_filter"
    :replace="_replace"
    :link="_link"
    :tag="_tag"
    :label="_label"
    :disabled="_disabled"
    :size="_size"
    :value="_value"
    :draggable="_draggable"
    :modelValue="_model_value"
    :color="_color"
    :density="_density"
    :border="_border"
    :elevation="_elevation"
    :rounded="_rounded"
    :tile="_tile"
    :theme="_theme"
    :text="_text"
    :variant="_variant"
    :baseColor="_base_color"
    :selectedClass="_selected_class"
    :activeClass="_active_class"
    :href="_href"
    :to="_to"
    :exact="_exact"
    :prependIcon="_prepend_icon"
    :appendIcon="_append_icon"
    :ripple="_ripple"
    :appendAvatar="_append_avatar"
    :prependAvatar="_prepend_avatar"
    :closable="_closable"
    :closeIcon="_close_icon"
    :closeLabel="_close_label"
    :filterIcon="_filter_icon"
    :pill="_pill"
  >
    {{ children }}
  </v-chip>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _filter = useModelState("filter");
const _replace = useModelState("replace");
const _link = useModelState("link");
const _tag = useModelState("tag");
const _label = useModelState("label");
const _disabled = useModelState("disabled");
const _size = useModelState("size");
const _value = useModelState("value");
const _draggable = useModelState("draggable");
const _model_value = useModelState("model_value");
const _color = useModelState("color");
const _density = useModelState("density");
const _border = useModelState("border");
const _elevation = useModelState("elevation");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _theme = useModelState("theme");
const _text = useModelState("text");
const _variant = useModelState("variant");
const _base_color = useModelState("base_color");
const _selected_class = useModelState("selected_class");
const _active_class = useModelState("active_class");
const _href = useModelState("href");
const _to = useModelState("to");
const _exact = useModelState("exact");
const _prepend_icon = useModelState("prepend_icon");
const _append_icon = useModelState("append_icon");
const _ripple = useModelState("ripple");
const _append_avatar = useModelState("append_avatar");
const _prepend_avatar = useModelState("prepend_avatar");
const _closable = useModelState("closable");
const _close_icon = useModelState("close_icon");
const _close_label = useModelState("close_label");
const _filter_icon = useModelState("filter_icon");
const _pill = useModelState("pill");
</script>