<template>
  <v-bottom-sheet
    :disabled="_disabled"
    :height="_height"
    :width="_width"
    :modelValue="_model_value"
    :location="_location"
    :absolute="_absolute"
    :theme="_theme"
    :transition="_transition"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :activator="_activator"
    :inset="_inset"
    :fullscreen="_fullscreen"
    :scrollable="_scrollable"
    :closeOnBack="_close_on_back"
    :contained="_contained"
    :contentClass="_content_class"
    :contentProps="_content_props"
    :opacity="_opacity"
    :noClickAnimation="_no_click_animation"
    :persistent="_persistent"
    :scrim="_scrim"
    :zIndex="_z_index"
    :target="_target"
    :activatorProps="_activator_props"
    :openOnClick="_open_on_click"
    :openOnHover="_open_on_hover"
    :openOnFocus="_open_on_focus"
    :closeOnContentClick="_close_on_content_click"
    :closeDelay="_close_delay"
    :openDelay="_open_delay"
    :eager="_eager"
    :locationStrategy="_location_strategy"
    :origin="_origin"
    :offset="_offset"
    :stickToTarget="_stick_to_target"
    :viewportMargin="_viewport_margin"
    :scrollStrategy="_scroll_strategy"
    :retainFocus="_retain_focus"
    :captureFocus="_capture_focus"
    :attach="_attach"
  >
    {{ children }}
  </v-bottom-sheet>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _disabled = useModelState("disabled");
const _height = useModelState("height");
const _width = useModelState("width");
const _model_value = useModelState("model_value");
const _location = useModelState("location");
const _absolute = useModelState("absolute");
const _theme = useModelState("theme");
const _transition = useModelState("transition");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _activator = useModelState("activator");
const _inset = useModelState("inset");
const _fullscreen = useModelState("fullscreen");
const _scrollable = useModelState("scrollable");
const _close_on_back = useModelState("close_on_back");
const _contained = useModelState("contained");
const _content_class = useModelState("content_class");
const _content_props = useModelState("content_props");
const _opacity = useModelState("opacity");
const _no_click_animation = useModelState("no_click_animation");
const _persistent = useModelState("persistent");
const _scrim = useModelState("scrim");
const _z_index = useModelState("z_index");
const _target = useModelState("target");
const _activator_props = useModelState("activator_props");
const _open_on_click = useModelState("open_on_click");
const _open_on_hover = useModelState("open_on_hover");
const _open_on_focus = useModelState("open_on_focus");
const _close_on_content_click = useModelState("close_on_content_click");
const _close_delay = useModelState("close_delay");
const _open_delay = useModelState("open_delay");
const _eager = useModelState("eager");
const _location_strategy = useModelState("location_strategy");
const _origin = useModelState("origin");
const _offset = useModelState("offset");
const _stick_to_target = useModelState("stick_to_target");
const _viewport_margin = useModelState("viewport_margin");
const _scroll_strategy = useModelState("scroll_strategy");
const _retain_focus = useModelState("retain_focus");
const _capture_focus = useModelState("capture_focus");
const _attach = useModelState("attach");
</script>