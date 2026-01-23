<template>
  <v-app-bar
    :flat="_flat"
    :tag="_tag"
    :name="_name"
    :title="_title"
    :height="_height"
    :image="_image"
    :collapse="_collapse"
    :modelValue="_model_value"
    :location="_location"
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
    :order="_order"
    :scrollTarget="_scroll_target"
    :scrollThreshold="_scroll_threshold"
    :scrollBehavior="_scroll_behavior"
  >
    {{ children }}
  </v-app-bar>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _flat = useModelState("flat");
const _tag = useModelState("tag");
const _name = useModelState("name");
const _title = useModelState("title");
const _height = useModelState("height");
const _image = useModelState("image");
const _collapse = useModelState("collapse");
const _model_value = useModelState("model_value");
const _location = useModelState("location");
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
const _order = useModelState("order");
const _scroll_target = useModelState("scroll_target");
const _scroll_threshold = useModelState("scroll_threshold");
const _scroll_behavior = useModelState("scroll_behavior");
</script>