<template>
  <v-pie-tooltip
    :modelValue="_model_value"
    :item="_item"
    :target="_target"
    :offset="_offset"
    :transition="_transition"
    :titleFormat="_title_format"
    :subtitleFormat="_subtitle_format"
  >
    {{ children }}
  </v-pie-tooltip>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _model_value = useModelState("model_value");
const _item = useModelState("item");
const _target = useModelState("target");
const _offset = useModelState("offset");
const _transition = useModelState("transition");
const _title_format = useModelState("title_format");
const _subtitle_format = useModelState("subtitle_format");
</script>