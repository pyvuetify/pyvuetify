<template>
  <v-stepper-actions
    :color="_color"
    :disabled="_disabled"
    :prevText="_prev_text"
    :nextText="_next_text"
  >
    {{ children }}
  </v-stepper-actions>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _color = useModelState("color");
const _disabled = useModelState("disabled");
const _prev_text = useModelState("prev_text");
const _next_text = useModelState("next_text");
</script>