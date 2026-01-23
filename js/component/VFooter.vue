<template>
  <v-footer
    :border="_border"
    :height="_height"
    :elevation="_elevation"
    :absolute="_absolute"
    :rounded="_rounded"
    :tile="_tile"
    :tag="_tag"
    :theme="_theme"
    :color="_color"
    :name="_name"
    :app="_app"
    :order="_order"
  >
    {{ children }}
  </v-footer>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _border = useModelState("border");
const _height = useModelState("height");
const _elevation = useModelState("elevation");
const _absolute = useModelState("absolute");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _tag = useModelState("tag");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _name = useModelState("name");
const _app = useModelState("app");
const _order = useModelState("order");
</script>