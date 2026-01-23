<template>
  <v-selection-control
    :type="_type"
    :modelValue="_model_value"
    :error="_error"
    :density="_density"
    :theme="_theme"
    :color="_color"
    :name="_name"
    :disabled="_disabled"
    :multiple="_multiple"
    :value="_value"
    :id="_id"
    :baseColor="_base_color"
    :readonly="_readonly"
    :ripple="_ripple"
    :label="_label"
    :valueComparator="_value_comparator"
    :inline="_inline"
    :trueValue="_true_value"
    :falseValue="_false_value"
    :defaultsTarget="_defaults_target"
    :falseIcon="_false_icon"
    :trueIcon="_true_icon"
  >
    {{ children }}
  </v-selection-control>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _type = useModelState("type");
const _model_value = useModelState("model_value");
const _error = useModelState("error");
const _density = useModelState("density");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _name = useModelState("name");
const _disabled = useModelState("disabled");
const _multiple = useModelState("multiple");
const _value = useModelState("value");
const _id = useModelState("id");
const _base_color = useModelState("base_color");
const _readonly = useModelState("readonly");
const _ripple = useModelState("ripple");
const _label = useModelState("label");
const _value_comparator = useModelState("value_comparator");
const _inline = useModelState("inline");
const _true_value = useModelState("true_value");
const _false_value = useModelState("false_value");
const _defaults_target = useModelState("defaults_target");
const _false_icon = useModelState("false_icon");
const _true_icon = useModelState("true_icon");
</script>