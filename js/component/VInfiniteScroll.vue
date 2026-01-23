<template>
  <v-infinite-scroll
    :height="_height"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :width="_width"
    :tag="_tag"
    :color="_color"
    :mode="_mode"
    :direction="_direction"
    :side="_side"
    :margin="_margin"
    :loadMoreText="_load_more_text"
    :emptyText="_empty_text"
  >
    {{ children }}
  </v-infinite-scroll>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _height = useModelState("height");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _width = useModelState("width");
const _tag = useModelState("tag");
const _color = useModelState("color");
const _mode = useModelState("mode");
const _direction = useModelState("direction");
const _side = useModelState("side");
const _margin = useModelState("margin");
const _load_more_text = useModelState("load_more_text");
const _empty_text = useModelState("empty_text");
</script>