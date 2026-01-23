<template>
  <v-item-group
    :tag="_tag"
    :disabled="_disabled"
    :max="_max"
    :multiple="_multiple"
    :modelValue="_model_value"
    :theme="_theme"
    :selectedClass="_selected_class"
    :mandatory="_mandatory"
  >
    {{ children }}
  </v-item-group>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _disabled = useModelState("disabled");
const _max = useModelState("max");
const _multiple = useModelState("multiple");
const _model_value = useModelState("model_value");
const _theme = useModelState("theme");
const _selected_class = useModelState("selected_class");
const _mandatory = useModelState("mandatory");
</script>