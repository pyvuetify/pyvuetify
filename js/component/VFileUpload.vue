<template>
  <v-file-upload
    :title="_title"
    :length="_length"
    :border="_border"
    :icon="_icon"
    :modelValue="_model_value"
    :density="_density"
    :height="_height"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :width="_width"
    :elevation="_elevation"
    :location="_location"
    :position="_position"
    :rounded="_rounded"
    :tile="_tile"
    :tag="_tag"
    :theme="_theme"
    :color="_color"
    :name="_name"
    :disabled="_disabled"
    :multiple="_multiple"
    :subtitle="_subtitle"
    :opacity="_opacity"
    :scrim="_scrim"
    :closeDelay="_close_delay"
    :openDelay="_open_delay"
    :clearable="_clearable"
    :thickness="_thickness"
    :showSize="_show_size"
    :filterByType="_filter_by_type"
    :browseText="_browse_text"
    :dividerText="_divider_text"
    :hideBrowse="_hide_browse"
  >
    {{ children }}
  </v-file-upload>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _title = useModelState("title");
const _length = useModelState("length");
const _border = useModelState("border");
const _icon = useModelState("icon");
const _model_value = useModelState("model_value");
const _density = useModelState("density");
const _height = useModelState("height");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _width = useModelState("width");
const _elevation = useModelState("elevation");
const _location = useModelState("location");
const _position = useModelState("position");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _tag = useModelState("tag");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _name = useModelState("name");
const _disabled = useModelState("disabled");
const _multiple = useModelState("multiple");
const _subtitle = useModelState("subtitle");
const _opacity = useModelState("opacity");
const _scrim = useModelState("scrim");
const _close_delay = useModelState("close_delay");
const _open_delay = useModelState("open_delay");
const _clearable = useModelState("clearable");
const _thickness = useModelState("thickness");
const _show_size = useModelState("show_size");
const _filter_by_type = useModelState("filter_by_type");
const _browse_text = useModelState("browse_text");
const _divider_text = useModelState("divider_text");
const _hide_browse = useModelState("hide_browse");
</script>