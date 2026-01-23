<template>
  <v-validation
    :name="_name"
    :error="_error"
    :label="_label"
    :disabled="_disabled"
    :modelValue="_model_value"
    :readonly="_readonly"
    :errorMessages="_error_messages"
    :maxErrors="_max_errors"
    :rules="_rules"
    :validateOn="_validate_on"
    :validationValue="_validation_value"
    :focused="_focused"
  >
    {{ children }}
  </v-validation>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _name = useModelState("name");
const _error = useModelState("error");
const _label = useModelState("label");
const _disabled = useModelState("disabled");
const _model_value = useModelState("model_value");
const _readonly = useModelState("readonly");
const _error_messages = useModelState("error_messages");
const _max_errors = useModelState("max_errors");
const _rules = useModelState("rules");
const _validate_on = useModelState("validate_on");
const _validation_value = useModelState("validation_value");
const _focused = useModelState("focused");
</script>