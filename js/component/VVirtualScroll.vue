<template>
  <v-virtual-scroll
    :height="_height"
    :width="_width"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :items="_items"
    :itemHeight="_item_height"
    :itemKey="_item_key"
    :renderless="_renderless"
  >
    {{ children }}
  </v-virtual-scroll>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _height = useModelState("height");
const _width = useModelState("width");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _items = useModelState("items");
const _item_height = useModelState("item_height");
const _item_key = useModelState("item_key");
const _renderless = useModelState("renderless");
</script>