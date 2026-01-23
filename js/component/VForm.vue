<template>
  <v-form
    :modelValue="_model_value"
    :disabled="_disabled"
    :readonly="_readonly"
    :validateOn="_validate_on"
    :fastFail="_fast_fail"
  >
    {{ children }}
  </v-form>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _model_value = useModelState("model_value");
const _disabled = useModelState("disabled");
const _readonly = useModelState("readonly");
const _validate_on = useModelState("validate_on");
const _fast_fail = useModelState("fast_fail");
</script>