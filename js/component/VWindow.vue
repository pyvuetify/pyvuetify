<template>
  <v-window
    :tag="_tag"
    :reverse="_reverse"
    :disabled="_disabled"
    :modelValue="_model_value"
    :theme="_theme"
    :selectedClass="_selected_class"
    :mandatory="_mandatory"
    :direction="_direction"
    :continuous="_continuous"
    :nextIcon="_next_icon"
    :prevIcon="_prev_icon"
    :showArrows="_show_arrows"
    :touch="_touch"
    :crossfade="_crossfade"
    :transitionDuration="_transition_duration"
    :verticalArrows="_vertical_arrows"
  >
    {{ children }}
  </v-window>
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
const _mandatory = useModelState("mandatory");
const _direction = useModelState("direction");
const _continuous = useModelState("continuous");
const _next_icon = useModelState("next_icon");
const _prev_icon = useModelState("prev_icon");
const _show_arrows = useModelState("show_arrows");
const _touch = useModelState("touch");
const _crossfade = useModelState("crossfade");
const _transition_duration = useModelState("transition_duration");
const _vertical_arrows = useModelState("vertical_arrows");
</script>