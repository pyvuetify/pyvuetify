<template>
  <v-checkbox
    :type="_type"
    :name="_name"
    :error="_error"
    :label="_label"
    :disabled="_disabled"
    :indeterminate="_indeterminate"
    :multiple="_multiple"
    :value="_value"
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
    :ripple="_ripple"
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
    :indeterminateIcon="_indeterminate_icon"
    :trueValue="_true_value"
    :falseValue="_false_value"
    :defaultsTarget="_defaults_target"
    :falseIcon="_false_icon"
    :trueIcon="_true_icon"
    :valueComparator="_value_comparator"
  >
    {{ children }}
  </v-checkbox>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _type = useModelState("type");
const _name = useModelState("name");
const _error = useModelState("error");
const _label = useModelState("label");
const _disabled = useModelState("disabled");
const _indeterminate = useModelState("indeterminate");
const _multiple = useModelState("multiple");
const _value = useModelState("value");
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
const _ripple = useModelState("ripple");
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
const _indeterminate_icon = useModelState("indeterminate_icon");
const _true_value = useModelState("true_value");
const _false_value = useModelState("false_value");
const _defaults_target = useModelState("defaults_target");
const _false_icon = useModelState("false_icon");
const _true_icon = useModelState("true_icon");
const _value_comparator = useModelState("value_comparator");
</script>