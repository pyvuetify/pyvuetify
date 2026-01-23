<template>
  <v-confirm-edit
    :disabled="_disabled"
    :modelValue="_model_value"
    :color="_color"
    :cancelText="_cancel_text"
    :okText="_ok_text"
    :hideActions="_hide_actions"
  >
    {{ children }}
  </v-confirm-edit>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _disabled = useModelState("disabled");
const _model_value = useModelState("model_value");
const _color = useModelState("color");
const _cancel_text = useModelState("cancel_text");
const _ok_text = useModelState("ok_text");
const _hide_actions = useModelState("hide_actions");
</script>