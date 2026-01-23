<template>
  <v-input
    :name="_name"
    :error="_error"
    :label="_label"
    :disabled="_disabled"
    :width="_width"
    :id="_id"
    :modelValue="_model_value"
    :color="_color"
    :density="_density"
    :theme="_theme"
    :maxWidth="_max_width"
    :minWidth="_min_width"
    :baseColor="_base_color"
    :prependIcon="_prepend_icon"
    :appendIcon="_append_icon"
    :readonly="_readonly"
    :direction="_direction"
    :messages="_messages"
    :centerAffix="_center_affix"
    :glow="_glow"
    :iconColor="_icon_color"
    :hideSpinButtons="_hide_spin_buttons"
    :hint="_hint"
    :persistentHint="_persistent_hint"
    :errorMessages="_error_messages"
    :maxErrors="_max_errors"
    :rules="_rules"
    :validateOn="_validate_on"
    :validationValue="_validation_value"
    :focused="_focused"
    :hideDetails="_hide_details"
  >
    {{ children }}
  </v-input>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _name = useModelState("name");
const _error = useModelState("error");
const _label = useModelState("label");
const _disabled = useModelState("disabled");
const _width = useModelState("width");
const _id = useModelState("id");
const _model_value = useModelState("model_value");
const _color = useModelState("color");
const _density = useModelState("density");
const _theme = useModelState("theme");
const _max_width = useModelState("max_width");
const _min_width = useModelState("min_width");
const _base_color = useModelState("base_color");
const _prepend_icon = useModelState("prepend_icon");
const _append_icon = useModelState("append_icon");
const _readonly = useModelState("readonly");
const _direction = useModelState("direction");
const _messages = useModelState("messages");
const _center_affix = useModelState("center_affix");
const _glow = useModelState("glow");
const _icon_color = useModelState("icon_color");
const _hide_spin_buttons = useModelState("hide_spin_buttons");
const _hint = useModelState("hint");
const _persistent_hint = useModelState("persistent_hint");
const _error_messages = useModelState("error_messages");
const _max_errors = useModelState("max_errors");
const _rules = useModelState("rules");
const _validate_on = useModelState("validate_on");
const _validation_value = useModelState("validation_value");
const _focused = useModelState("focused");
const _hide_details = useModelState("hide_details");
</script>