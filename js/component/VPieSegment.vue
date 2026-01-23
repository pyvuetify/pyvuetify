<template>
  <v-pie-segment
    :pattern="_pattern"
    :value="_value"
    :color="_color"
    :rounded="_rounded"
    :active="_active"
    :rotate="_rotate"
    :innerCut="_inner_cut"
    :hoverScale="_hover_scale"
    :gap="_gap"
    :animation="_animation"
    :hideSlice="_hide_slice"
    :reveal="_reveal"
  >
    {{ children }}
  </v-pie-segment>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _pattern = useModelState("pattern");
const _value = useModelState("value");
const _color = useModelState("color");
const _rounded = useModelState("rounded");
const _active = useModelState("active");
const _rotate = useModelState("rotate");
const _inner_cut = useModelState("inner_cut");
const _hover_scale = useModelState("hover_scale");
const _gap = useModelState("gap");
const _animation = useModelState("animation");
const _hide_slice = useModelState("hide_slice");
const _reveal = useModelState("reveal");
</script>