<template>
  <v-layout-item
    :name="_name"
    :size="_size"
    :modelValue="_model_value"
    :absolute="_absolute"
    :order="_order"
    :position="_position"
  >
    {{ children }}
  </v-layout-item>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _name = useModelState("name");
const _size = useModelState("size");
const _model_value = useModelState("model_value");
const _absolute = useModelState("absolute");
const _order = useModelState("order");
const _position = useModelState("position");
</script>