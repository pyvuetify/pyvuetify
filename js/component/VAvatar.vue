<template>
  <v-avatar
    :tag="_tag"
    :size="_size"
    :image="_image"
    :start="_start"
    :end="_end"
    :color="_color"
    :density="_density"
    :border="_border"
    :rounded="_rounded"
    :tile="_tile"
    :theme="_theme"
    :text="_text"
    :icon="_icon"
    :variant="_variant"
  >
    {{ children }}
  </v-avatar>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _size = useModelState("size");
const _image = useModelState("image");
const _start = useModelState("start");
const _end = useModelState("end");
const _color = useModelState("color");
const _density = useModelState("density");
const _border = useModelState("border");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _theme = useModelState("theme");
const _text = useModelState("text");
const _icon = useModelState("icon");
const _variant = useModelState("variant");
</script>