<template>
  <v-hover
    :modelValue="_model_value"
    :disabled="_disabled"
    :closeDelay="_close_delay"
    :openDelay="_open_delay"
  >
    {{ children }}
  </v-hover>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _model_value = useModelState("model_value");
const _disabled = useModelState("disabled");
const _close_delay = useModelState("close_delay");
const _open_delay = useModelState("open_delay");
</script>