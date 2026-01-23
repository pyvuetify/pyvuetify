<template>
  <v-selection-control-group
    :type="_type"
    :modelValue="_model_value"
    :error="_error"
    :density="_density"
    :theme="_theme"
    :color="_color"
    :name="_name"
    :disabled="_disabled"
    :multiple="_multiple"
    :id="_id"
    :readonly="_readonly"
    :ripple="_ripple"
    :valueComparator="_value_comparator"
    :inline="_inline"
    :defaultsTarget="_defaults_target"
    :falseIcon="_false_icon"
    :trueIcon="_true_icon"
  >
    {{ children }}
  </v-selection-control-group>
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
const _id = useModelState("id");
const _readonly = useModelState("readonly");
const _ripple = useModelState("ripple");
const _value_comparator = useModelState("value_comparator");
const _inline = useModelState("inline");
const _defaults_target = useModelState("defaults_target");
const _false_icon = useModelState("false_icon");
const _true_icon = useModelState("true_icon");
</script>