<template>
  <v-window-item
    :disabled="_disabled"
    :value="_value"
    :selectedClass="_selected_class"
    :eager="_eager"
    :transition="_transition"
    :reverseTransition="_reverse_transition"
  >
    {{ children }}
  </v-window-item>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _disabled = useModelState("disabled");
const _value = useModelState("value");
const _selected_class = useModelState("selected_class");
const _eager = useModelState("eager");
const _transition = useModelState("transition");
const _reverse_transition = useModelState("reverse_transition");
</script>