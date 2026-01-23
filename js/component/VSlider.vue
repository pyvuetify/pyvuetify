<template>
  <v-slider
    :modelValue="_model_value"
    :error="_error"
    :reverse="_reverse"
    :density="_density"
    :maxWidth="_max_width"
    :minWidth="_min_width"
    :width="_width"
    :elevation="_elevation"
    :rounded="_rounded"
    :tile="_tile"
    :theme="_theme"
    :color="_color"
    :name="_name"
    :disabled="_disabled"
    :max="_max"
    :min="_min"
    :step="_step"
    :id="_id"
    :baseColor="_base_color"
    :prependIcon="_prepend_icon"
    :appendIcon="_append_icon"
    :readonly="_readonly"
    :ripple="_ripple"
    :label="_label"
    :centerAffix="_center_affix"
    :glow="_glow"
    :iconColor="_icon_color"
    :hideSpinButtons="_hide_spin_buttons"
    :hint="_hint"
    :persistentHint="_persistent_hint"
    :messages="_messages"
    :direction="_direction"
    :errorMessages="_error_messages"
    :maxErrors="_max_errors"
    :rules="_rules"
    :validateOn="_validate_on"
    :validationValue="_validation_value"
    :focused="_focused"
    :hideDetails="_hide_details"
    :thumbColor="_thumb_color"
    :thumbLabel="_thumb_label"
    :thumbSize="_thumb_size"
    :showTicks="_show_ticks"
    :ticks="_ticks"
    :tickSize="_tick_size"
    :trackColor="_track_color"
    :trackFillColor="_track_fill_color"
    :trackSize="_track_size"
    :noKeyboard="_no_keyboard"
  >
    {{ children }}
  </v-slider>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _model_value = useModelState("model_value");
const _error = useModelState("error");
const _reverse = useModelState("reverse");
const _density = useModelState("density");
const _max_width = useModelState("max_width");
const _min_width = useModelState("min_width");
const _width = useModelState("width");
const _elevation = useModelState("elevation");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _name = useModelState("name");
const _disabled = useModelState("disabled");
const _max = useModelState("max");
const _min = useModelState("min");
const _step = useModelState("step");
const _id = useModelState("id");
const _base_color = useModelState("base_color");
const _prepend_icon = useModelState("prepend_icon");
const _append_icon = useModelState("append_icon");
const _readonly = useModelState("readonly");
const _ripple = useModelState("ripple");
const _label = useModelState("label");
const _center_affix = useModelState("center_affix");
const _glow = useModelState("glow");
const _icon_color = useModelState("icon_color");
const _hide_spin_buttons = useModelState("hide_spin_buttons");
const _hint = useModelState("hint");
const _persistent_hint = useModelState("persistent_hint");
const _messages = useModelState("messages");
const _direction = useModelState("direction");
const _error_messages = useModelState("error_messages");
const _max_errors = useModelState("max_errors");
const _rules = useModelState("rules");
const _validate_on = useModelState("validate_on");
const _validation_value = useModelState("validation_value");
const _focused = useModelState("focused");
const _hide_details = useModelState("hide_details");
const _thumb_color = useModelState("thumb_color");
const _thumb_label = useModelState("thumb_label");
const _thumb_size = useModelState("thumb_size");
const _show_ticks = useModelState("show_ticks");
const _ticks = useModelState("ticks");
const _tick_size = useModelState("tick_size");
const _track_color = useModelState("track_color");
const _track_fill_color = useModelState("track_fill_color");
const _track_size = useModelState("track_size");
const _no_keyboard = useModelState("no_keyboard");
</script>