<template>
  <v-time-picker-controls
    :color="_color"
    :disabled="_disabled"
    :value="_value"
    :readonly="_readonly"
    :viewMode="_view_mode"
    :ampm="_ampm"
    :hour="_hour"
    :minute="_minute"
    :second="_second"
    :period="_period"
    :useSeconds="_use_seconds"
  >
    {{ children }}
  </v-time-picker-controls>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _color = useModelState("color");
const _disabled = useModelState("disabled");
const _value = useModelState("value");
const _readonly = useModelState("readonly");
const _view_mode = useModelState("view_mode");
const _ampm = useModelState("ampm");
const _hour = useModelState("hour");
const _minute = useModelState("minute");
const _second = useModelState("second");
const _period = useModelState("period");
const _use_seconds = useModelState("use_seconds");
</script>