<template>
  <v-img
    :alt="_alt"
    :height="_height"
    :src="_src"
    :width="_width"
    :draggable="_draggable"
    :absolute="_absolute"
    :color="_color"
    :rounded="_rounded"
    :tile="_tile"
    :inline="_inline"
    :transition="_transition"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :position="_position"
    :contentClass="_content_class"
    :eager="_eager"
    :options="_options"
    :cover="_cover"
    :gradient="_gradient"
    :lazySrc="_lazy_src"
    :sizes="_sizes"
    :srcset="_srcset"
    :aspectRatio="_aspect_ratio"
    :crossorigin="_crossorigin"
    :referrerpolicy="_referrerpolicy"
  >
    {{ children }}
  </v-img>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _alt = useModelState("alt");
const _height = useModelState("height");
const _src = useModelState("src");
const _width = useModelState("width");
const _draggable = useModelState("draggable");
const _absolute = useModelState("absolute");
const _color = useModelState("color");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _inline = useModelState("inline");
const _transition = useModelState("transition");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _position = useModelState("position");
const _content_class = useModelState("content_class");
const _eager = useModelState("eager");
const _options = useModelState("options");
const _cover = useModelState("cover");
const _gradient = useModelState("gradient");
const _lazy_src = useModelState("lazy_src");
const _sizes = useModelState("sizes");
const _srcset = useModelState("srcset");
const _aspect_ratio = useModelState("aspect_ratio");
const _crossorigin = useModelState("crossorigin");
const _referrerpolicy = useModelState("referrerpolicy");
</script>