<template>
  <v-system-bar
    :height="_height"
    :elevation="_elevation"
    :absolute="_absolute"
    :rounded="_rounded"
    :tile="_tile"
    :tag="_tag"
    :theme="_theme"
    :color="_color"
    :name="_name"
    :order="_order"
    :window="_window"
  >
    {{ children }}
  </v-system-bar>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _height = useModelState("height");
const _elevation = useModelState("elevation");
const _absolute = useModelState("absolute");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _tag = useModelState("tag");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _name = useModelState("name");
const _order = useModelState("order");
const _window = useModelState("window");
</script>