<template>
  <v-counter
    :disabled="_disabled"
    :max="_max"
    :value="_value"
    :transition="_transition"
    :active="_active"
  >
    {{ children }}
  </v-counter>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _disabled = useModelState("disabled");
const _max = useModelState("max");
const _value = useModelState("value");
const _transition = useModelState("transition");
const _active = useModelState("active");
</script>