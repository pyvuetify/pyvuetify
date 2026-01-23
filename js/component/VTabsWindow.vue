<template>
  <v-tabs-window
    :tag="_tag"
    :reverse="_reverse"
    :disabled="_disabled"
    :modelValue="_model_value"
    :theme="_theme"
    :selectedClass="_selected_class"
    :direction="_direction"
    :crossfade="_crossfade"
    :transitionDuration="_transition_duration"
    :verticalArrows="_vertical_arrows"
  >
    {{ children }}
  </v-tabs-window>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _reverse = useModelState("reverse");
const _disabled = useModelState("disabled");
const _model_value = useModelState("model_value");
const _theme = useModelState("theme");
const _selected_class = useModelState("selected_class");
const _direction = useModelState("direction");
const _crossfade = useModelState("crossfade");
const _transition_duration = useModelState("transition_duration");
const _vertical_arrows = useModelState("vertical_arrows");
</script>