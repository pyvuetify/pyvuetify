<template>
  <v-card
    :flat="_flat"
    :replace="_replace"
    :link="_link"
    :tag="_tag"
    :title="_title"
    :disabled="_disabled"
    :height="_height"
    :width="_width"
    :image="_image"
    :location="_location"
    :color="_color"
    :density="_density"
    :border="_border"
    :elevation="_elevation"
    :rounded="_rounded"
    :tile="_tile"
    :theme="_theme"
    :text="_text"
    :variant="_variant"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :position="_position"
    :href="_href"
    :to="_to"
    :exact="_exact"
    :prependIcon="_prepend_icon"
    :appendIcon="_append_icon"
    :ripple="_ripple"
    :loading="_loading"
    :subtitle="_subtitle"
    :appendAvatar="_append_avatar"
    :hover="_hover"
    :prependAvatar="_prepend_avatar"
  >
    {{ children }}
  </v-card>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _flat = useModelState("flat");
const _replace = useModelState("replace");
const _link = useModelState("link");
const _tag = useModelState("tag");
const _title = useModelState("title");
const _disabled = useModelState("disabled");
const _height = useModelState("height");
const _width = useModelState("width");
const _image = useModelState("image");
const _location = useModelState("location");
const _color = useModelState("color");
const _density = useModelState("density");
const _border = useModelState("border");
const _elevation = useModelState("elevation");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _theme = useModelState("theme");
const _text = useModelState("text");
const _variant = useModelState("variant");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _position = useModelState("position");
const _href = useModelState("href");
const _to = useModelState("to");
const _exact = useModelState("exact");
const _prepend_icon = useModelState("prepend_icon");
const _append_icon = useModelState("append_icon");
const _ripple = useModelState("ripple");
const _loading = useModelState("loading");
const _subtitle = useModelState("subtitle");
const _append_avatar = useModelState("append_avatar");
const _hover = useModelState("hover");
const _prepend_avatar = useModelState("prepend_avatar");
</script>