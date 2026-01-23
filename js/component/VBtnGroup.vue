<template>
  <v-btn-group
    :tag="_tag"
    :color="_color"
    :density="_density"
    :border="_border"
    :elevation="_elevation"
    :rounded="_rounded"
    :tile="_tile"
    :theme="_theme"
    :variant="_variant"
    :baseColor="_base_color"
    :divided="_divided"
    :direction="_direction"
  >
    {{ children }}
  </v-btn-group>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _color = useModelState("color");
const _density = useModelState("density");
const _border = useModelState("border");
const _elevation = useModelState("elevation");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _theme = useModelState("theme");
const _variant = useModelState("variant");
const _base_color = useModelState("base_color");
const _divided = useModelState("divided");
const _direction = useModelState("direction");
</script>