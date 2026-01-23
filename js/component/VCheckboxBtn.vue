<template>
  <v-checkbox-btn
    :type="_type"
    :name="_name"
    :error="_error"
    :label="_label"
    :disabled="_disabled"
    :indeterminate="_indeterminate"
    :multiple="_multiple"
    :value="_value"
    :id="_id"
    :modelValue="_model_value"
    :color="_color"
    :density="_density"
    :theme="_theme"
    :inline="_inline"
    :baseColor="_base_color"
    :readonly="_readonly"
    :ripple="_ripple"
    :indeterminateIcon="_indeterminate_icon"
    :trueValue="_true_value"
    :falseValue="_false_value"
    :defaultsTarget="_defaults_target"
    :falseIcon="_false_icon"
    :trueIcon="_true_icon"
    :valueComparator="_value_comparator"
  >
    {{ children }}
  </v-checkbox-btn>
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
const _id = useModelState("id");
const _model_value = useModelState("model_value");
const _color = useModelState("color");
const _density = useModelState("density");
const _theme = useModelState("theme");
const _inline = useModelState("inline");
const _base_color = useModelState("base_color");
const _readonly = useModelState("readonly");
const _ripple = useModelState("ripple");
const _indeterminate_icon = useModelState("indeterminate_icon");
const _true_value = useModelState("true_value");
const _false_value = useModelState("false_value");
const _defaults_target = useModelState("defaults_target");
const _false_icon = useModelState("false_icon");
const _true_icon = useModelState("true_icon");
const _value_comparator = useModelState("value_comparator");
</script>