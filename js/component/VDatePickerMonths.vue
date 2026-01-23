<template>
  <v-date-picker-months
    :modelValue="_model_value"
    :height="_height"
    :color="_color"
    :max="_max"
    :min="_min"
    :year="_year"
    :allowedMonths="_allowed_months"
  >
    {{ children }}
  </v-date-picker-months>
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
const _year = useModelState("year");
const _allowed_months = useModelState("allowed_months");
</script>