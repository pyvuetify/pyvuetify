<template>
  <v-toolbar
    :flat="_flat"
    :tag="_tag"
    :title="_title"
    :height="_height"
    :image="_image"
    :collapse="_collapse"
    :absolute="_absolute"
    :collapsePosition="_collapse_position"
    :color="_color"
    :density="_density"
    :extended="_extended"
    :extensionHeight="_extension_height"
    :floating="_floating"
    :border="_border"
    :elevation="_elevation"
    :rounded="_rounded"
    :tile="_tile"
    :theme="_theme"
  >
    {{ children }}
  </v-toolbar>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _flat = useModelState("flat");
const _tag = useModelState("tag");
const _title = useModelState("title");
const _height = useModelState("height");
const _image = useModelState("image");
const _collapse = useModelState("collapse");
const _absolute = useModelState("absolute");
const _collapse_position = useModelState("collapse_position");
const _color = useModelState("color");
const _density = useModelState("density");
const _extended = useModelState("extended");
const _extension_height = useModelState("extension_height");
const _floating = useModelState("floating");
const _border = useModelState("border");
const _elevation = useModelState("elevation");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _theme = useModelState("theme");
</script>