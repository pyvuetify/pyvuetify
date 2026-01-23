<template>
  <v-stepper-item
    :title="_title"
    :icon="_icon"
    :error="_error"
    :color="_color"
    :disabled="_disabled"
    :value="_value"
    :ripple="_ripple"
    :selectedClass="_selected_class"
    :subtitle="_subtitle"
    :rules="_rules"
    :completeIcon="_complete_icon"
    :editIcon="_edit_icon"
    :editable="_editable"
    :errorIcon="_error_icon"
    :complete="_complete"
  >
    {{ children }}
  </v-stepper-item>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _title = useModelState("title");
const _icon = useModelState("icon");
const _error = useModelState("error");
const _color = useModelState("color");
const _disabled = useModelState("disabled");
const _value = useModelState("value");
const _ripple = useModelState("ripple");
const _selected_class = useModelState("selected_class");
const _subtitle = useModelState("subtitle");
const _rules = useModelState("rules");
const _complete_icon = useModelState("complete_icon");
const _edit_icon = useModelState("edit_icon");
const _editable = useModelState("editable");
const _error_icon = useModelState("error_icon");
const _complete = useModelState("complete");
</script>