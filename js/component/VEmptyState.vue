<template>
  <v-empty-state
    :title="_title"
    :text="_text"
    :icon="_icon"
    :height="_height"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :width="_width"
    :theme="_theme"
    :color="_color"
    :size="_size"
    :href="_href"
    :to="_to"
    :bgColor="_bg_color"
    :image="_image"
    :headline="_headline"
    :actionText="_action_text"
    :justify="_justify"
    :textWidth="_text_width"
  >
    {{ children }}
  </v-empty-state>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _title = useModelState("title");
const _text = useModelState("text");
const _icon = useModelState("icon");
const _height = useModelState("height");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _width = useModelState("width");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _size = useModelState("size");
const _href = useModelState("href");
const _to = useModelState("to");
const _bg_color = useModelState("bg_color");
const _image = useModelState("image");
const _headline = useModelState("headline");
const _action_text = useModelState("action_text");
const _justify = useModelState("justify");
const _text_width = useModelState("text_width");
</script>