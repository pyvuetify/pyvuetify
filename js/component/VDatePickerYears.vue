<template>
  <v-date-picker-years
    :modelValue="_model_value"
    :height="_height"
    :color="_color"
    :max="_max"
    :min="_min"
    :allowedYears="_allowed_years"
  >
    {{ children }}
  </v-date-picker-years>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _model_value = useModelState("model_value");
const _height = useModelState("height");
const _color = useModelState("color");
const _max = useModelState("max");
const _min = useModelState("min");
const _allowed_years = useModelState("allowed_years");
</script>