<template>
  <v-pie
    :legend="_legend"
    :title="_title"
    :size="_size"
    :density="_density"
    :rounded="_rounded"
    :bgColor="_bg_color"
    :items="_items"
    :itemValue="_item_value"
    :itemKey="_item_key"
    :tooltip="_tooltip"
    :palette="_palette"
    :itemTitle="_item_title"
    :rotate="_rotate"
    :gaugeCut="_gauge_cut"
    :innerCut="_inner_cut"
    :hoverScale="_hover_scale"
    :gap="_gap"
    :animation="_animation"
    :hideSlice="_hide_slice"
    :reveal="_reveal"
  >
    {{ children }}
  </v-pie>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _legend = useModelState("legend");
const _title = useModelState("title");
const _size = useModelState("size");
const _density = useModelState("density");
const _rounded = useModelState("rounded");
const _bg_color = useModelState("bg_color");
const _items = useModelState("items");
const _item_value = useModelState("item_value");
const _item_key = useModelState("item_key");
const _tooltip = useModelState("tooltip");
const _palette = useModelState("palette");
const _item_title = useModelState("item_title");
const _rotate = useModelState("rotate");
const _gauge_cut = useModelState("gauge_cut");
const _inner_cut = useModelState("inner_cut");
const _hover_scale = useModelState("hover_scale");
const _gap = useModelState("gap");
const _animation = useModelState("animation");
const _hide_slice = useModelState("hide_slice");
const _reveal = useModelState("reveal");
</script>