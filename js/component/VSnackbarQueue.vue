<template>
  <v-snackbar-queue
    :text="_text"
    :closable="_closable"
    :modelValue="_model_value"
    :height="_height"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :width="_width"
    :location="_location"
    :position="_position"
    :absolute="_absolute"
    :rounded="_rounded"
    :tile="_tile"
    :theme="_theme"
    :color="_color"
    :variant="_variant"
    :disabled="_disabled"
    :eager="_eager"
    :activator="_activator"
    :closeOnBack="_close_on_back"
    :contained="_contained"
    :contentClass="_content_class"
    :contentProps="_content_props"
    :opacity="_opacity"
    :zIndex="_z_index"
    :target="_target"
    :activatorProps="_activator_props"
    :openOnClick="_open_on_click"
    :openOnHover="_open_on_hover"
    :openOnFocus="_open_on_focus"
    :closeOnContentClick="_close_on_content_click"
    :closeDelay="_close_delay"
    :openDelay="_open_delay"
    :locationStrategy="_location_strategy"
    :origin="_origin"
    :offset="_offset"
    :transition="_transition"
    :attach="_attach"
    :closeText="_close_text"
    :vertical="_vertical"
    :multiLine="_multi_line"
    :timer="_timer"
    :timeout="_timeout"
  >
    {{ children }}
  </v-snackbar-queue>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _text = useModelState("text");
const _closable = useModelState("closable");
const _model_value = useModelState("model_value");
const _height = useModelState("height");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _width = useModelState("width");
const _location = useModelState("location");
const _position = useModelState("position");
const _absolute = useModelState("absolute");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _variant = useModelState("variant");
const _disabled = useModelState("disabled");
const _eager = useModelState("eager");
const _activator = useModelState("activator");
const _close_on_back = useModelState("close_on_back");
const _contained = useModelState("contained");
const _content_class = useModelState("content_class");
const _content_props = useModelState("content_props");
const _opacity = useModelState("opacity");
const _z_index = useModelState("z_index");
const _target = useModelState("target");
const _activator_props = useModelState("activator_props");
const _open_on_click = useModelState("open_on_click");
const _open_on_hover = useModelState("open_on_hover");
const _open_on_focus = useModelState("open_on_focus");
const _close_on_content_click = useModelState("close_on_content_click");
const _close_delay = useModelState("close_delay");
const _open_delay = useModelState("open_delay");
const _location_strategy = useModelState("location_strategy");
const _origin = useModelState("origin");
const _offset = useModelState("offset");
const _transition = useModelState("transition");
const _attach = useModelState("attach");
const _close_text = useModelState("close_text");
const _vertical = useModelState("vertical");
const _multi_line = useModelState("multi_line");
const _timer = useModelState("timer");
const _timeout = useModelState("timeout");
</script>