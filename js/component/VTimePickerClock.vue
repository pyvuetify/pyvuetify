<template>
  <v-time-picker-clock
    :disabled="_disabled"
    :max="_max"
    :min="_min"
    :step="_step"
    :modelValue="_model_value"
    :color="_color"
    :scrollable="_scrollable"
    :readonly="_readonly"
    :rotate="_rotate"
    :ampm="_ampm"
    :displayedValue="_displayed_value"
    :double="_double"
    :format="_format"
    :allowedValues="_allowed_values"
  >
    {{ children }}
  </v-time-picker-clock>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _disabled = useModelState("disabled");
const _max = useModelState("max");
const _min = useModelState("min");
const _step = useModelState("step");
const _model_value = useModelState("model_value");
const _color = useModelState("color");
const _scrollable = useModelState("scrollable");
const _readonly = useModelState("readonly");
const _rotate = useModelState("rotate");
const _ampm = useModelState("ampm");
const _displayed_value = useModelState("displayed_value");
const _double = useModelState("double");
const _format = useModelState("format");
const _allowed_values = useModelState("allowed_values");
</script>